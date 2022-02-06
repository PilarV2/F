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
    orderTitle: `Top Up`,
    thumbnail: fs.readFileSync("./src/logo.jpg"),
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hallo *@${who.replace(/@.+/, '')}* 🥰\n\nBerikut list menunya`,
                        "description": "*© Nekohime*",
                        "buttonText": "KLIK DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `BOKEP 1`,
                                        "description": "\nMenampilkan bokep 1",
                                        "rowId": ".bokep 1"
                                    },{
                                      "title": `BOKEP 2`,
                                      "description": "\nMenampilkan bokep 2",
                                      "rowId": ".bokep 2"
                                  },{
                                    "title": `BOKEP 3`,
                                    "description": "\nMenampilkan bokep 3",
                                    "rowId": ".bokep 3"
                                },{
                                  "title": `BOKEP 4`,
                                  "description": "\nMenampilkan bokep 4",
                                  "rowId": ".bokep 4"
                              },{
                                "title": `BOKEP 5`,
                                "description": "\nMenampilkan bokep 5",
                                "rowId": ".bokep 5"
                            },{
                              "title": `BOKEP 6`,
                              "description": "\nMenampilkan bokep 6",
                              "rowId": ".bokep 6"
                          },{
                            "title": `BOKEP 7`,
                            "description": "\nMenampilkan bokep 7",
                            "rowId": ".bokep 7"
                        },{
                          "title": `BOKEP 8`,
                          "description": "\nMenampilkan bokep 8",
                          "rowId": ".bokep 8"
                      },{
                        "title": `BOKEP 9`,
                        "description": "\nMenampilkan bokep 9",
                        "rowId": ".bokep 9"
                    },{
                      "title": `BOKEP 10`,
                      "description": "\nMenampilkan bokep 10",
                      "rowId": ".bokep 10"
                  },{
                    "title": `BOKEP 11`,
                    "description": "\nMenampilkan bokep 1",
                    "rowId": ".bokep 11"
                },{
                  "title": `BOKEP 12`,
                  "description": "\nMenampilkan bokep 12",
                  "rowId": ".bokep 12"
              },{
                "title": `BOKEP 13`,
                "description": "\nMenampilkan bokep 13",
                "rowId": ".bokep 13"
            },{
              "title": `BOKEP 14`,
              "description": "\nMenampilkan bokep 14",
              "rowId": ".bokep 14"
          },{
            "title": `BOKEP 15`,
            "description": "\nMenampilkan bokep 15",
            "rowId": ".bokep 15"
        },
        {
          "title": `BOKEP 16`,
          "description": "\nMenampilkan bokep 16",
          "rowId": ".bokep 16"
      },{
        "title": `BOKEP 17`,
        "description": "\nMenampilkan bokep 17",
        "rowId": ".bokep 17"
    },{
        "title": `BOKEP 18`,
        "description": "\nMenampilkan bokep 18",
        "rowId": ".bokep 18"
    },{
        "title": `BOKEP 19`,
        "description": "\nMenampilkan bokep 19",
        "rowId": ".bokep 19"
    },{
        "title": `BOKEP 20`,
        "description": "\nMenampilkan bokep 20",
        "rowId": ".bokep 20"
    },{
      "title": `BOKEP 21`,
      "description": "\nMenampilkan bokep 21",
      "rowId": ".bokep 21"
  },{
    "title": `BOKEP 22`,
    "description": "\nMenampilkan bokep 22",
    "rowId": ".bokep 22"
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
handler.help = ['bokepmenu'];
handler.tags = ['18+','premium'];
handler.command = /^(bokepmenu|menubokep)$/i;

module.exports = handler