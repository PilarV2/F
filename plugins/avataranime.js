//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://api.dapuhy.ga/api/sfw/sfwavatar?apikey=Xpwm9UPkblRRDkf')
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

handler.help = ['avatar']
handler.tags = ['Anime']
handler.command = /^(avatar)?(sfw|anime)$/i

handler.fail = null

module.exports = handler
