const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
if (!text) throw 'url?'
	let res = await fetch(global.API('pencarikode', '/api/nekopoi', {
		link: args[0]
	}, 'apikey'))
  let json = await res.json()
//  if (!json.status) throw json
	let { title, sinobsis, thumb } = json.result
	let texts = `
	*Judul*: ${title}
	*Sinopsis*: ${sinobsis}`.trim()
	conn.sendFile(m.chat, thumb, 'hentai.png', texts, m)
	m.reply(texts)
}
handler.help = ['nekopoi'].map(v => v + ' <url>')
handler.tags = ['Hentai','Nekopoi']
handler.command = /^nekopoi/i

module.exports = handler