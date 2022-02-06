//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://zenzapi.xyz/api/random/shinobu?apikey=72525650a586')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, 'img.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['shinobu']
handler.tags = ['Anime']
handler.command = /^shinobu$/i

module.exports = handler
