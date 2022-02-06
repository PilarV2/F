let { MessageType } = require('@adiwajshing/baileys')
const kayu = 4590
const semen = 872
const batubata = 59098
const pasir = 3012
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `
*Bahan bangunan*

Rumah: ${kayu} batang kayu
Rumah indah : ${semen}kg semen
Rumah bekas: ${pasir}kg pasir
Perumahan: ${batubata} buah batu bata\n
contoh:\n${usedPrefix + command} rumah
`.trim()
    try {
        if (/bikin|bangun/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'rumah':
                            if (global.DATABASE._data.users[m.sender].kayu >= kayu * count) {
                                global.DATABASE._data.users[m.sender].rumah += count * 1
                                global.DATABASE._data.users[m.sender].kayu -= kayu * count
                                global.DATABASE._data.users[m.sender].misievent2 += true
                                conn.reply(m.chat, `Succes membuat ${count} rumah`, m)
                            } else conn.reply(m.chat, `Ada kekurangan ${kayu * count} buah kayu....`, m)
                        
                        break
                case 'perumahan':
                            if (global.DATABASE._data.users[m.sender].batubata >= batubata * count) {
                                global.DATABASE._data.users[m.sender].perumahan += count * 1
                                global.DATABASE._data.users[m.sender].batubata -= batubata * count
                                conn.reply(m.chat, `Succes membuat ${count} perumahan`, m)
                            } else conn.reply(m.chat, `Ada kekurangan ${batubata * count} buah batu bata....`, m)
                        
                        break
                case 'rumah_indah':
                            if (global.DATABASE._data.users[m.sender].semen >= semen * count) {
                                global.DATABASE._data.users[m.sender].rumah_indah += count * 1
                                global.DATABASE._data.users[m.sender].semen -= semen * count
                                conn.reply(m.chat, `Succes membuat ${count} rumah indah`, m)
                            } else conn.reply(m.chat, `Ada kekurangan ${semen * count} kg semen....`, m)
                        
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
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['membuat']
handler.tags = ['rpg']

handler.command = /^(bikin|membangun|membuat|hancurkan|rubuhkan|bangun)$/i
module.exports = handler