//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text, args }) => {
    if (!text) throw 'Urlnya mana ?'
    let res = await fetch(`https://api.xteam.xyz/videomaker/shaunthesheep?url=${args[0]}&APIKEY=ea385908272d52b4`)
    try {
     let mp4 = await res.buffer()
     let caption = `
Nah Sudah Jadi..
`.trim()
    conn.sendFile(m.chat, mp4, '.mp4', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['shaunthesheep <url>']
handler.tags = ['internet']

handler.command = /^shaunthesheep$/i

module.exports = handler
