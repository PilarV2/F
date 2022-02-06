let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://pencarikode.xyz/api/hentaipoi?apikey=APIKEY')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
}
handler.help = ['hentaipoi']
handler.tags = ['internet', 'Hentai']
handler.command = /^(hentaipoi)$/i
handler.premium = true

//Only
module.exports = handler
