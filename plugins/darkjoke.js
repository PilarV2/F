//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://api.xteam.xyz/asupan/darkjoke?APIKEY=ea385908272d52b4')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, 'darkjoke.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['darkjoke']
handler.tags = ['internet']
handler.command = /^darkjoke$/i

handler.fail = null

module.exports = handler
