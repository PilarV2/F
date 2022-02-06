let fetch = require("node-fetch")
let arr = []
fetch('https://raw.githubusercontent.com/Galang-Purnama/sc/main/ara.txt')
  .then(res => res.text())
  .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
  let ara = arr[Math.floor(Math.random() * arr.length)]
  if (!ara) throw false
  await conn.sendFile(m.chat, ara, ara, null, m, true, { mimetype: 'audio/mp4' })
}
handler.customPrefix = /^ara ?ara$/i
handler.command = new RegExp

module.exports = handler