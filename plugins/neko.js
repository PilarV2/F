let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
  await m.reply('⚠️ _*SEDANG DIPROSES*_')
  let res = await fetch('https://api.waifu.pics/sfw/neko')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  await conn.sendButtonImg(m.chat, await (await fetch(json.url)).buffer(), 'Nyaa', '© Nekohime', '➡️ NEXT', '/neko', m)
}
handler.help = ['neko']
handler.tags = ['Anime']
handler.command = /^neko$/i

module.exports = handler