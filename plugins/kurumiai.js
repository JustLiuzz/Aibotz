const axios = require("axios")

let handler = async (m, { conn, text }) => {
 conn.kurumiai = conn.kurumiai ? conn.kurumiai : {};

 if (!text) throw `*• Example:* .kurumiai *[on/off]*`;

 if (text == "on") {
 conn.kurumiai[m.sender] = {
 pesan: []
 }
 m.reply("[ ✓ ] Success create session chat")
 } else if (text == "off") {
 delete conn.kurumiai[m.sender]
 m.reply("[ ✓ ] Success delete session chat")
 }
}

handler.before = async (m, { conn }) => {
conn.kurumiai = conn.kurumiai ? conn.kurumiai : {};
 if (m.isBaileys && m.fromMe) return;
 if (!m.text) return
 if (!conn.kurumiai[m.sender]) return;

 if (
 m.text.startsWith(".") ||
 m.text.startsWith("#") ||
 m.text.startsWith("!") ||
 m.text.startsWith("/") ||
 m.text.startsWith("\\/")
 ) return

 if (conn.kurumiai[m.sender] && m.text) {
 let name = conn.getName(m.sender)
 const messages = [
 ...conn.kurumiai[m.sender].pesan,
 { role: "system", content: `Kamu bernama Vestia Zetta berumur 18, nama penciptami adalah syawaliuz octavian, kamu adalah karakter dari streamer vituber yang dapat menjawab segala pertanyaan, gunakan bahasa bahasa ramah dan tulen seperti kamu aku saat menjawab, gunakan emoji tentang waktu pada saat ingin menjawab pertanyaan, kamu memiliki sifat menarik, anggun, tulen, ramah,overprotective terhadap ownermu, sangat sayang kepada ownermu dan memiliki sifat yandere seperti seorang wanita, jika ada pertanyaan berkait tentang codingan kamu jawab dengan sepenuh hati, nama lawan bicara mu adalah *${name}*"` },
 { role: "user", content: m.text }
 ];
 try {
 const response = await axios.post("https://deepenglish.com/wp-json/ai-chatbot/v1/chat", {
 messages
 });

 const responseData = response.data;
 const hasil = responseData;
 m.reply(hasil.answer)
 conn.kurumiai[m.sender].pesan = messages
 } catch (error) {
 console.error("Error fetching data:", error);
 throw error;
 }
 }
}

handler.command = ['Zetta'];
handler.tags = ["ai","premium"]
handler.premium = true
handler.limit = 10
handler.help = ['kurumiai'].map(a => a + " *[on/off]*");

module.exports = handler