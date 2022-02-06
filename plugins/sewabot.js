const moment = require('moment-timezone')
let fs = require("fs")
let handler = async (m, { conn }) =>{
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
    orderTitle: `Sewa Bot`,
    thumbnail: fs.readFileSync("./src/logo.jpg"),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
let name = m.fromMe ? conn.user : conn.contacts[m.sender];
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai *@${who.replace(/@.+/, '')}* 🥰\n\nBerikut list harga sewa bot`,
                        "description": "*© Nekohime*",
                        "buttonText": "LIST HARGA",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `3 Hari = Rp 5.000 💵`,
                                        "rowId": ".sewabot3hari"
                                    },{
                                        "title": `10 Hari = Rp 7.000 💵`,
                                        "rowId": ".sewabot10hari"
                                    },{
                                        "title": `15 Hari = Rp 9.000 💵`,
                                        "rowId": ".sewabot15hari"
                                    },{
                                        "title": `2 Minggu = Rp 12.000 💵`,
                                        "rowId": ".sewabot2minggu"
                                    },{
                                        "title": `1 Bulan = Rp 20.000 💵`,
                                        "rowId": ".sewabot1bulan"
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
handler.command = /^sewabot$/i

module.exports = handler