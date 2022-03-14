let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6281319859673@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6282287750102', 'Moderator 1', m); //AlpinGey
};
handler.help = ['moderator'];
handler.tags = ['info'];

handler.command = /^(mod|moderator)$/i;

module.exports = handler;
