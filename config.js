global.owner = ['6282245186794']  
global.mods = ['6282245186794'] 
global.prems = ['6282245186794']
global.nameowner = 'JustLiuzz'
global.numberowner = '6282245186794'
global.nomorown = '6282245186794'
global.sgc = 'https://chat.whatsapp.com/EolV6ywdUk3BUbga46q1Kk'
global.namebot = 'Zetta Ai'
global.mail = 'JustLiuzz@gmail.com' 
global.gc = 'https://chat.whatsapp.com/EolV6ywdUk3BUbga46q1Kk'
global.fotomu = 'https://i.ibb.co.com/gvq3zD4/IMG-20240918-WA0107.jpg'
global.menu = 'https://i.ibb.co.com/gvq3zD4/IMG-20240918-WA0107.jpg' //image menu , but not work 
global.instagram = 'gada'
global.wm = 'Zetta Ai 🍁'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'JustLiuzz'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'isiapikey'
global.xzn = 'katz'
global.lol = 'bc131817e421982d74969fdb'
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'dR8Lnw8b'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  lol: 'https://api.lolhuman.xyz',
  alya: 'https://api.alyachan.dev',
  btc: 'https://api.botcahx.eu.org',
  xzn: 'https://skizo.tech'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'isiapikey',
  'https://api.alyachan.dev': 'OQtXCT',
  'https://skizo.tech': 'katz',
  'https://api.botcahx.eu.org': 'APIKEY'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
