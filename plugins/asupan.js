//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://zenzapi.xyz/api/asupan?apikey=5ff91b2511d7')
     let mp4 = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, mp4, '.mp4', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['asupan']
handler.tags = ['internet']
handler.command = /^asupan$/i

handler.fail = null

module.exports = handler
