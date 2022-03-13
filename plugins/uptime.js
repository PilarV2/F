let handler  = async (m, { conn, usedPrefix }) => { 
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  await conn.fakeReply(m.chat, '*TUNGGU SEBENTAR*', '0@s.whatsapp.net', `*ZeusBotz*`)
  conn.reply(m.chat, `
  Uptime: *${uptime}*
`.trim(), m)
}
handler.help = ['uptime']
handler.tags = ['info']
handler.command = /^(up(time)?)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
