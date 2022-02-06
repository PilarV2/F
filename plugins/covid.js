let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API('https://covid19.mathdro.id', '/api/countries/'+ (text)))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.confirmed) throw 'Negara?'
  if (json.confirmed) m.reply(`
Negara : ${text}
Dikonfirmasi : ${json.confirmed.value}
Pulih : ${json.recovered.value}
Meninggal : ${json.deaths.value}
Pembaharuan Terakhir : ${json.lastUpdate}
\n\n© Collabs Nekohime dengan kemenkes`.trim())
  else throw json
}
handler.help = ['covid'].map(v => v + ' <negara>')
handler.tags = ['internet']
handler.command = /^(corona|covid|covid19)$/i
//susu
module.exports = handler