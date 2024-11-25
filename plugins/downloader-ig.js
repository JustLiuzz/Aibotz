const tio = require('btch-downloader');
const fetch = require('node-fetch');

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`;
    let json = await tio.igdl(args[0]);
    let fetchStartTime = new Date();
    let fetchResponse = await fetch(args[0]);
    let fetchEndTime = new Date();
    let fetchTime = fetchEndTime - fetchStartTime;
    for (let i of json) {
        conn.sendFile(m.chat, i.url, 'instagram.mp4', `◦  *Fetching* : ${fetchTime} ms`, m);
        conn.delay(1500);
    }
};

handler.help = ['ig','igdl','instagram'];
handler.tags = ['downloader'];

handler.command = /^(ig|instagram|igdl)$/i;

handler.register = false;
handler.limit = true;

module.exports = handler;