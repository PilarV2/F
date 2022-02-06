let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...judulnya?'
  let res = await fetch(global.API('pencarikode', '/download/joox', {search: args[0]}, 'apikey'))
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { judul, artist, album, duration, filesize, mp3_url, img_url } = json.result
  conn.sendFile(m.chat, img_url, 'thumbial.jpg', `
*Judul*: ${judul}
*Artis*: ${artist}
*Album*: ${album}
*durasi*: ${duration}
*Ukuran*: ${filesize}
*Link Lagu*: ${mp3_url}
    `.trim(), m)
}
handler.help = ['joox'].map(v => v + ' <judul>')
handler.tags = ['downloader']

handler.command = /^joox|downloadlagu|carilagu|downloadjoox$/i

module.exports = handler