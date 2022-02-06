let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let list = Object.entries(global.DATABASE.data.users)
	let dm = !args || !args[0] ? 0 : isNumber(args[0]) ? parseInt(args[0]) : 0
	dm = Math.max(0, dm)
	list.map(([user, data], i) => (Number(data.diamond = dm)))
		conn.reply(m.chat, `*berhasil direset ${dm} diamond / user*`, m)
}
handler.help = ['diamond'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetdiamond)$/i

handler.rowner = true

module.exports = handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
