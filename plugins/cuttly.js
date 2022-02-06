const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
if (!text) throw 'Urlnya mana ?'
let res = await fetch(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${args[0]}&apikey=dappakntlll`)
try {
  let json = await res.json()
//  if (!json.status) throw json
	let { create_at, hasil, title, full_link } = json.result
	let texts = `
Judul: *${title}*
Link Asli: *${full_link}*
Dibuat Pada: *${create_at}*
Urlnya: *${hasil}*
  `.trim()
	m.reply(texts)
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['cuttly'].map(v => v + ' <url>')
handler.tags = ['Short Url']
handler.command = /^cuttly$/i

module.exports = handler