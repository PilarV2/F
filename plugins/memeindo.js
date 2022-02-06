//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://xteam.xyz/randomimage/meme?APIKEY=ea385908272d52b4')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, 'meme.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['memeindo']
handler.tags = ['internet']
handler.command = /^memeindo$/i
handler.premium = false

handler.fail = null

module.exports = handler
