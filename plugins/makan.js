let { MessageType } = require('@adiwajshing/baileys')
const { exp } = require('./menu')
const apel = 1
const healtapel = 5
const mangga = 1
const healtmangga = 7
const jeruk = 1
const healtjeruk = 3
const anggur= 1
const healtanggur= 8
const burger= 1
const healtburger= 6
const expburger = 4
const roti= 1
const healtroti= 9
const staminaroti = 15
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
contoh:\n${usedPrefix + command} apel
`.trim()
    try {
        if (/makan/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'telur ceplok':
                            if (global.DATABASE._data.users[m.sender].apel >= apel * count) {
                                global.DATABASE._data.users[m.sender].healt += count * healttmatasapi
                                global.DATABASE._data.users[m.sender].exp += count * expmatasapi
                                global.DATABASE._data.users[m.sender].stamina += staminamatasapi * count
                                conn.reply(m.chat, `Anda telah memakan telur ceplok sebanyak ${count}.\nDan anda mendapatkan ${healtapel * count} ❤ healt`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${apel * count} 🍎 telur ceplok....`, m)
                        
                        break
                case 'apel':
                            if (global.DATABASE._data.users[m.sender].apel >= apel * count) {
                                global.DATABASE._data.users[m.sender].healt += count * healtapel * 1
                                global.DATABASE._data.users[m.sender].apel -= apel * count
                                conn.reply(m.chat, `Anda telah memakan apel sebanyak ${count}.\nDan anda mendapatkan ${healtapel * count} ❤ healt`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${apel * count} 🍎 buah apel....`, m)
                        
                        break
                case 'mangga':
                            if (global.DATABASE._data.users[m.sender].mangga >= mangga * count) {
                                global.DATABASE._data.users[m.sender].healt += count * healtmangga * 1
                                global.DATABASE._data.users[m.sender].mangga -= mangga * count
                                conn.reply(m.chat, `Anda telah memakan mangga sebanyak ${count}.\nDan anda mendapatkan ${healtmangga * count} ❤ healt`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${mangga * count} 🥭 buah mangga....`, m)
                        
                        break
                case 'jeruk':
                            if (global.DATABASE._data.users[m.sender].jeruk >= jeruk * count) {
                                global.DATABASE._data.users[m.sender].healt += count * healtjeruk * 1
                                global.DATABASE._data.users[m.sender].jeruk -= jeruk * count
                                conn.reply(m.chat, `Anda telah memakan jeruk sebanyak ${count}.\nDan anda mendapatkan ${healtjeruk * count} ❤ healt`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${jeruk * count} 🍊 buah jeruk....`, m)
                        
                        break
                case 'anggur':
                            if (global.DATABASE._data.users[m.sender].anggur >= anggur * count) {
                                global.DATABASE._data.users[m.sender].healt += count * healtanggur * 1
                                global.DATABASE._data.users[m.sender].anggur -= anggur * count
                                conn.reply(m.chat, `Anda telah memakan anggur sebanyak ${count}.\nDan anda mendapatkan ${healtanggur * count} ❤ healt`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${anggur * count} 🍇 buah anggur....`, m)
                        
                        break
                case 'burger':
                            if (global.DATABASE._data.users[m.sender].hamburger >= burger * count) {
                                global.DATABASE._data.users[m.sender].healt += count * healtburger * 1
                                global.DATABASE._data.users[m.sender].exp += count * expburger * 1
                                global.DATABASE._data.users[m.sender].hamburger -= burger * count
                                conn.reply(m.chat, `Anda telah memakan burger sebanyak ${count}.\nDan anda mendapatkan ${healtburger * count} ❤ healt\n${expburger *  count} 🧬 exp`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${burger * count} 🍔 burger....`, m)
                        
                        break
                case 'roti':
                            if (global.DATABASE._data.users[m.sender].roti >= roti * count) {
                                global.DATABASE._data.users[m.sender].healt += count * healtroti * 1
                                global.DATABASE._data.users[m.sender].roti -= roti * count
                                global.DATABASE._data.users[m.sender].stamina += staminaroti * count * 1
                                conn.reply(m.chat, `Anda telah memakan roti sebanyak ${count}.\nDan anda mendapatkan ${healtroti * count} ❤ healt\n ${staminaroti * count} 💊 Stamina`, m)
                            } else conn.reply(m.chat, `Anda kekurangan ${roti * count} 🍞 roti....`, m)
                        
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

handler.help = ['makan (apa)']
handler.tags = ['rpg']

handler.command = /^(makan)$/i
module.exports = handler