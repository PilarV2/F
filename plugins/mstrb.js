//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    await m.reply('Sange Kok Sama Kartun Yang Lagi Colmek, yahahahahahaahah')
     let res = await fetch('https://api.xteam.xyz/randomimage/mstrb?APIKEY=ea385908272d52b4')
     let img = await res.buffer()
     let caption = `
GG lu bang sange ama kartun
`.trim()
    conn.sendFile(m.chat, img, '.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['masturbasi']
handler.tags = ['Anime', 'Hentai']
handler.command = /^masturbasi|mstrb$/i
handler.premium = true
handler.private = true

handler.fail = null

module.exports = handler
