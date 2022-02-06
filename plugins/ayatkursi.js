let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
    let res = await fetch('https://api.dapuhy.ga/api/islam/ayatkursi?apikey=Xpwm9UPkblRRDkf')
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { tafsir, translation, arabic, latin  } = json.result
  let texts = `
*Tafsir*: ${tafsir}
*Arabnya*: ${arabic}
*Latin*: ${latin}
*Artinya*: ${translation}
    `.trim()
	m.reply(texts)
}
handler.help = ['ayatkursi']
handler.tags = ['Islam', 'quran']

handler.command = /^ayatkursi$/i

module.exports = handler