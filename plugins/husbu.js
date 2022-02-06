//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://api.xteam.xyz/randomimage/husbu2?APIKEY=ea385908272d52b4')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, 'husbu.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['husbu']
handler.tags = ['Anime']
handler.command = /^husbu$/i

handler.fail = null

module.exports = handler
