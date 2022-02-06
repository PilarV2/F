//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
     let res = await fetch('https://zenzapi.xyz/api/anime/sfw/fox_girl?apikey=72525650a586')
     let img = await res.buffer()
     let caption = `
© *Nekohime*
`.trim()
    conn.sendFile(m.chat, img, 'milf.png', caption, m)
   } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['fox']
handler.tags = ['Anime', 'Hentai']
handler.command = /^foxgirl|fox$/i

handler.fail = null

module.exports = handler