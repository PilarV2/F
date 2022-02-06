//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    await m.reply('Sange Kok Sama Memek Kartun, yahahahahahaahah')
     let res = await fetch('https://api.xteam.xyz/randomimage/pussy?APIKEY=ea385908272d52b4')
     let img = await res.buffer()
     let caption = `
GG lu bang sange ama memek kartun
`.trim()
    conn.sendFile(m.chat, img, 'pussy.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['pussy']
handler.tags = ['Anime', 'Hentai']
handler.command = /^pussy$/i
handler.premium = true
handler.private = true

handler.fail = null

module.exports = handler
