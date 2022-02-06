let handler = async (m, { conn }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    if (global.DATABASE.data.users[m.sender].eventregist == 0) return conn.reply(m.chat, 'Anda Tidak Meregist Event jadi Anda Tidak Bisa Mengikuti Event Ini.', m)
    let misi4 = global.DATABASE.data.users[m.sender].misievent4;
      let misi3 = global.DATABASE.data.users[m.sender].misievent3;
      let misi5 = global.DATABASE.data.users[m.sender].elementcreated;
      let misi1 = global.DATABASE.data.users[m.sender].misievent1;
      let misi2 = global.DATABASE.data.users[m.sender].misievent2;
        m.reply(`*LIST MISI EVENT FIREWORKS*\n\n
=========================
1. Mainkan Games Siapakahaku 1000 Kali: ${misi1}/1000
=========================

=========================
2. Membuat 1 Rumah: ${misi2 == false ? '❌' : '' || misi2 == true ? '✅' : ''}
=========================

=========================
3. Claim Harian: ${misi3 == false ? '❌' : '' || misi3 == true ? '✅' : ''}
=========================

=========================
4. Kerja Pilot: ${misi4 == false ? '❌' : '' || misi4 == true ? '✅' : ''}
=========================

=========================
5. Membuat ELemen: ${misi5 == false ? '❌' : '' || misi5 == true ? '✅' : ''}
=========================`);
    };
  handler.help = ['listmisi'];
  handler.tags = ['rpg'];
  handler.command = /^(listmisi)$/i;
  
  module.exports = handler;