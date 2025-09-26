const { cmd } = require('../command');
const { sleep } = require('../lib/functions');
const fs = require('fs').promises;

cmd({
    pattern: 'savecontact',
    alias: ['svcontact', 'vcf'],
    desc: 'Save and Export Group Contacts as VCF',
    category: 'group',
    use: '.savecontact',
    filename: __filename
}, async (m, sock, data, { from, participants, groupMetadata, reply, isGroup, isPatron }) => {
    try {
        if (!isGroup) return reply('❌ This command can only be used in groups.');
        if (!isPatron) return reply('❌ This command is only for the Owner.');

        await m.react(data.key.remoteJid, { react: { text: '📤', key: data.key } });

        let uniqueContacts = new Set();
        let contactList = [];

        // Traiter tous les participants du groupe
        for (let participant of participants) {
            if (!participant.phoneNumber) continue;
            
            let phoneNumber = participant.phoneNumber.split('@')[0];
            
            if (!uniqueContacts.has(phoneNumber)) {
                uniqueContacts.add(phoneNumber);
                
                let name = participant.pushName || participant.name || '+' + phoneNumber;
                
                contactList.push({
                    name: name,
                    phoneNumber: phoneNumber
                });
            }
        }

        if (contactList.length === 0) return reply('❌ No contacts found.');

        await reply(`*Saved ${contactList.length} contacts. Generating file...*`);

        // Générer le contenu VCF
        let vcfContent = contactList.map((contact, index) => 
            `BEGIN:VCARD\nVERSION:3.0\nFN:[${index + 1}] ${contact.name}\nTEL;type=CELL;type=VOICE;waid=${contact.phoneNumber}:${contact.phoneNumber}\nEND:VCARD`
        ).join('\n');

        let filename = './PATRON-MD.vcf';
        
        // Sauvegarder le fichier
        await fs.writeFile(filename, vcfContent.trim(), 'utf8');
        await sleep(2000);

        // Envoyer le fichier
        await sock.sendMessage(from, {
            document: await fs.readFile(filename),
            mimetype: 'text/vcard',
            fileName: 'PATRON-MD.vcf',
            caption: `*GROUP: ${groupMetadata.subject}*\n*MEMBERS: ${participants.length}*\n*TOTAL CONTACTS: ${contactList.length}*`
        }, { quoted: m });

        // Supprimer le fichier temporaire
        await fs.unlink(filename);

    } catch (error) {
        console.error('Error saving contacts:', error);
        reply('⚠️ Failed to save contacts. Please try again.');
    }
});
