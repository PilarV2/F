const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
if (!text) throw 'Heronya ?'
let res = await fetch(`https://api.ichikaa.xyz/api/genshin?chara=${text}&apikey=Aqcm4zDDUhzqFzj7JtmBbuhp5`)
try {
  let json = await res.json()
//  if (!json.status) throw json
	let { name, image, cv, description, city, quote, weapon, rating, element } = json.result
	conn.sendFile(m.chat, image, 'thumbial.jpg', `
*Nama Hero*: ${name}
*CV*: ${cv}
*Quote*: ${quote}
*Kota*: ${city}
*Element*: ${element}
*Senjata*: ${weapon}
*Rating*: ${rating}
*Deskripsi*: ${description}
    `.trim(), m)
} catch (e) {
	console.log(e)
	throw '_*Error!*_'
  }
}
handler.help = ['genshinhero'].map(v => v + ' <hero>')
handler.tags = ['internet']
handler.command = /^genshinhero$/i

module.exports = handler