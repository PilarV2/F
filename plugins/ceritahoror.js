//created by Nekohime
const fetch = require('node-fetch')
let handler = async (m, { conn, text, args }) => {
  try {
     let res = await fetch(`https://api.lolhuman.xyz/api/ceritahoror?apikey=fbae6d14a386f857e3d8267b`)
     let json = await res.json()
//  if (!json.status) throw json
     let { title, thumbnail, story, } = json.result
    conn.sendFile(m.chat, thumbnail, 'thumbial.jpg', `
*Judul*: ${title}
*Cerita*: ${story}
    `.trim(), m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['ceritahoror']
handler.tags = ['internet']
handler.command = /^ceritahoror$/i

module.exports = handler
