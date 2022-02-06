let { MessageType } = require('@adiwajshing/baileys');
let fs = require('fs');
const moment = require('moment-timezone')
let confirm = {};
let levelling = require('../lib/levelling');
let handler = async (m, { conn, usedPrefix }) => {
  if (global.DATABASE.data.users[m.sender].Banneduser == true) return conn.reply(m.chat, `${global.ban}`, m)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  let dagingsapi = global.DATABASE.data.users[m.sender].dagingsapi;
  let petasan = global.DATABASE.data.users[m.sender].dagingsapi;
  let waktuprem = global.DATABASE.data.users[m.sender].petasan;
  let prem = global.DATABASE.data.users[m.sender].premium;
  let staminaheal = global.DATABASE.data.users[m.sender].staminaheal;
  let tiketemas = global.DATABASE.data.users[m.sender].tiketemas;
  let tiketbiasa = global.DATABASE.data.users[m.sender].tiketbiasa;
  let keju = global.DATABASE.data.users[m.sender].keju;
  let stamina = global.DATABASE.data.users[m.sender].stamina;
  let kapak = global.DATABASE.data.users[m.sender].kapak;
  let mangga = global.DATABASE.data.users[m.sender].mangga;
  let burger = global.DATABASE.data.users[m.sender].hamburger;
  let jeruk = global.DATABASE.data.users[m.sender].jeruk;
  let roti = global.DATABASE.data.users[m.sender].roti;
  let anggur = global.DATABASE.data.users[m.sender].anggur;
  let bata = global.DATABASE.data.users[m.sender].batubata;
  let apel = global.DATABASE.data.users[m.sender].apel;
  let limit = global.DATABASE.data.users[m.sender].limit;
  let pasir = global.DATABASE.data.users[m.sender].pasir;
  let semen = global.DATABASE.data.users[m.sender].semen;
  let kayu = global.DATABASE.data.users[m.sender].kayu;
  let dagingkambing = global.DATABASE.data.users[m.sender].dagingkambing;
  let dagingayam = global.DATABASE.data.users[m.sender].dagingayam;
  let dagingburung = global.DATABASE.data.users[m.sender].dagingburung;
  let dagingunta = global.DATABASE.data.users[m.sender].dagingunta;
  let role = global.DATABASE.data.users[m.sender].role;
  let sword = global.DATABASE.data.users[m.sender].sword;
  let pickaxe = global.DATABASE.data.users[m.sender].pickaxe;
  let kail = global.DATABASE.data.users[m.sender].kail;
  let healt = global.DATABASE._data.users[m.sender].healt;
  let armor = global.DATABASE._data.users[m.sender].armor;
  let warn = global.DATABASE._data.users[m.sender].warn;
  let pet = global.DATABASE._data.users[m.sender].pet;
  let diamond = global.DATABASE._data.users[m.sender].diamond;
  let potion = global.DATABASE._data.users[m.sender].potion;
  let common = global.DATABASE._data.users[m.sender].common;
  let makananpet = global.DATABASE._data.users[m.sender].makananpet;
  let uncommon = global.DATABASE._data.users[m.sender].uncommon;
  let mythic = global.DATABASE._data.users[m.sender].mythic;
  let legendary = global.DATABASE._data.users[m.sender].legendary;
  let level = global.DATABASE._data.users[m.sender].level;
  let money = global.DATABASE._data.users[m.sender].money;
  let exp = global.DATABASE._data.users[m.sender].exp;
  let coin = global.DATABASE._data.users[m.sender].coin;
  let sampah = global.DATABASE._data.users[m.sender].sampah;
  let { max } = levelling.xpRange(level, exp, global.multiplier);
  let name = m.fromMe ? conn.user : conn.contacts[m.sender];
  let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money);
  let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level);
  let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond);
  let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion);
  let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah);
  let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common);
  let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon);
  let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic);
  let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary);
  let usersmoney = sortedmoney.map((v) => v[0]);
  let usersdiamond = sorteddiamond.map((v) => v[0]);
  let userspotion = sortedpotion.map((v) => v[0]);
  let userssampah = sortedsampah.map((v) => v[0]);
  let userslevel = sortedlevel.map((v) => v[0]);
  let userscommon = sortedcommon.map((v) => v[0]);
  let usersuncommon = sorteduncommon.map((v) => v[0]);
  let usersmythic = sortedmythic.map((v) => v[0]);
  let userslegendary = sortedlegendary.map((v) => v[0]);
  const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



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
  const fgif = {
    key: {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'},
    message: { 
                  "videoMessage": { 
                  "title": `*NEKOHIME SAN NYAA*`,
                  "h": `Nekohime`,
                  'duration': '99999', 
                  'gifPlayback': 'true', 
                  'caption': `${ucapanWaktu}`,
                  'jpegThumbnail': fs.readFileSync("./src/logo.jpg"),
                         }
                        }
                     } 
  let txt = `Inventory *${name.vnmae || name.notify || name.name || '+' + name.jid.split`@`[0]}*\n
╭─❒「 *Info* 」
│ ❤ Health: *${healt}*
│ 💊 Stamina: *${stamina}*
│ 🥼 Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Zirah Kulit' : '' || armor == 2 ? 'Zirah Besi' : '' || armor == 3 ? 'Zirah Emas' : '' || armor == 4 ? 'Zirah Diamond' : '' || armor == 5 ? 'Zirah Neraka' : ''}*
│ 🏆 Rank: *${role}*
│ ⚔️ Sword: *${sword == 0 ? 'Tidak Punya' : '' || sword == 1 ? 'Pedang Kulit' : '' || sword == 2 ? 'Pedang Besi' : '' || sword == 3 ? 'Pedang Emas' : '' || sword == 4 ? 'Pedang Diamond' : '' || sword == 5 ? 'Pedang Neraka' : ''}*
│ ⛏️ Pickaxe: *${pickaxe == 0 ? 'Tidak Punya' : '' || pickaxe == 1 ? 'Pickaxe Kulit' : '' || pickaxe == 2 ? 'Pickaxe Besi' : '' || pickaxe == 3 ? 'Pickaxe Emas' : '' || pickaxe == 4 ? 'Pickaxe Diamond' : '' || pickaxe == 5 ? 'Pickaxe Neraka' : ''}*
│ 🎣 Kail: *${kail == 0 ? 'Tidak Punya' : '' || kail == 1 ? 'Kail Kayu' : '' || kail == 2 ? 'Kail Perunggu' : '' || kail == 3 ? 'Kail Emas' : '' || kail == 4 ? 'Kail Emerald' : '' || kail == 5 ? 'Kail Kulit Naga' : ''}*
│ 🪓 Kapak: *${kapak == 0 ? 'Tidak Punya' : '' || kapak == 1 ? 'Kapak Kulit' : '' || kapak == 2 ? 'Kapak Besi' : '' || kapak == 3 ? 'Kapak Emas' : '' || kapak == 4 ? 'Kapak Emerald' : '' || kapak == 5 ? 'Kapak Naga' : ''}*
│ 🧬 Level: *${level}*
│ ✉️ Exp: *${exp}*
│ 🕖 Limit: *${limit}*
╰─────────────❒\n
╭─❒「 *Inventori* 」
│ 💎 Diamond: *${diamond}*
│ 💵 Money: *${money}*
│ 🪙 Coin: *${coin}*
│ 🧪 Potion: *${potion}*
│ 💉 Stamina Heal: *${staminaheal}*
│ ♻️ Sampah: *${sampah}*
│ 🍖 Makanan Pet: *${makananpet}*
│ 🎒 Total inv: *${diamond + potion + sampah + makananpet + money + coin}*
╰─────────────❒\n
╭─❒「 *Material* 」
│ 🧱 Bata: *${bata}*
│ 🪵 Kayu: *${kayu}*
│ 🗻 Semen: *${semen}*
│ 🏖️ Pasir: *${pasir}*
│ 🎒 Total material: *${bata + kayu + semen + pasir}*
╰─────────────❒\n
╭─❒「 *Makanan* 」
│ 🥩 Daging Sapi: *${dagingsapi}*
│ 🥩 Daging Kambing: *${dagingkambing}*
│ 🥩 Daging Unta: *${dagingunta}*
│ 🍗 Daging Ayam: *${dagingayam}*
│ 🍗 Daging Burung: *${dagingburung}*
│ 🍞 Roti: *${roti}*
│ 🍔 Hamburger: *${burger}*
│ 🧀 Keju: *${keju}*
│ 🎒 Total makanan: *${dagingsapi + dagingayam + dagingburung + dagingkambing + burger + roti + keju}*
╰─────────────❒\n
╭─❒「 *Buah* 」
│ 🍎 Apel: *${apel}*
│ 🍇 Anggur: *${anggur}*
│ 🥭 Mangga: *${mangga}*
│ 🍊 Jeruk: *${jeruk}*
│ 🎒 Total buah: *${apel + anggur + mangga + jeruk}*
╰─────────────❒\n
╭─❒「 *Create* 」
│ 📦 Common: *${common}*
│ 📦 Uncommon: *${uncommon}*
│ 📦 Mythic: *${mythic}*
│ 🎁 Legendary: *${legendary}*
│ 📦 Pet Create: *${pet}*
╰─────────────❒\n
╭─❒「 *Item Event* 」
│ 🧨 Petasan: ${petasan}
│ 🎟️ Tiket Emas: *${tiketemas}*
│ 🎫 Tiket Biasa: *${tiketbiasa}*
╰─────────────❒\n
*Proges*\n
╭────────────────
│🧬 Level *${level}* To Level *${level}*
│✉️ Exp *${exp}* -> *${max}*
╰────────────────\n\n
*🏅 Achievement*
1.Top level *${userslevel.indexOf(m.sender) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(m.sender) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(m.sender) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(m.sender) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(m.sender) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(m.sender) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(m.sender) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(m.sender) + 1}* dari *${userssampah.length}*
\n${readMore}\n
Warn: *${warn}*
Premium: ${prem == false ? '❌' : '' || prem == true ? '✅' : ''}
Batas Premium: *${waktuprem}*`;
  const buttons = [
    { buttonId: `.shop`, buttonText: { displayText: '☰ SHOP' }, type: 1 },
    { buttonId: `.menu`, buttonText: { displayText: '☰ MENU' }, type: 1 },
  ];

  const buttonMessage = {
    contentText: txt,
    footerText: '© Nekohime',
    buttons: buttons,
    headerType: 1,
  };
  return conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage, { quoted: fgif, contextInfo: { mentionedJid }});
};
handler.help = ['inventory', 'inv'];
handler.tags = ['rpg'];
handler.command = /^(inv(entory)?|bal|level(ing)?|money|e?xp)$/i;
module.exports = handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
