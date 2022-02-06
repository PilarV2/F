const fetch = require('node-fetch')
const FormData = require('form-data')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker.js')

let handler  = async (m, { conn, text }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
  if (text) {
    let res = await fetch('https://api.xteam.xyz/ttp?file&text=' + text)
    let json = await res.buffer()
    let stiker = await sticker(json, false, `${global.packname}`)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } else m.reply('Textnya apa om?')
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']
handler.command = /^ttp$/i

handler.fail = null

module.exports = handler
