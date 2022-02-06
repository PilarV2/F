//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text, args }) => {
    if (!text) throw 'Urlnya mana ?'
    let res = await fetch(`https://api.xteam.xyz/imagetopdf?url=${args[0]}&APIKEY=ea385908272d52b4`)
    try {
     let pdf = await res.buffer()
     let caption = `
Nah Sudah Jadi..
`.trim()
    conn.sendFile(m.chat, pdf, '.pdf', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['imgtopdf'].map(v => v + ' <url>')
handler.tags = ['tools']
handler.command = /^imgtopdf$/i
handler.proses = true

handler.fail = null

module.exports = handler
