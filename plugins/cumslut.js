//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    await m.reply('Lu Klo Sange Jangan Ama Kartun Goblok!!')
     let res = await fetch('https://zenzapi.xyz/api/morensfw/cumsluts?apikey=5ff91b2511d7')
     let img = await res.buffer()
     let caption = `
Awokawokawokawok sange ama kartun
`.trim()
    conn.sendFile(m.chat, img, 'hentai.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['cumsluts']
handler.tags = ['Anime', 'Hentai']
handler.command = /^cumsluts$/i
handler.premium = true
handler.private = true

handler.fail = null

module.exports = handler
