const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
let res = await fetch(`https://pencarikode.xyz/api/katabijak?apikey=pais`)
try {
  let json = await res.json()
//  if (!json.status) throw json
	let { message } = json
	let texts = `
${message}
  `.trim()
	m.reply(texts)
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['katasenja']
handler.tags = ['internet']
handler.command = /^katasenja$/i

module.exports = handler