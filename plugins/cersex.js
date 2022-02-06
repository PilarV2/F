//created by Nekohime
const fetch = require('node-fetch')
let handler = async (m, { conn, text, args }) => {
    if (!text) throw 'Yang apa ?'
  try {
     let res = await fetch(`http://zekais-api.herokuapp.com/cersex?query=${args[0]}&apikey=PGnzsHIN`)
     let json = await res.json()
//  if (!json.status) throw json
     let { title, thumb, result, category } = json
    conn.sendFile(m.chat, thumb, 'thumbial.jpg', `
*Judul*: ${title}
*Kategori*: ${category}
*Cerita*: ${result}
    `.trim(), m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['cersex']
handler.tags = ['internet']
handler.command = /^cersex$/i

handler.fail = null

module.exports = handler
