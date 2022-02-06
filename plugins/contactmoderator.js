let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6281319859673@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6285705034965', 'Moderator 1', m); //Krisna
  this.sendContact(m.chat, '6281388985270', 'Moderator 2', m); // Daffa
  this.sendContact(m.chat, '6289691596342', 'Moderator 3', m); // Rija
};
handler.help = ['moderator'];
handler.tags = ['info'];

handler.command = /^(mod|moderator)$/i;

module.exports = handler;
