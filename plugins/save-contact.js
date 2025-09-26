const a106_0x40562e = a106_0x273d;
(function (_0x4d7a7f, _0x22d7da) {
    const _0x41a8ba = a106_0x273d,
        _0x2ad04e = _0x4d7a7f();
    while (!![]) {
        try {
            const _0x32a585 = -parseInt(_0x41a8ba(0xf3)) / 0x1 * (-parseInt(_0x41a8ba(0xc9)) / 0x2) + parseInt(_0x41a8ba(0xcc)) / 0x3 + parseInt(_0x41a8ba(0xc0)) / 0x4 * (parseInt(_0x41a8ba(0xcf)) / 0x5) + -parseInt(_0x41a8ba(0xe2)) / 0x6 * (-parseInt(_0x41a8ba(0xe1)) / 0x7) + -parseInt(_0x41a8ba(0xcd)) / 0x8 + -parseInt(_0x41a8ba(0xf0)) / 0x9 + -parseInt(_0x41a8ba(0xda)) / 0xa;
            if (_0x32a585 === _0x22d7da) break;
            else _0x2ad04e['push'](_0x2ad04e['shift']());
        } catch (_0x2888d5) {
            _0x2ad04e['push'](_0x2ad04e['shift']());
        }
    }
}(a106_0x2a80, 0xe3b69));

function a106_0x273d(_0x1fc703, _0x49b640) {
    const _0x2a80d1 = a106_0x2a80();
    return a106_0x273d = function (_0x273df6, _0xd64543) {
        _0x273df6 = _0x273df6 - 0xb9;
        let _0x33bb0b = _0x2a80d1[_0x273df6];
        return _0x33bb0b;
    }, a106_0x273d(_0x1fc703, _0x49b640);
}

const config = require('../config'),
    {
        cmd
    } = require(a106_0x40562e(0xd5)),
    {
        sleep
    } = require(a106_0x40562e(0xe8)),
    fs = require('fs')[a106_0x40562e(0xea)];

