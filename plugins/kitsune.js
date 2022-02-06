//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    await m.reply('Sange Kok Ama Kartun')
     let res = await fetch('https://api.dapuhy.ga/api/nsfw/nsfwkitsune?apikey=Nekohime')
     let img = await res.buffer()
     let caption = `
Awokawokawokawok sange ama kartun
`.trim()
    conn.sendFile(m.chat, img, 'kitsune.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['kitsune']
handler.tags = ['Anime', 'Hentai']
handler.command = /^imgkitsune|kitsune$/i
handler.premium = true
handler.private = true

handler.fail = null

module.exports = handler
