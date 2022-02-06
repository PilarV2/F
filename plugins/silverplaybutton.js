//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text, args }) => {
    if (!text) throw 'Urlnya mana ?'
    let res = await fetch(`https://api.zeks.me/api/splaybutton?apikey=apivinz&text=${args[0]}`)
    try {
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, '.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['silverplaybutton'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(silver|s)(play|p)(button|b)$/i
handler.proses = true

handler.fail = null

module.exports = handler
