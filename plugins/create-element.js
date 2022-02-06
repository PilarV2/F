let { MessageType } = require('@adiwajshing/baileys')
// OJEK //
const elementanah = "Elemen Tanah ⛰️"
const elemenangin = "Elemen Angin 🌀"
const elemenair = "Elemen Air 💧"
const elemenapi = "Elemen Api 🔥"
const elemenpetir = "Elemen Petir ⚡"
const elemenes = "Elemen Es ❄️"
const levelminimal = 50
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    let elemenku = global.DATABASE.data.users[m.sender]
    let type = (args[0] || '').toLowerCase()
    const Kchat = `
List Elemen
Elemen Tanah ⛰️
Elemen Api 🔥
Elemen Air 💧
Elemen Petir ⚡
Elemen Es ❄️
Elemen Angin 🌀

Contoh: ${usedPrefix + command} tanah
`.trim()
    try {
        if (/buatelemen/i.test(command)) {
            switch (type) {
                case 'tanah':
                    if (elemenku.elementcreated == true) return m.reply('Elemen telah dibuat')
                            if (global.DATABASE._data.users[m.sender].level >= levelminimal) {
                                global.DATABASE._data.users[m.sender].elemen += elementanah
                                global.DATABASE._data.users[m.sender].elementcreated += true
                                setTimeout(() => {
                                    m.reply(`Anda Berhasil Membuat ${elementanah}`)
                                    }, 600000) 
               
                                    setTimeout(() => {
                                    m.reply(`Sedang Bertapa Di Gunung ${pickRandom(['Arjuno', 'Bromo', 'Semeru', 'Merapi', 'Selamet', 'Salak', 'Pangrango', 'Gede', 'Rinjani'])} Untuk Mendapatkan Elemen Tanah.`)
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${levelminimal} Level 🧬 baru bisa membuat elemen`, '© Nekohime', '☰ INV', '.inv', m)
                        break
                case 'angin':
                    if (elemenku.elementcreated == true) return m.reply('Elemen telah dibuat')
                            if (global.DATABASE._data.users[m.sender].level >= levelminimal) {
                                global.DATABASE._data.users[m.sender].elemen += elemenangin
                                global.DATABASE._data.users[m.sender].elementcreated += true
                                setTimeout(() => {
                                    m.reply(`Anda Berhasil Membuat ${elemenangin}`)
                                    }, 600000) 
               
                                    setTimeout(() => {
                                    m.reply(`Sedang Bertapa Di Gunung ${pickRandom(['Arjuno', 'Bromo', 'Semeru', 'Merapi', 'Selamet', 'Salak', 'Pangrango', 'Gede', 'Rinjani'])} Untuk Mendapatkan Elemen Angin.`)
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${levelminimal} Level 🧬 baru bisa membuat elemen`, '© Nekohime', '☰ INV', '.inv', m)
                        break
                case 'petir':
                    if (elemenku.elementcreated == true) return m.reply('Elemen telah dibuat')
                            if (global.DATABASE._data.users[m.sender].level >= levelminimal) {
                                global.DATABASE._data.users[m.sender].elemen += elemenpetir
                                global.DATABASE._data.users[m.sender].elementcreated += true
                                setTimeout(() => {
                                    m.reply(`Anda Berhasil Membuat ${elemenpetir}`)
                                    }, 600000) 
               
                                    setTimeout(() => {
                                    m.reply(`Sedang Bertapa Di Gunung ${pickRandom(['Arjuno', 'Bromo', 'Semeru', 'Merapi', 'Selamet', 'Salak', 'Pangrango', 'Gede', 'Rinjani'])} Untuk Mendapatkan Elemen Petir.`)
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${levelminimal} Level 🧬 baru bisa membuat elemen`, '© Nekohime', '☰ INV', '.inv', m)
                        break
                case 'air':
                    if (elemenku.elementcreated == true) return m.reply('Elemen telah dibuat')
                            if (global.DATABASE._data.users[m.sender].level >= levelminimal) {
                                global.DATABASE._data.users[m.sender].elemen += elemenair
                                global.DATABASE._data.users[m.sender].elementcreated += true
                                setTimeout(() => {
                                    m.reply(`Anda Berhasil Membuat ${elemenair}`)
                                    }, 600000) 
               
                                    setTimeout(() => {
                                    m.reply(`Sedang Bertapa Di Gunung ${pickRandom(['Arjuno', 'Bromo', 'Semeru', 'Merapi', 'Selamet', 'Salak', 'Pangrango', 'Gede', 'Rinjani'])} Untuk Mendapatkan Elemen Air.`)
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${levelminimal} Level 🧬 baru bisa membuat elemen`, '© Nekohime', '☰ INV', '.inv', m)
                        break
                case 'es':
                    if (elemenku.elementcreated == true) return m.reply('Elemen telah dibuat')
                            if (global.DATABASE._data.users[m.sender].level >= levelminimal) {
                                global.DATABASE._data.users[m.sender].elemen += elemenes
                                global.DATABASE._data.users[m.sender].elementcreated += true
                                setTimeout(() => {
                                    m.reply(`Anda Berhasil Membuat ${elemenes}`)
                                    }, 600000) 
               
                                    setTimeout(() => {
                                    m.reply(`Sedang Bertapa Di Gunung ${pickRandom(['Arjuno', 'Bromo', 'Semeru', 'Merapi', 'Selamet', 'Salak', 'Pangrango', 'Gede', 'Rinjani'])} Untuk Mendapatkan Elemen Es.`)
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${levelminimal} Level 🧬 baru bisa membuat elemen`, '© Nekohime', '☰ INV', '.inv', m)
                        break
                case 'api':
                    if (elemenku.elementcreated == true) return m.reply('Elemen telah dibuat')
                            if (global.DATABASE._data.users[m.sender].level >= levelminimal) {
                                global.DATABASE._data.users[m.sender].elemen += elemenapi
                                global.DATABASE._data.users[m.sender].elementcreated += true
                                setTimeout(() => {
                                    m.reply(`Anda Berhasil Membuat ${elemenapi}`)
                                    }, 600000) 
               
                                    setTimeout(() => {
                                    m.reply(`Sedang Bertapa Di Gunung ${pickRandom(['Arjuno', 'Bromo', 'Semeru', 'Merapi', 'Selamet', 'Salak', 'Pangrango', 'Gede', 'Rinjani'])} Untuk Mendapatkan Elemen Api.`)
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${levelminimal} Level 🧬 baru bisa membuat elemen`, '© Nekohime', '☰ INV', '.inv', m)
                        break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'create-element.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['buatelemen {apa}']
handler.tags = ['rpg']

handler.command = /^(buatelemen)$/i
module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}