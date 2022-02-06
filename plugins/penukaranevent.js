let { MessageType } = require('@adiwajshing/baileys')
const { exp } = require('./menu')
const petasanminemas = 10
const pricegoldticket = 1
const petasanminbiasa = 5
const pricenormalticket = 1
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    if (global.DATABASE.data.users[m.sender].eventregist == 0) return conn.reply(m.chat, `Anda Tidak Meregist Event jadi Anda Tidak Bisa Mengikuti Event Ini.`, m)
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
contoh:\n${usedPrefix + command} tiket-emas
`.trim()
    try {
        if (/penukaran/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'petasan':
                            if (global.DATABASE._data.users[m.sender].petasan >= petasanminemas * count) {
                                global.DATABASE._data.users[m.sender].healt += count * healttmatasapi
                                global.DATABASE._data.users[m.sender].exp += count * expmatasapi
                                global.DATABASE._data.users[m.sender].stamina += staminamatasapi * count
                                conn.reply(m.chat, `Berhasil Anda Telah Menukarkan Item Event.\nDan anda mendapatkan ${pricegoldticket * count} 🎟️ Tiket Emas`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${petasanminemas * count} 🧨 Petasan.`, m)
                        
                        break
                case 'tiket-biasa':
                            if (global.DATABASE._data.users[m.sender].petasan >= petasanminbiasa * count) {

                                conn.reply(m.chat, `Berhasil Anda Telah Menukarkan Item Event.\nDan anda mendapatkan ${pricenormalticket * count} 🎟️ Tiket Biasa`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${petasanminbiasa * count} 🧨 Petasan.`, m)
                        
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
                conn.sendMessage(jid, 'makan.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['penukaran <tiket>']
handler.tags = ['rpg']

handler.command = /^(penukaran)$/i
module.exports = handler