let { MessageType } = require('@adiwajshing/baileys')
// OJEK //
let moneyojek = `${Math.floor(Math.random() * 1000)}`.trim()
let coinojek = `${Math.floor(Math.random() * 1050)}`.trim()
let expojek = `${Math.floor(Math.random() * 300)}`.trim()
let staminaojekkurang = `${Math.floor(Math.random() * 40)}`.trim()
const staminaojek = 5
// OJOL //
let moneyojol = `${Math.floor(Math.random() * 1240)}`.trim()
let coinojol = `${Math.floor(Math.random() * 1100)}`.trim()
let expojol = `${Math.floor(Math.random() * 100)}`.trim()
let staminaojolkurang = `${Math.floor(Math.random() * 40)}`.trim()
const staminaojol = 10
// KULI //
let moneykuli = `${Math.floor(Math.random() * 3213)}`.trim()
let coinkuli = `${Math.floor(Math.random() * 1250)}`.trim()
let expkuli = `${Math.floor(Math.random() * 320)}`.trim()
let staminakulikurang = `${Math.floor(Math.random() * 600)}`.trim()
const staminakuli = 20
// MONTIR //
let moneymontir = `${Math.floor(Math.random() * 1210)}`.trim()
let coinmontir = `${Math.floor(Math.random() * 2359)}`.trim()
let expmontir = `${Math.floor(Math.random() * 150)}`.trim()
let staminamontirkurang = `${Math.floor(Math.random() * 230)}`.trim()
const staminamontir = 15
// PILOT //
let moneypilot = `${Math.floor(Math.random() * 12210)}`.trim()
let coinpilot = `${Math.floor(Math.random() * 23519)}`.trim()
let exppilot = `${Math.floor(Math.random() * 1500)}`.trim()
let staminapilotkurang = `${Math.floor(Math.random() * 230)}`.trim()
const staminapilot = 100
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
// Ojek
    let __timers = (new Date - global.DATABASE._data.users[m.sender].lastkerjaojek)
        let _timers = (1200000 - __timers) 
        let timers = clockString(_timers)
// Ojol
        let __timers1 = (new Date - global.DATABASE._data.users[m.sender].lastkerjaojol)
        let _timers1 = (1800000 - __timers1) 
        let timers1 = clockString(_timers1)
// KULI //
        let __timers2 = (new Date - global.DATABASE._data.users[m.sender].lastkerjakuli)
        let _timers2 = (7200000 - __timers2) 
        let timers2 = clockString(_timers2)
