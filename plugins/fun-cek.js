const fetch = require('node-fetch');
const fs = require('fs');

const handler = async function(m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) {

    let template = (args[0] || '').toLowerCase();
    if (!args[0]) {
        let caption = `*Contoh Penggunaan*

${usedPrefix + command} tai @user

*List Command*
• anjing
• asu
• babi
• bajingan
• banci
• bangsat
• bego
• bejad
• bencong
• bolot
• brengsek
• budek
• buta
• geblek
• gembel
• gila
• goblok
• iblis
• idiot
• jablay
• jelek
• kampret
• kampungan
• kamseupay
• keparat
• kontol
• kunyuk
• maho
• memek
• monyet
• ngentot
• pecun
• perek
• sarap
• setan
• sinting
• sompret
• tai
• tolol
• udik
`;
        await conn.reply(m.chat, caption, m, {
            mentions: await conn.parseMention(caption)
        });
        return;
    }

    if (command) {
        switch (template) {

            case 'anjing':
            case 'asu':
            case 'babi':
            case 'bajingan':
            case 'banci':
            case 'bangsat':
            case 'bego':
            case 'bejad':
            case 'bencong':
            case 'bolot':
            case 'brengsek':
            case 'budek':
            case 'buta':
            case 'geblek':
            case 'gembel':
            case 'gila':
            case 'goblok':
            case 'iblis':
            case 'idiot':
            case 'jablay':
            case 'jelek':
            case 'kampret':
            case 'kampungan':
            case 'kamseupay':
            case 'keparat':
            case 'kontol':
            case 'kunyuk':
            case 'maho':
            case 'memek':
            case 'monyet':
            case 'ngentot':
            case 'pecun':
            case 'perek':
            case 'sarap':
            case 'setan':
            case 'sinting':
            case 'sompret':
            case 'tai':
            case 'tolol':
            case 'udik':

                let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
                let pp = await conn.profilePictureUrl(who).catch(_ => 'default_profile_picture_url'); // Ganti 'default_profile_picture_url' dengan URL gambar default
                let name = await conn.getName(who);
                let som = 100;
                let sim = Math.random() * som;
                let caption = `Tingkat ke *${args[0]}an* \nAtas nama ${name ? args[1] : '*Semua Member*'} ${'@' + who.split("@")[0] ? args[1] : '*Semua Member*'} \nAdalah Sebesar *${Number(sim).toFixed(2)}%*`;
                await conn.reply(m.chat, caption, m, {
                    mentions: await conn.parseMention(caption)
                });
                break;
        }
    }
};
handler.help = ['cek *<menu> <user>*'];
handler.tags = ['fun'];
handler.command = /^cek$/i;
handler.limit = 8;
module.exports = handler;