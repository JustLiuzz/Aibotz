const fs = require('fs');

let handler = async (m, { conn }) => {
	let pfft = `

🟢 Premium Bot

• *16 Hari : 5.000* + Join Grup Kamu 5 Hari
• *28 Hari : 15.000* + Join Grup Kamu 10 Hari
• *40 Hari : 35.000* + Join Grup Kamu 15 Hari
• *52 Hari : 45,000* + Join Grup Kamu 20 Hari

*Keuntungan Premium*

> Unlimited Limit
> Akses Semua Fitur
> Pokoknya Gacor Kang
> Terbuka fitur 18+

 *_TESTIMONI 🛒🛍️_*
https://wa.me/6282245186794

 *Jika minat/mau tanya ² 👤*
 wa.me/6282245186794
`;
conn.sendMessage(m.chat, {
      text: pfft,
      contextInfo: {
      externalAdReply: {
      title: `○ Halo kak 🤗`,
      body: global.author,
      thumbnailUrl: `https://i.ibb.co.com/gvq3zD4/IMG-20240918-WA0107.jpg`,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
}

handler.help = ['premium']
handler.tags = ['main']
handler.command = /^(premium|prem)$/i

module.exports = handler;