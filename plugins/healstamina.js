let { MessageType } = require('@adiwajshing/baileys')
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) =>  {
    try {
        let staminatambah = `${Math.floor(Math.random() * 500)}`.trim()
        if (/gunakan/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[1])) ? !args[1] || args.length < 2 ? Math.max((Math.ceil((1000 - global.DATABASE._data.users[m.sender].stamina) / staminatambah)), 1) : Math.max(args[1], 1) : Math.max((Math.ceil((1000 - global.DATABASE._data.users[m.sender].stamina) / staminatambah)), 1)
                 if (args[0] === 'heal-stamina') {
                    if (global.DATABASE._data.users[m.sender].stamina < 1000) {
                        if (global.DATABASE._data.users[m.sender].staminaheal >= count * 1) {
                            global.DATABASE._data.users[m.sender].staminaheal -= count * 1
                            global.DATABASE._data.users[m.sender].stamina += staminatambah * count
                            conn.send2Button(m.chat, `Sukses Menggunakan ${count} Stamina Heal 💉\n\nDan Mendapatkan ${staminatambah * 1} Stamina 💊`, '© Nekohime', '☰ INV', '.inv', '☰ MENU', '.menu', m)
                    } else conn.sendButton(m.chat, `_*Sepertinya Anda Kekurangan Stamina Heal 💉, Beli Dulu Dishop*_`, '© Nekohime', 'Beli stamina heal', '.beli stamina-heal', m)
                } else conn.sendButton(m.chat, 'Sepertinya Udah Penuh Stamina 💊 Mu, Coba Kamu Cek Inv Kamu', '© Nekohime', '☰ INV', '.inv', m)
                } else if (args.length > 2 && args[0] === !'heal-stamina') m.reply(pickRandom(['Hanya bisa menggunakan potion', 'Mau ngunain apa? Cuma bisa gunain potion :v', 'Wih mau gunain apa kamu, kan hanya bisa potion', 'Waduheck, hanya bisa potion', 'lah, mau gunain apa?, kan hanya bisa potion']) + '\nContoh penggunaan: *' + usedPrefix + 'potion 1*')
            } catch (e) {
                console.log(e)
                m.reply('_*ERROR*_')
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        } else if (/staminaheal/i.test(command)) {
            try {
                let count = (/[0-9]/g.test(args[0])) ? !args[0] || args.length < 1 ? Math.max((Math.ceil((1000 - global.DATABASE._data.users[m.sender].stamina) / staminatambah)), 1) : Math.max(args[0], 1) : Math.max((Math.ceil((1000 - global.DATABASE._data.users[m.sender].stamina) / staminatambah)), 1)
                if (global.DATABASE._data.users[m.sender].stamina < 1000) {
                    if (global.DATABASE._data.users[m.sender].staminaheal >= count * 1) {
                        global.DATABASE._data.users[m.sender].staminaheal -= count * 1
                        global.DATABASE._data.users[m.sender].stamina += staminatambah * count
                        conn.send2Button(m.chat, `Sukses Menggunakan ${count * 1} Stamina Heal 💉\nDan Mendapatkan ${staminatambah * 1} Stamina 💊`, '© Nekohime', '☰ INV', '.inv', '☰ MENU', '.menu', m)
                    } else conn.sendButton(m.chat, `_*Sepertinya Anda Kekurangan Stamina Heal 💉, Beli Dulu Dishop*_`, '© Nekohime', 'Beli stamina heal', '.beli stamina-heal', m)
                } else conn.sendButton(m.chat, 'Sepertinya Udah Penuh Stamina 💊 Mu, Coba Kamu Cek Inv Kamu', '© Nekohime', '☰ INV', '.inv', m)
            } catch (e) {
                console.log(e)
                m.reply('_*ERROR*_')
                if (DevMode) {
                    let file = require.resolve(__filename)
                    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                        conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
                    }
                }
            }
        }
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, '_*ERROR*_', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}

handler.help = ['gunakan <item> <jumlah>', 'staminaheal']
handler.tags = ['rpg']
handler.command = /^(staminaheal|gunakan)$/i

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
