const { sticker } = require('../lib/sticker')
const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { usedPrefix, conn, args, text, command }) => {
    if (!text) throw `Emojinya ?\n\nCara Penggunaan ${usedPrefix + command} 😳😩`
    try {
        await m.reply('*SEDANG DIBUAT*')
let res = await fetch(`https://api.neoxr.eu.org/api/emoji?q=${text}&apikey=yntkts`)
let json = await res.json()
let { url } = json.data
let stiker = await sticker(null, url, global.packname)
m.reply(stiker)
    } catch (e) {
        console.log(e)
        throw '_*Sepertinya Emoji Itu Tidak Support*_'
      }
}
handler.help = ['smix <emoji>', 'emojimix <emoji>']
handler.tags = ['sticker']
handler.command = /^(emojimix|smix)$/i

handler.limit = true

module.exports = handler