// MONTIR //
let __timers3 = (new Date - global.DATABASE._data.users[m.sender].lastkerjamontir)
let _timers3 = (1200000 - __timers3) 
let timers3 = clockString(_timers3)
// PILOT //
let __timers4 = (new Date - global.DATABASE._data.users[m.sender].lastkerjapilot)
let _timers4 = (1200000 - __timers4) 
let timers4 = clockString(_timers4)
    let type = (args[0] || '').toLowerCase()
    const Kchat = `
List Pekerjaan
🛵 Ojek
🏍️ Ojol
👷🏻 Kuli
👨‍🔧 Montir
👨‍✈️ Pilot

Contoh: ${usedPrefix + command} ojek
`.trim()
    try {
        if (/kerja/i.test(command)) {
            switch (type) {
                case 'ojek':
                    if (new Date - global.DATABASE._data.users[m.sender].lastkerjaojek > 1200000) {
                            if (global.DATABASE._data.users[m.sender].stamina >= staminaojek) {
                                global.DATABASE._data.users[m.sender].stamina -= staminaojekkurang * 1
                                global.DATABASE._data.users[m.sender].money += moneyojek * 1
                                global.DATABASE._data.users[m.sender].coin += coinojek * 1
                                global.DATABASE._data.users[m.sender].exp += expojek * 1
                                global.DATABASE._data.users[m.sender].lastkerjaojek = new Date * 1
                                setTimeout(() => {
                                    m.reply(`Anda Telah Mengantarkan ${pickRandom(['Anak Sma Ke Sekolah', 'Ibu-Ibu Ke Pasar', 'Anak Sd Pulang Kerumah', 'Anak Smk Ke Indomaret', 'Anak Sma Pulang Kerumah', 'Nenek-Nenek Kerumah', 'Kakek-Kakek Ke Pasar'])} 💊 Stamina Anda Berkurang ${staminaojekkurang * 1} Dan Mendapatkan\n💵 Uang: ${moneyojek}\n🪙 Koin: ${coinojek}\n✉️ Exp :${expojek}`)
                                    }, 600000) 
               
                                    setTimeout(() => {
                                    m.reply('Nah Sudah Dapat, Otw Berangkat.')
                                    }, 180000) 
                                    
                                    setTimeout(() => {
                                    m.reply('_Mencari Pelanggan_')
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${staminaojek} Stamina 💊 baru bisa kerja jadi ojek`, '© ZeusBotz', 'Tambah Stamina', '.staminaheal', m)
                        } else conn.sendButton(m.chat, `Sepertinya Anda Kelelahan, Istirahat Selama: *${timers}*`, '© ZeusBotz', '☰ INV', '.inv', m)
                        break
                case 'pilot':
                    if (new Date - global.DATABASE._data.users[m.sender].lastkerjapilot > 1200000) {
                            if (global.DATABASE._data.users[m.sender].stamina >= staminapilot) {
                                global.DATABASE._data.users[m.sender].stamina -= staminapilotkurang * 1
                                global.DATABASE._data.users[m.sender].money += moneypilot * 1
                                global.DATABASE._data.users[m.sender].coin += coinpilot * 1
                                global.DATABASE._data.users[m.sender].exp += exppilot * 1
                                global.DATABASE._data.users[m.sender].misievent4 += true
                                global.DATABASE._data.users[m.sender].lastkerjapilot = new Date * 1
                                setTimeout(() => {
                                    m.reply(`Anda Baru Saja Ke ${pickRandom(['Mekkah'])} 💊 Stamina Anda Berkurang ${staminapilotkurang * 1} Dan Mendapatkan\n💵 Uang: ${moneypilot}\n🪙 Koin: ${coinpilot}\n✉️ Exp :${exppilot}`)
                                    }, 600000) 
               
                                    setTimeout(() => {
                                    m.reply('Bersiap Lepas Landas.')
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${staminapilot} Stamina 💊 baru bisa kerja jadi pilot`, '© ZeusBotz', 'Tambah Stamina', '.staminaheal', m)
                        } else conn.sendButton(m.chat, `Sepertinya Anda Kelelahan, Istirahat Selama: *${timers4}*`, '© ZeusBotz', '☰ INV', '.inv', m)
                        break
                case 'kuli':
                    if (new Date - global.DATABASE._data.users[m.sender].lastkerjakuli > 7200000) {
                            if (global.DATABASE._data.users[m.sender].stamina >= staminakuli) {
                                global.DATABASE._data.users[m.sender].stamina -= staminakulikurang * 1
                                global.DATABASE._data.users[m.sender].money += moneykuli * 1
                                global.DATABASE._data.users[m.sender].coin += coinkuli * 1
                                global.DATABASE._data.users[m.sender].exp += expkuli * 1
                                global.DATABASE._data.users[m.sender].lastkerjakuli = new Date * 1
                                setTimeout(() => {
                                    m.reply(`Anda Telah Membangun ${pickRandom(['Gedung Besar', 'Kafe', 'Pos Damkar', 'Masjid', 'Gereja'])} Dan 💊 Stamina Anda Berkurang ${staminakulikurang * 1} Dan Mendapatkan\n💵 Uang: ${moneykuli}\n🪙 Koin: ${coinkuli}\n✉️ Exp :${expkuli}`)
                                    }, 1800000) 
               
                                    setTimeout(() => {
                                    m.reply('Membuat Bangunan.')
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${staminakuli} Stamina 💊 baru bisa kerja jadi kuli`, '© ZeusBotz', 'Tambah Stamina', '.staminaheal', m)
                        } else conn.sendButton(m.chat, `Sepertinya Anda Kelelahan, Istirahat Selama: *${timers2}*`, '© ZeusBotz', '☰ INV', '.inv', m)
                        break
                case 'ojol':
                    if (new Date - global.DATABASE._data.users[m.sender].lastkerjaojol > 1800000) {
                            if (global.DATABASE._data.users[m.sender].stamina >= staminaojol) {
                                global.DATABASE._data.users[m.sender].stamina -= staminaojolkurang * 1
                                global.DATABASE._data.users[m.sender].money += moneyojol * 1
                                global.DATABASE._data.users[m.sender].coin += coinojol * 1
                                global.DATABASE._data.users[m.sender].exp += expojol * 1
                                global.DATABASE._data.users[m.sender].lastkerjaojol = new Date * 1
                                setTimeout(() => {
                                    m.reply(`Anda Telah Mengantarkan ${pickRandom(['Anak Sma Ke Sekolah', 'Ibu-Ibu Ke Pasar', 'Anak Sd Pulang Kerumah', 'Anak Smk Ke Indomaret', 'Anak Sma Pulang Kerumah', 'Nenek-Nenek Kerumah', 'Kakek-Kakek Ke Pasar'])} 💊 Stamina Anda Berkurang ${staminaojolkurang * 1} Dan Mendapatkan\n💵 Uang: ${moneyojol}\n🪙 Koin: ${coinojol}\n✉️ Exp :${expojol}`)
                                    }, 900000) 
               
                                    setTimeout(() => {
                                    m.reply('Nah Sudah Dapat, Otw Berangkat.')
                                    }, 300000) 
                                    
                                    setTimeout(() => {
                                    m.reply('_Menunggu Orderan_')
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${staminaojol} Stamina 💊 baru bisa kerja jadi ojol`, '© ZeusBotz', 'Tambah Stamina', '.staminaheal', m)
                        } else conn.sendButton(m.chat, `Sepertinya Anda Kelelahan, Istirahat Selama: *${timers1}*`, '© ZeusBotz', '☰ INV', '.inv', m)
                        break
                case 'montir':
                    if (new Date - global.DATABASE._data.users[m.sender].lastkerjamontir > 1800000) {
                            if (global.DATABASE._data.users[m.sender].stamina >= staminamontir) {
                                global.DATABASE._data.users[m.sender].stamina -= staminamontirkurang * 1
                                global.DATABASE._data.users[m.sender].money += moneymontir * 1
                                global.DATABASE._data.users[m.sender].coin += coinmontir * 1
                                global.DATABASE._data.users[m.sender].exp += expmontir * 1
                                global.DATABASE._data.users[m.sender].lastkerjamontir = new Date * 1
                                setTimeout(() => {
                                    m.reply(`Anda Telah Memperbaiki ${pickRandom(['Sepeda', 'Mobil', 'Truk', 'Bis', 'Motor'])} Dan 💊 Stamina Anda Berkurang ${staminamontirkurang * 1} Dan Mendapatkan\n💵 Uang: ${moneymontir}\n🪙 Koin: ${coinmontir}\n✉️ Exp :${expmontir}`)
                                    }, 480000) 
               
                                    setTimeout(() => {
                                    m.reply('Sedang Memperbaiki.')
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Minimal ${staminaojol} Stamina 💊 baru bisa kerja jadi montir`, '© ZeusBotz', 'Tambah Stamina', '.staminaheal', m)
                        } else conn.sendButton(m.chat, `Sepertinya Anda Kelelahan, Istirahat Selama: *${timers3}*`, '© ZeusBotz', '☰ INV', '.inv', m)
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
                conn.sendMessage(jid, 'kerja.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['kerja (apa)']
handler.tags = ['rpg']

handler.command = /^(kerja)$/i
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
