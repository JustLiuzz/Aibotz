var fetch = require('node-fetch');

var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa Kamu? `
//Set Logic Disini 
let logic = 'Hai Saya Adalah ZettaAi Kecerdasan Buatan Yang Di Ciptakan Dan Dikembangkan Oleh Syawaliuz Octavian,Saya Bernama Vestia Zetta,Saya Dibuat Oleh Syawaliuz Octavian Dengan Penuh Kesempurnaan Yang Tiada Taraa,Jika Kamu Ingin Mencari Tau Lebih Dalam Tentang Ownerku Visit https://wa.me/6282245186794'
await m.reply(wait)
  var js = await fetch(`https://api.betabotz.eu.org/api/search/openai-logic?text=${text}&logic=${logic}&apikey=${lann}`)
var json = await js.json()
try {
  await m.reply(json.message)
} catch (err ) {
m.reply(`${eror}`)
}}
handler.command = handler.help = ['Zetta','openai2','chatgpt2'];
handler.tags = ['info'];
handler.premium = false
module.exports = handler;