cmd({
    'pattern': 'savecontact',
    'alias': [a106_0x40562e(0xd9), 'vcf'],
    'desc': a106_0x40562e(0xe4),
    'category': a106_0x40562e(0xed),
    'use': a106_0x40562e(0xd7),
    'filename': __filename
}, async (_0x25ccf2, _0x54c077, _0x45ff93, {
    from: _0x48e911,
    participants: _0x6ab40d,
    groupMetadata: _0x235408,
    reply: _0x3c4a2e,
    isGroup: _0x6a36c9,
    isPatron: _0x26d7d1
}) => {
    const _0x4b078c = a106_0x40562e,
        _0x5ae958 = {
            'mQETA': '2348133729715',
            'KvZRt': _0x4b078c(0xd0),
            'rNNEg': _0x4b078c(0xc8),
            'wpLTz': _0x4b078c(0xdb),
            'VOZLe': function (_0x35081d, _0x471b5) {
                return _0x35081d(_0x471b5);
            },
            'TwbUG': _0x4b078c(0xc5),
            'ShARJ': _0x4b078c(0xef),
            'OnqpF': function (_0x3f6a07, _0x322771) {
                return _0x3f6a07(_0x322771);
            }
        };
    await _0x25ccf2[_0x4b078c(0xc1)](_0x45ff93[_0x4b078c(0xf2)][_0x4b078c(0xe7)], {
        'react': {
            'text': '📤',
            'key': _0x45ff93[_0x4b078c(0xf2)]
        }
    });
    try {
        if (!_0x6a36c9) return _0x3c4a2e('❌ This command can only be used in groups.');
        if (!_0x26d7d1) return _0x3c4a2e(_0x4b078c(0xee));

        let _0x446ff9 = new Set(),
            _0x402c47 = [];

        // SUPPRIMER ou COMMENTER cette partie qui écrase les contacts
        // const _0x519c1d = [{
        //     'phoneNumber': _0x5ae958[_0x4b078c(0xd2)],
        //     'name': _0x5ae958[_0x4b078c(0xeb)]
        // }, {
        //     'phoneNumber': _0x5ae958[_0x4b078c(0xc6)],
        //     'name': _0x4b078c(0xe5)
        // }];

        for (let _0x236a07 of _0x6ab40d) {
            if (!_0x236a07['phoneNumber']) continue;
            let _0x48960e = _0x236a07[_0x4b078c(0xdd)]['split']('@')[0x0];
            if (!_0x446ff9[_0x4b078c(0xe6)](_0x48960e)) {
                _0x446ff9[_0x4b078c(0xec)](_0x48960e);
                let _0x2443ba = _0x236a07[_0x4b078c(0xbf)] || _0x236a07[_0x4b078c(0xc7)] || '+' + _0x48960e;
                _0x402c47[_0x4b078c(0xbd)]({
                    'name': _0x2443ba, // Utiliser le nom réel au lieu d'un préfixe fixe
                    'phoneNumber': _0x48960e
                });
            }
        }

        // SUPPRIMER cette boucle qui ajoute des contacts fixes
        // for (let _0xcfa286 of _0x519c1d) {
        //     !_0x446ff9[_0x4b078c(0xe6)](_0xcfa286['phoneNumber']) && (_0x446ff9['add'](_0xcfa286[_0x4b078c(0xdd)]), _0x402c47[_0x4b078c(0xbd)]({
        //         'name': _0x4b078c(0xc4) + _0xcfa286['name'],
        //         'phoneNumber': _0xcfa286['phoneNumber']
        //     }));
        // }

        let _0x24c8c8 = _0x402c47[_0x4b078c(0xbe)];
        if (_0x24c8c8 === 0x0) return _0x3c4a2e(_0x4b078c(0xd1));

        await _0x3c4a2e(_0x4b078c(0xb9) + _0x24c8c8 + _0x4b078c(0xe9));

        let _0x5e27ae = _0x402c47[_0x4b078c(0xe0)]((_0x3a9b42, _0x491741) =>
            _0x4b078c(0xdc) +
            (_0x491741 + 0x1) + '] ' +
            _0x3a9b42['name'] +
            '\x0aTEL;type=CELL;type=VOICE;waid=' +
            _0x3a9b42[_0x4b078c(0xdd)] + ':' +
            _0x3a9b42[_0x4b078c(0xdd)] +
            _0x4b078c(0xce)
        )[_0x4b078c(0xcb)]('\x0a');

        let _0x346b21 = './PATRON-MD.vcf';
        await fs[_0x4b078c(0xd6)](_0x346b21, _0x5e27ae['trim'](), _0x5ae958[_0x4b078c(0xd3)]),
        await _0x5ae958[_0x4b078c(0xc3)](sleep, 0x7d0),
        await _0x25ccf2['sendMessage'](_0x48e911, {
            'document': await fs[_0x4b078c(0xd4)](_0x346b21),
            'mimetype': _0x5ae958['TwbUG'],
            'fileName': _0x5ae958[_0x4b078c(0xca)],
            'caption': _0x4b078c(0xdf) +
                _0x235408[_0x4b078c(0xba)] +
                _0x4b078c(0xc2) +
                _0x6ab40d[_0x4b078c(0xbe)] +
                _0x4b078c(0xbc) +
                _0x24c8c8 + '*'
        }, {
            'quoted': _0x54c077
        }),
        await fs[_0x4b078c(0xde)](_0x346b21);
    } catch (_0x53fb3e) {
        console[_0x4b078c(0xe3)](_0x4b078c(0xf1), _0x53fb3e),
        _0x5ae958[_0x4b078c(0xbb)](_0x3c4a2e, _0x4b078c(0xd8));
    }
});

function a106_0x2a80() {
    const _0x256833 = ['*\x0aTOTAL CONTACTS: *', 'push', 'length', 'name', '4YKWFKJ', 'sendMessage', '*\x0aMEMBERS: *', 'VOZLe', '🚹 ', 'text/vcard', 'rNNEg', 'pushName', '2348025533222', '6bNPXPo', 'ShARJ', 'join', '3162936JHvQmj', '444424dEuwat', '\x0aEND:VCARD', '6361460BNSPdN', 'ᴘᴀᴛʀᴏɴ 🚹', '❌ No contacts found.', 'mQETA', 'wpLTz', 'readFile', '../command', 'writeFile', '.savecontact', '⚠️ Failed to save contacts. Please try again.', 'svcontact', '26819540JpyPrZ', 'utf8', 'BEGIN:VCARD\x0aVERSION:3.0\x0aFN:[', 'phoneNumber', 'unlink', 'GROUP: *', 'map', '49UjRihg', '1231716TVtwUH', 'error', 'Save and Export Group Contacts as VCF', 'ᴘᴀᴛʀᴏɴ 2', 'has', 'remoteJid', '../lib/functions', ' contacts. Generating file...*', 'promises', 'KvZRt', 'add', 'group', '❌ This command is only for the Owner.', 'PATRON-MD.vcf', '14810922pmWuFw', 'Error saving contacts:', 'key', '517424cPtPPq', '*Saved ', 'subject', 'OnqpF'];
    a106_0x2a80 = function () {
        return _0x256833;
    };
    return a106_0x2a80();
}            }
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
