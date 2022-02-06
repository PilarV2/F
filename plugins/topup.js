const moment = require('moment-timezone')
let fs = require("fs")
let handler = async (m, { conn }) =>{
    if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let mentionedJid = [who]
    const jam = moment.tz('Asia/Jakarta').format('HH')

 let ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
  const ftrol = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: ucapanWaktu, 
    orderTitle: `Top Up`,
    thumbnail: fs.readFileSync("./src/logo.jpg"),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai *@${who.replace(/@.+/, '')}* 🥰\n\nBerikut list harganya`,
                        "description": "*© Nekohime*",
                        "buttonText": "LIST HARGA",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `10 juta 💰 = Rp 2.000 💵`,
                                        "rowId": ".10juta"
                                    },{
                                        "title": `15 juta 💰 = Rp 4.000 💵`,
                                        "rowId": ".15juta"
                                    },{
                                        "title": `17 juta 💰 = Rp 8.000 💵`,
                                        "rowId": ".17juta"
                                    },{
                                        "title": `200 juta 💰 = Rp 12.000 💵`,
                                        "rowId": ".200juta"
                                    },{
                                        "title": `1 miliar 💰 = Rp 15.000 💵`,
                                        "rowId": ".1miliar"
                                    },{
                                        "title": `7 miliar 💰 = Rp 23.000 💵`,
                                        "rowId": ".7miliar"
                                    },{
                                        "title": `10 diamond 💎 = Rp 5.000 💵`,
                                        "rowId": ".10diamond"
                                    },{
                                        "title": `60 diamond 💎 = Rp 9.000 💵`,
                                        "rowId": ".60diamond"
                                    },
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, { quoted: ftrol,  contextInfo: { mentionedJid }}), {waitForAck: true})
                }
handler.help = ['sewabot']
handler.tags = ['info']
handler.command = /^topup$/i

module.exports = handler