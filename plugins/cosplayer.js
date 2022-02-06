//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://zenzapi.xyz/api/random/cosplay?apikey=5ff91b2511d7')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, '.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['cosplay']
handler.tags = ['Anime']
handler.command = /^imgcosplay|cosplay$/i

handler.fail = null

module.exports = handler
