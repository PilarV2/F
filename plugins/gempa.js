let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    let res = await fetch('https://pencarikode.xyz/api/gempa?apikey=pais')
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { Wilayah, Kedalaman, Magnitudo, Bujur, Lintang, Waktu  } = json.result
  let texts = `
*Wilayah*: ${Wilayah}
*Kedalaman*: ${Kedalaman}
*Magnitudo*: ${Magnitudo}
*Waktu*: ${Waktu}
*Bujur*: ${Bujur}
*Lintang*: ${Lintang}
    `.trim()
	m.reply(texts)
}
handler.help = ['gempa']
handler.tags = ['internet', 'Berita']

handler.command = /^gempa$/i

module.exports = handler