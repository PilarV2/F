//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    await m.reply('WOW GG Lu Bro Sange Ama Trap')
     let res = await fetch('https://zenzapi.xyz/api/anime/nsfw/trap?apikey=5ff91b2511d7')
     let img = await res.buffer()
     let caption = `
Awokawokawokawok sange ama trap yahahahahahaahah
`.trim()
    conn.sendFile(m.chat, img, 'milf.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['trap']
handler.tags = ['Anime', 'Hentai']
handler.command = /^imgtrap|trap$/i
handler.premium = true
handler.private = true

handler.fail = null

module.exports = handler
