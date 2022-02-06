const fetch = require('node-fetch')
let handler = async (m, { text, args, usedPrefix, command, conn, from }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    if (!text) throw `Kodenya mana ?\n\nCara Penggunaan ${usedPrefix + command} 212121`
try {
    await m.reply('_*Sedang Diproses*_')
    let res = await fetch(`https://iloveapi.herokuapp.com/nsfw/nhentaipdf?code=${text}`)
  let json = await res.json()
	let { url } = json.result
    if (res.status === 400) {
    conn.sendFile(m.chat, url, `${text}.pdf`, '', m, false, { asDocument: true })
        await m.reply('Tidak bisa ngeload page yang lebih dari 100 atau kemungkinan error')
        return
    }
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['nhentai'].map(v => v + ' <code>')
handler.tags = ['downloader']
handler.limit = true

handler.command = /^nhentai$/i

module.exports = handler