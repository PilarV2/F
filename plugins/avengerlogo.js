//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    let res = await fetch(global.API('https://pencarikode.xyz', '/api/textpro/avengers-logo'+ (text)), '?apikey=pais')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, 'avenger-logo.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['avengerslogo']
handler.tags = ['internet', 'avengers']
handler.command = /^avengerslogo$/i
handler.premium = true

handler.fail = null

module.exports = handler
