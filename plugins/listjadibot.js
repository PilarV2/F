async function handler(m, { usedPrefix }) {
    let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
    m.reply(users.map(v => 'wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}menu (${v.name})`).join('\n'))
  }
handler.help = ['listjadibot']
handler.tags = ['jadibot']
handler.command = /^(listjadibot)$/i
  
  handler.owner = true
  handler.mods = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  handler.exp = 0
  handler.limit = false
  
  module.exports = handler