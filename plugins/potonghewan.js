let { MessageType } = require('@adiwajshing/baileys')
const dagingsapi = 1
const dagingburung = 1
const dagingayam = 1
const dagingkambing = 1
const dagingunta = 1
let handler  = async (m, { conn, command, args, usedPrefix, text, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
    contoh:\n${usedPrefix + command} sapi
`.trim()
try {
    if (/potong|sembelih/i.test(command)) {
        const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
            case 'unta':
                            if (global.DATABASE._data.users[m.sender].unta >= dagingunta * count) {
                                global.DATABASE._data.users[m.sender].dagingunta += count * 1
                                global.DATABASE._data.users[m.sender].unta -= dagingunta * count
                                conn.reply(m.chat, `Succes menyembelih ${count} ekor unta\nDan anda mendapatkan ${count} daging unta`, m)
                            } else conn.reply(m.chat, `Unta anda tidak cukup untuk untuk di ${command}`, m)
                        
                        break
            case 'nuri':
                            if (global.DATABASE._data.users[m.sender].nuri >= dagingburung * count) {
                                global.DATABASE._data.users[m.sender].dagingburung += count * 1
                                global.DATABASE._data.users[m.sender].nuri -= dagingburung * count
                                conn.reply(m.chat, `Succes menyembelih ${count} ekor burung nuri\nDan anda mendapatkan ${count} daging burung`, m)
                            } else conn.reply(m.chat, `Burung nuri anda tidak cukup untuk untuk di ${command}`, m)
                        
                        break
            case 'sapi':
                            if (global.DATABASE._data.users[m.sender].sapi >= dagingsapi * count) {
                                global.DATABASE._data.users[m.sender].dagingsapi += count * 1
                                global.DATABASE._data.users[m.sender].sapi -= dagingsapi * count
                                conn.reply(m.chat, `Succes menyembelih ${count} ekor sapi\nDan anda mendapatkan ${count} daging sapi`, m)
                            } else conn.reply(m.chat, `Sapi anda tidak cukup untuk untuk di ${command}`, m)
                        
                        break
            case 'kambing':
                            if (global.DATABASE._data.users[m.sender].kambing >= dagingkambing * count) {
                                global.DATABASE._data.users[m.sender].dagingkambing += count * 1
                                global.DATABASE._data.users[m.sender].kambing -= dagingkambing * count
                                conn.reply(m.chat, `Succes menyembelih ${count} ekor kambing\nDan anda mendapatkan ${count} daging kambing`, m)
                            } else conn.reply(m.chat, `Kambing anda tidak cukup untuk untuk di ${command}`, m)
                        
                        break
            case 'ayam':
                            if (global.DATABASE._data.users[m.sender].ayam >= dagingayam * count) {
                                global.DATABASE._data.users[m.sender].dagingayam += count * 1
                                global.DATABASE._data.users[m.sender].ayam -= dagingayam * count
                                conn.reply(m.chat, `Succes menyembelih ${count} ekor ayam\nDan anda mendapatkan ${count} daging ayam`, m)
                            } else conn.reply(m.chat, `Ayam anda tidak cukup untuk untuk di ${command}`, m)
                        
                        break
            default:
                return conn.reply(m.chat, Kchat, m)
            }
        }
    } catch (e) {
        console.log(e)
        throw '_*Error!*_'
    }
}

handler.help = ['potong (hewan)']
handler.tags = ['rpg']

handler.command = /^(potong|sembelih)$/i
module.exports = handler