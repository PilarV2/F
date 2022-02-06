let { MessageType } = require('@adiwajshing/baileys')
const { exp } = require('./menu')
// TELUR CEPLOK
const telur = 1
// HAMBURGER
const tomat = 1
const keju = 2
const selada = 1
const roti = 2
// Ayam Goreng
const ayam = 1
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
List Masakan
🍳 Telur Ceplok = 1 Butir Telur
`.trim()
    try {
        if (/masak/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'telur ceplok':
                            if (global.DATABASE._data.users[m.sender].telur >= telur * count) {
                                global.DATABASE._data.users[m.sender].telur -= telur
                                setTimeout(() => {
                                    m.reply(`Berhasil Memasak Telur Ceplok 🍳 Sebanyak ${count}.`)
                                    }, 120000) 

                                setTimeout(() => {
                                    m.reply('_Sedang Memasak_')
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Anda kekurangan ${telur * count} 🥚 Telur.`, '© Nekohime', 'Beli Telur', '.beli telur', m)
                        
                        break
                case 'hamburger':
                            if (global.DATABASE._data.users[m.sender].roti >= roti * count) {
                            if (global.DATABASE._data.users[m.sender].keju >= keju * count) {
                            if (global.DATABASE._data.users[m.sender].selada >= selada * count) {
                                global.DATABASE._data.users[m.sender].hamburger += count * 1
                                global.DATABASE._data.users[m.sender].roti -= roti * count
                                global.DATABASE._data.users[m.sender].selada -= selada * count
                                global.DATABASE._data.users[m.sender].keju -= keju * count
                                setTimeout(() => {
                                    m.reply(`Berhasil Memasak Hamburger 🍔 Sebanyak ${count}.`)
                                    }, 360000) 

                                setTimeout(() => {
                                    m.reply('_Sedang Memasak_')
                                    }, 0) 
                            } else conn.sendButton(m.chat, `Sepertinya Anda kekurangan ${roti * count} 🍞 Roti.`, '© Nekohime', 'Beli Roti', '.beli roti', m)
                        } else conn.sendButton(m.chat, `Sepertinya Anda kekurangan ${selada * count} 🥬 Selada.`, '© Nekohime', 'Beli Selada', '.beli selada', m)
                    } else conn.sendButton(m.chat, `Sepertinya Anda kekurangan ${keju * count}  Keju.`, '© Nekohime', 'Beli Keju', '.beli keju', m)
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
                conn.sendMessage(jid, 'masak.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['masak (apa)']
handler.tags = ['rpg']

handler.command = /^(masak)$/i
module.exports = handler