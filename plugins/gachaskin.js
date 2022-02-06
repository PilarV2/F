let { MessageType } = require('@adiwajshing/baileys')
// TIKET EMAS //
let coin = `${Math.floor(Math.random() * 1000)}`.trim()
let uang = `${Math.floor(Math.random() * 2000)}`.trim()
const tiketemas = 1
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
    let type = (args[0] || '').toLowerCase()
    const Kchat = ``.trim()
    try {
        if (/gacha/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(999999999999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'tiket-emas':
                            if (global.DATABASE._data.users[m.sender].stamina >= staminaojek) {
                                global.DATABASE._data.users[m.sender].tiketemas -= tiketemas * count
                                global.DATABASE._data.users[m.sender].coin += coin * count
                                global.DATABASE._data.users[m.sender].money += uang * count
                                m.reply('Selamat Anda Mendapatkan\nCoin: ${coin * count}\nUang: ${uang * count}')
                            } else conn.sendButton(m.chat, `Minimal ${staminaojek} Stamina 💊 baru bisa kerja jadi ojek`, '© Nekohime', 'Tambah Stamina', '.staminaheal', m)
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

handler.help = ['gacha <count>']
handler.tags = ['rpg']

handler.command = /^(gacha)$/i
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