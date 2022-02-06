const fetch = require('node-fetch')
let handler = async (m, { text, args, usedPrefix, command, conn, from }) => {
    let chat = global.DATABASE._data.chats[m.chat]
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    if (!text) throw `Urlnya ?\n\nCara Penggunaan ${usedPrefix + command} https://vt.tiktok.com/ZSebkusvL/`
try {
    await m.reply('_*⛔ MOHON TUNGGU*_')
    let res = await fetch(`https://api.ichikaa.xyz/api/tiktok?url=${text}&apikey=Aqcm4zDDUhzqFzj7JtmBbuhp5`)
  let json = await res.json()
	let { music, } = json
    conn.sendFile(m.chat, music, 'tiktokaudio.mp3', `NIH BANG`.trim(), m, null, {
      asDocument: chat.useDocument
    })
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktokmp3)$/i

module.exports = handler