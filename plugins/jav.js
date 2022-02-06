let handler  = async (m, { conn }) => {
    conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
  }
  handler.help = ['bokepjav']
  handler.tags = ['premium']
  handler.command = /^(bokepjav|unduhbokepjav|bagibokepjav|bgibokepjav|downloadbokepjav|jav)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = true
  handler.group = false
  handler.private = true
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  global.bokepjav = [
    ``,
  ]
  