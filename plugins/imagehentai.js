//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == 1) return conn.reply(m.chat, `${global.ban}`, m)
  try {
    await m.reply('Njir sange ama kartun')
     let res = await fetch('https://zenzapi.xyz/api/anime/nsfw/hentai?apikey=5ff91b2511d7')
     let img = await res.buffer()
     let caption = `
Awokawokawok sange ama kartun
`.trim()
    conn.sendFile(m.chat, img, '.jpg', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['imghentai']
handler.tags = ['Anime', 'Hentai']
handler.command = /^imghentai$/i
handler.premium = true
handler.private = true

handler.fail = null

module.exports = handler
