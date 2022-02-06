let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6281319859673@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6281319859673', 'Galang Purnama', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler