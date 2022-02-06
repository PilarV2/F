let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Teksnya', m)

  await m.reply('_*‼️ MOHON TUNGGU*_.')
	axios.get(`https://api-anoncybfakeplayer.herokuapp.com/pastebin?text=${text}`).then ((res) => {
	 	let hasil = `Nih Link Pastebinmu Dh Jadi\n${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['pastebin'].map(v => v + ' <opsional>')
handler.tags = ['tools']
handler.command = /^(pastebin)$/i

handler.limit = true

module.exports = handler