const fetch = require('node-fetch')
let handler = async (m, { text, args, usedPrefix, command, conn, from }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    if (!text) throw `Urlnya ?\n\nCara Penggunaan ${usedPrefix + command} https://vt.tiktok.com/ZSebkusvL/`
try {
    await m.reply('_*⛔ MOHON TUNGGU*_')
    let res = await fetch(`https://api.ichikaa.xyz/api/tiktok?url=${text}&apikey=Aqcm4zDDUhzqFzj7JtmBbuhp5`)
  let json = await res.json()
	let { no_watermark, } = json.video
  conn.sendFile(m.chat, no_watermark, 'tiktoknowm.mp4', 'NIH BANG', m)
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['tiktoknowm'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktoknowm)$/i

module.exports = handler