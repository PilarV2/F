//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://pencarikode.xyz/api/blackpink?apikey=pais')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, 'blackpink.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['imgblackpink']
handler.tags = ['internet']
handler.command = /^imgblackpink$/i

handler.fail = null

module.exports = handler
