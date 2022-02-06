const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=dappakntlll`)
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
handler.help = ['nick(apa)']
handler.tags = ['internet']
handler.command = /^(nick|nickgame)?(pubg|freefire|ml|mobilelegend|ff|codm|cod|pubgnewstate)$/i

module.exports = handler