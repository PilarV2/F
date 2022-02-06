let handler = async (m, { conn }) => {
    if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    if (global.DATABASE.data.users[m.sender].misievent1 == false) return conn.reply(m.chat, `Misi 1 Belum Diselesaikan`, m)
    if (global.DATABASE.data.users[m.sender].misievent2 == false) return conn.reply(m.chat,`Misi 2 Belum Diselesaikan`, m)
    if (global.DATABASE.data.users[m.sender].misievent3 == false) return conn.reply(m.chat,`Misi 3 Belum Diselesaikan`, m)
    if (global.DATABASE.data.users[m.sender].misievent4 == false) return conn.reply(m.chat,`Misi 4 Belum Diselesaikan`, m)
    if (global.DATABASE.data.users[m.sender].elementcreated == false) return conn.reply(m.chat,`Misi 5 Belum Diselesaikan`, m)
      if (global.DATABASE.data.users[m.sender].eventregist == 0) return conn.reply(m.chat, 'Anda Tidak Meregist Event jadi Anda Tidak Bisa Mengikuti Event Ini.', m)
      if (global.DATABASE.data.users[m.sender].claim_event == true) {
        conn.reply(m.chat, `Selamat Anda Telah Mendapatkan 5 Petasan 🧨.`, m);
        global.DATABASE._data.users[m.sender].petasan += 5;
        global.DATABASE._data.users[m.sender].claim_event += true;
      } else {
        conn.sendButton(m.chat, 'Anda Telah Mengclaim Event Ini.', '© Nekohime','☰ INV', '.inv')
      }
      };
    handler.help = ['claimevent'];
    handler.tags = ['rpg'];
    handler.command = /^(claimevent)$/i;
    
    module.exports = handler;