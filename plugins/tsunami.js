let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    try {
    let res = await fetch('https://leyscoders-api.herokuapp.com/api/info-tsunami?apikey=dappakntlll')
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { Wilayah, Kedalaman, magnitude, koordinat, waktu  } = json.result
  let texts = `
*Wilayah*: ${Wilayah}
*Kedalaman*: ${Kedalaman}
*Magnitudo*: ${magnitude}
*Waktu*: ${waktu}
*Koordinat*: ${koordinat}
    `.trim()
	m.reply(texts)
} catch (e) {
    console.log(e)
    throw '_*Error!*_'
}
}
handler.help = ['infotsunami']
handler.tags = ['internet', 'Berita']

handler.command = /^infotsunami|infosunami|tsunami|sunami$/i

module.exports = handler