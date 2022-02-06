const fetch = require('node-fetch')
let handler = async (m, { text, args }) => {
let res = await fetch('https://zenzapi.xyz/api/fakedata?country=en&apikey=5ff91b2511d7')
  let json = await res.json()
//  if (!json.status) throw json
	let { name, address, city, region, country, zip, phone_number, username, password, email, } = json.result
	let texts = `
*Nama:* ${name}
*Username:* ${username}
*Jalan:* ${address}
*Kota:* ${city}
*Zip:* ${zip}
*Negara:* ${country}
*Wilayah:* ${region}
*Nomor Telepon:* ${phone_number}
*Email:* ${email}
*Password:* ${password}
    `.trim()
	m.reply(texts)
}
handler.help = ['fakedata']
handler.tags = ['fun']
handler.command = /^fakedata/i

module.exports = handler