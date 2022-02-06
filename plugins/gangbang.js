//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    await m.reply('Yahahahahah Sange Sama Kartun....')
     let res = await fetch('https://api.xteam.xyz/randomimage/gangbang?APIKEY=ea385908272d52b4')
     let img = await res.buffer()
     let caption = `
GG sange sama kartun..
`.trim()
    conn.sendFile(m.chat, img, '.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['gangbang']
handler.tags = ['Anime', 'Hentai']
handler.command = /^gangbang$/i
handler.premium = true
handler.private = true

handler.fail = null

module.exports = handler
