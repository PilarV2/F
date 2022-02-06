const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
if (!text) throw 'Urlnya mana ?'
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${args[0]}&apikey=dappakntlll`)
try {
  let json = await res.json()
//  if (!json.status) throw json
	let { result } = json
	let texts = `
${result}
  `.trim()
	m.reply(texts)
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['tinyurl'].map(v => v + ' <url>')
handler.tags = ['Short Url']
handler.command = /^tinyurl$/i

module.exports = handler