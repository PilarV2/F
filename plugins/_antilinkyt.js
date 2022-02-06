let handler = m => m

let linkRegex = /youtu.be\/(?:invite\/)?([0-9A-Za-z]{10-20})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isYoutubeLink = linkRegex.exec(m.text)

  if (chat.antiLink && isYoutubeLink) {
    await m.reply(`*「 ANTI LINK YOUTUBE 」*\n\nTerdeteksi *${await this.getName(m.sender)}* kamu telah mengirim link youtube!\n\nMaaf Kamu akan dikick dari grup ini byee!`)
    if (isAdmin) return m.reply('*Eh maap kamu admin, kamu gk bakal dikick. hehe..*')
    if (!isBotAdmin) return m.reply('*Bot bukan admin, mana bisa kick orang _-*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
