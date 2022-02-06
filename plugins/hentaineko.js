let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  await m.reply('⚠️ _*SEDANG DIPROSES*_')
  let res = await fetch('https://api.waifu.pics/nsfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Sange Kok Sama Kucing Stress!!', '© Nekohime', '➡️ NEXT', '/hentaineko', m)
}
handler.help = ['hentaineko']
handler.tags = ['Anime', 'Hentai']
handler.command = /^hentaineko$/i
handler.premium = true
handler.private = true
module.exports = handler
