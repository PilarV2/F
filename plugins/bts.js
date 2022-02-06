//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://pencarikode.xyz/api/bts?apikey=pais')
     let img = await res.buffer()
     let caption = `
*PLASTIK*
`.trim()
    conn.sendFile(m.chat, img, 'bts.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['imgbts']
handler.tags = ['internet']
handler.command = /^imgbts$/i

handler.fail = null

module.exports = handler
