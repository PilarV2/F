const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
if (!text) throw 'Kisah Nabi ?'
let res = await fetch(`https://api.dapuhy.ga/api/islam/kisahnabi?nabi=${args[0]}&apikey=Xpwm9UPkblRRDkf`)
try {
  let json = await res.json()
//  if (!json.status) throw json
	let { name, kelahiran, wafat_usia, singgah, kisah } = json
	let texts = `
*Nama*: ${name}
*Kelahiran*: ${kelahiran}
*Wafat*: ${wafat_usia}
*Tempat Tinggal Di*: ${singgah}
*Kisah*: ${kisah}
  `.trim()
	m.reply(texts)
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['kisahnabi'].map(v => v + ' <nabi>')
handler.tags = ['Islam']
handler.command = /^kisahnabi|ceritanabi$/i

module.exports = handler