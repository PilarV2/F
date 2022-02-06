let handler = m => m

handler.before = function (m, { user, text, isBotAdmin, isAdmin }) {

  if (m.isBaileys && m.fromMe) return
  let chat = global.DATABASE.data.chats[m.chat]
  let name = this.getName(m.sender)

  if (chat.antivirtex && text > 500) {
    this.reply(m.chat `
*「 ANTI VIRTEX 」*

Terdeteksi *${name}* telah mengirim virtex!

Maaf Kamu akan dikick dari grup ini!
`.trim(), m)

if (isAdmin) return m.reply('*Eh maap kamu admin, kamu gk bakal dikick. hehe..*')
    if (!isBotAdmin) return m.reply('*Bot bukan admin, mana bisa kick orang _-*')
    this.groupRemove(m.chat, [m.sender])
  } else return false
}
handler.group = true


module.exports = handler
