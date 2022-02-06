//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://pencarikode.xyz/api/blow?apikey=pais')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, 'blow.gif', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['blowanime']
handler.tags = ['Anime','Hentai']
handler.command = /^blowanime$/i
handler.premium = true

handler.fail = null

module.exports = handler
