let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
	let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let perumahan = global.DATABASE.data.users[m.sender].perumahan
    let bekas = global.DATABASE.data.users[m.sender].rumah_bekas
    let rumah = global.DATABASE.data.users[m.sender].rumah
    let rumah_indah = global.DATABASE.data.users[m.sender].rumah_indah
    let str = `
Jumlah Rumah *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*\n
🏘️ Perumahan *=* ${perumahan}
🏚️ Rumah Bekas *=* ${bekas}
🏠 Rumah *=* ${rumah}
🏡 Rumah Indah *=* ${rumah_indah}

NOTE: *Berinvestasilah dengan rumah bekas, karena semakin tahun harga jualnya makin mahal*
`.trim()
    conn.reply(m.chat, str, m)
}
handler.help = ['rumah']
handler.command = /^(rumah)$/i
handler.tags = ['rpg']

module.exports = handler