//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://api.xteam.xyz/randomimage/ppcouple?APIKEY=ea385908272d52b4')
     let json = await res.json()
     //  if (!json.status) throw json
          let { male, female } = json.result
     conn.sendFile(m.chat, male, 'ppcouple.jpg', `
Ini untuk *Cowok*
    `.trim(), m)
    conn.sendFile(m.chat, female, 'ppcouple.jpg', `
Ini untuk *Cewek*
    `.trim(), m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^ppcouple$/i

handler.fail = null

module.exports = handler
