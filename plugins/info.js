let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  const chats = conn.chats.all()
  const groups = chats.filter(v => v.jid.endsWith('g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
┌─〔 Status 〕
├ Aktif selama ${uptime}
├ Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
├ *${groups.length}* Grup
├ *${totalreg}* Pengguna
├ *${totaljadibot.length}* Jadibot
├ *${conn.blocklist.length}* Terblock
├ *${Object.entries(global.DATABASE.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
├ *${Object.entries(global.DATABASE.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
└────
${readMore}
┌─〘 PIRACY NEKOHIME BOT 〙
├ *KAMI TIDAK BERTANGGUNG*
├   *JAWAB ATAS PENYALAH*
├   *GUNAAN BOT*
├ *KAMI TIDAK BERTANGGUNG*
├   *JAWAB ATAS KEBOCORAN DATA*
├   *PRIBADI ANDA*
├ *KAMI AKAN MENYIMPAN DATA*
├   *SEPERTI NOMER TELEPON*
├  *ANDA DI DATABASE KAMI*
├ 
├ 
├ ©2021 ${package.name}
├ Create By Galang Purnama
├  〘 NEKOHIME BOT 〙
└────
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info(bot)?)$/i

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
