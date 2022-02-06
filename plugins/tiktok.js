const fetch = require('node-fetch')
let handler = async (m, { text, args, usedPrefix, command, conn, from }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    if (!text) throw `Urlnya ?\n\nCara Penggunaan ${usedPrefix + command} https://vt.tiktok.com/ZSebkusvL/`
try {
    await m.reply('_*⛔ MOHON TUNGGU*_')
    let res = await fetch(`https://api.ichikaa.xyz/api/tiktok?url=${text}&apikey=Aqcm4zDDUhzqFzj7JtmBbuhp5`)
  let json = await res.json()
	let { with_watermark, } = json.video
  conn.send2ButtonVid(m.chat, await (await fetch(with_watermark)).buffer(),`NIH BANG`, '© Nekohime', 'NOWM', `.tiktoknowm ${text}`, 'AUDIO', `.tiktokmp3 ${text}`, m)
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tiktok(dl)?)$/i

module.exports = handler