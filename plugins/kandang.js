let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
	let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let pet = global.DATABASE.data.users[m.sender].pet
    let sapi = global.DATABASE.data.users[m.sender].sapi
    let _sapi = global.DATABASE.data.users[m.sender].anaksapi
    let panda = global.DATABASE.data.users[m.sender].panda
    let kucing = global.DATABASE.data.users[m.sender].kucing
    let _kucing = global.DATABASE.data.users[m.sender].anakkucing
    let nuri = global.DATABASE.data.users[m.sender].nuri
    let _nuri = global.DATABASE.data.users[m.sender].anaknuri
    let naga= global.DATABASE.data.users[m.sender].naga
    let _naga= global.DATABASE.data.users[m.sender].anaknaga
    let serigala= global.DATABASE.data.users[m.sender].serigala
    let _serigala= global.DATABASE.data.users[m.sender].anakserigala
    let singa= global.DATABASE.data.users[m.sender].singa
    let _singa= global.DATABASE.data.users[m.sender].anaksinga
    let rubah = global.DATABASE.data.users[m.sender].rubah
    let _rubah = global.DATABASE.data.users[m.sender].anakrubah
    let ayam= global.DATABASE.data.users[m.sender].ayam
    let _ayam= global.DATABASE.data.users[m.sender].anakayam
    let kuda = global.DATABASE.data.users[m.sender].kuda
    let _kuda = global.DATABASE.data.users[m.sender].anakkuda
    let anjing = global.DATABASE.data.users[m.sender].anjing
    let _anjing = global.DATABASE.data.users[m.sender].anakanjing
    let badak= global.DATABASE.data.users[m.sender].badak
    let _badak= global.DATABASE.data.users[m.sender].anakbadak
    let unta= global.DATABASE.data.users[m.sender].unta
    let _unta= global.DATABASE.data.users[m.sender].anakunta
    let kambing= global.DATABASE.data.users[m.sender].kambing
    let _kambing= global.DATABASE.data.users[m.sender].anakkambing
    let _panda= global.DATABASE.data.users[m.sender].anakpanda
    let monyet= global.DATABASE.data.users[m.sender].monyet
    let _monyet= global.DATABASE.data.users[m.sender].anakmonyet
    let kerbau= global.DATABASE.data.users[m.sender].kerbau
    let _kerbau= global.DATABASE.data.users[m.sender].anakkerbau
    let harimau= global.DATABASE.data.users[m.sender].harimau
    let _harimau= global.DATABASE.data.users[m.sender].anakharimau
    let banteng= global.DATABASE.data.users[m.sender].banteng
    let _banteng= global.DATABASE.data.users[m.sender].anakbanteng
    let buaya= global.DATABASE.data.users[m.sender].buaya
    let _buaya= global.DATABASE.data.users[m.sender].anakbuaya
    let gajah= global.DATABASE.data.users[m.sender].gajah
    let _gajah= global.DATABASE.data.users[m.sender].anakgajah
    let _babi= global.DATABASE.data.users[m.sender].anakbabi
    let babi= global.DATABASE.data.users[m.sender].babi
    let babihutan= global.DATABASE.data.users[m.sender].babihutan
    let _babihutan= global.DATABASE.data.users[m.sender].babihutan
    
    let str = `
╭───────────────
│Isi Kandang *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*
╰───────────────
╭──────────────┐
│┌─────────────┘
││ ⌦  *Pet*
││🐔 Ayam: *${ayam== 0 ? 'Tidak Punya' : '' || ayam== 1 ? 'Level 1' : '' || ayam== 2 ? 'Level 2' : '' || ayam== 3 ? 'Level 3' : '' || ayam== 4 ? 'Level 4' : '' || ayam== 5 ? 'Level MAX' : ''}*
││🦏 Badak: *${badak== 0 ? 'Tidak Punya' : '' || badak== 1 ? 'Level 1' : '' || badak== 2 ? 'Level 2' : '' || badak== 3 ? 'Level 3' : '' || badak== 4 ? 'Level 4' : '' || badak== 5 ? 'Level MAX' : ''}*
││🐎 Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
││🐕 Anjing: *${anjing == 0 ? 'Tidak Punya' : '' || anjing == 1 ? 'Level 1' : '' || anjing == 2 ? 'Level 2' : '' || anjing == 3 ? 'Level 3' : '' || anjing == 4 ? 'Level 4' : '' || anjing == 5 ? 'Level MAX' : ''}*
││🦁 Singa: *${singa== 0 ? 'Tidak Punya' : '' || singa== 1 ? 'Level 1' : '' || singa== 2 ? 'Level 2' : '' || singa== 3 ? 'Level 3' : '' || singa== 4 ? 'Level 4' : '' || singa== 5 ? 'Level MAX' : ''}*
││🐉 Naga: *${naga== 0 ? 'Tidak Punya' : '' || naga== 1 ? 'Level 1' : '' || naga== 2 ? 'Level 2' : '' || naga== 3 ? 'Level 3' : '' || naga== 4 ? 'Level 4' : '' || naga== 5 ? 'Level MAX' : ''}*
││🐺 Serigala: *${serigala== 0 ? 'Tidak Punya' : '' || serigala== 1 ? 'Level 1' : '' || serigala== 2 ? 'Level 2' : '' || serigala== 3 ? 'Level 3' : '' || serigala== 4 ? 'Level 4' : '' || serigala== 5 ? 'Level MAX' : ''}*
││🦊 Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
││🐈 Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*
││🦜 Burung Nuri: *${nuri == 0 ? 'Tidak Punya' : '' || nuri == 1 ? 'Level 1' : '' || nuri == 2 ? 'Level 2' : '' || nuri == 3 ? 'Level 3' : '' || nuri == 4 ? 'Level 4' : '' || nuri == 5 ? 'Level MAX' : ''}*
││🐐 Kambing: *${kambing == 0 ? 'Tidak Punya' : '' || kambing == 1 ? 'Level 1' : '' || kambing == 2 ? 'Level 2' : '' || kambing == 3 ? 'Level 3' : '' || kambing == 4 ? 'Level 4' : '' || kambing == 5 ? 'Level MAX' : ''}*
││🐪 Unta: *${unta == 0 ? 'Tidak Punya' : '' || unta == 1 ? 'Level 1' : '' || unta == 2 ? 'Level 2' : '' || unta == 3 ? 'Level 3' : '' || unta == 4 ? 'Level 4' : '' || unta == 5 ? 'Level MAX' : ''}*
││🐄 Sapi: *${sapi == 0 ? 'Tidak Punya' : '' || sapi == 1 ? 'Level 1' : '' || sapi == 2 ? 'Level 2' : '' || sapi == 3 ? 'Level 3' : '' || sapi == 4 ? 'Level 4' : '' || sapi == 5 ? 'Level MAX' : ''}*
││🐼 Panda: *${panda == 0 ? 'Tidak Punya' : '' || panda == 1 ? 'Level 1' : '' || panda == 2 ? 'Level 2' : '' || panda == 3 ? 'Level 3' : '' || panda == 4 ? 'Level 4' : '' || panda == 5 ? 'Level MAX' : ''}*
││🐃 Kerbau: *${kerbau == 0 ? 'Tidak Punya' : '' || kerbau == 1 ? 'Level 1' : '' || kerbau == 2 ? 'Level 2' : '' || kerbau == 3 ? 'Level 3' : '' || kerbau == 4 ? 'Level 4' : '' || kerbau == 5 ? 'Level MAX' : ''}*
││🐅 Harimau: *${harimau == 0 ? 'Tidak Punya' : '' || harimau == 1 ? 'Level 1' : '' || harimau == 2 ? 'Level 2' : '' || harimau == 3 ? 'Level 3' : '' || harimau == 4 ? 'Level 4' : '' || harimau == 5 ? 'Level MAX' : ''}*
││🐘 Gajah: *${gajah == 0 ? 'Tidak Punya' : '' || gajah == 1 ? 'Level 1' : '' || gajah == 2 ? 'Level 2' : '' || gajah == 3 ? 'Level 3' : '' || gajah == 4 ? 'Level 4' : '' || gajah == 5 ? 'Level MAX' : ''}*
││🐖 Babi: *${babi == 0 ? 'Tidak Punya' : '' || babi == 1 ? 'Level 1' : '' || babi == 2 ? 'Level 2' : '' || babi == 3 ? 'Level 3' : '' || babi == 4 ? 'Level 4' : '' || babi == 5 ? 'Level MAX' : ''}*
││🐒 Monyet: *${monyet == 0 ? 'Tidak Punya' : '' || monyet == 1 ? 'Level 1' : '' || monyet == 2 ? 'Level 2' : '' || monyet == 3 ? 'Level 3' : '' || monyet == 4 ? 'Level 4' : '' || monyet == 5 ? 'Level MAX' : ''}*
││🐗 Babi hutan: *${babihutan == 0 ? 'Tidak Punya' : '' || babihutan == 1 ? 'Level 1' : '' || babihutan == 2 ? 'Level 2' : '' || babihutan == 3 ? 'Level 3' : '' || babihutan == 4 ? 'Level 4' : '' || babihutan == 5 ? 'Level MAX' : ''}*
││🐊 Buaya: *${buaya == 0 ? 'Tidak Punya' : '' || buaya == 1 ? 'Level 1' : '' || buaya == 2 ? 'Level 2' : '' || buaya == 3 ? 'Level 3' : '' || buaya == 4 ? 'Level 4' : '' || buaya == 5 ? 'Level MAX' : ''}*
││🐂 Banteng: *${banteng == 0 ? 'Tidak Punya' : '' || banteng == 1 ? 'Level 1' : '' || banteng == 2 ? 'Level 2' : '' || banteng == 3 ? 'Level 3' : '' || banteng == 4 ? 'Level 4' : '' || banteng == 5 ? 'Level MAX' : ''}*
│╰──────────────┐
├───────────────┘
│ ❏ Basic Pet
│╭───────────────
││🐔 Ayam: ${ayam== 0 ? 'Tidak Punya' : '' || ayam> 0 && ayam< 5 ? `Level *${ayam}* To level *${ayam+ 1}*\n││Exp *${_ayam}* -> *${ayam*200}*` : '' || ayam== 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐖 Babi: ${babi== 0 ? 'Tidak Punya' : '' || babi> 0 && babi< 5 ? `Level *${babi}* To level *${babi+ 1}*\n││Exp *${_babi}* -> *${babi*200}*` : '' || babi== 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐃 Kerbau: ${kerbau== 0 ? 'Tidak Punya' : '' || kerbau> 0 && kerbau< 5 ? `Level *${kerbau}* To level *${kerbau+ 1}*\n││Exp *${_kerbau}* -> *${kerbau*200}*` : '' || kerbau== 5 ? '*Max Level*' : ''}
│╰──────────────┐
├───────────────┘
│ ❏ Rare Pet
│╭───────────────
││🦊 Rubah: ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n││Exp *${_rubah}* -> *${rubah *1000}*` : '' || rubah == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐈 Kucing: ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n││Exp *${_kucing}* -> *${kucing *1000}*` : '' || kucing == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐗 Babi hutan: ${babihutan == 0 ? 'Tidak Punya' : '' || babihutan > 0 && babihutan < 5 ? `Level *${babihutan}* To level *${babihutan + 1}*\n││Exp *${_babihutan}* -> *${babihutan *1000}*` : '' || babihutan == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐕 Anjing: ${anjing == 0 ? 'Tidak Punya' : '' || anjing > 0 && anjing < 5 ? `Level *${anjing}* To level *${anjing + 1}*\n││Exp *${_anjing}* -> *${anjing *1000}*` : '' || anjing == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐂 Banteng: ${banteng == 0 ? 'Tidak Punya' : '' || banteng > 0 && banteng < 5 ? `Level *${banteng}* To level *${banteng + 1}*\n││Exp *${_banteng}* -> *${banteng *1000}*` : '' || banteng == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐒 Monyet: ${monyet == 0 ? 'Tidak Punya' : '' || monyet > 0 && monyet < 5 ? `Level *${monyet}* To level *${monyet + 1}*\n││Exp *${_monyet}* -> *${monyet *1000}*` : '' || monyet == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐎 Kuda: ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n││Exp *${_kuda}* -> *${kuda *1000}*` : '' || kuda == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🦜 Burung Nuri: ${nuri == 0 ? 'Tidak Punya' : '' || nuri > 0 && nuri < 5 ? `Level *${nuri}* To level *${nuri + 1}*\n││Exp *${_nuri}* -> *${nuri *1000}*` : '' || nuri == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐐 Kambing: ${kambing == 0 ? 'Tidak Punya' : '' || kambing > 0 && kambing < 5 ? `Level *${kambing}* To level *${kambing + 1}*\n││Exp *${_kambing}* -> *${kambing *1000}*` : '' || kambing == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐪 Unta: ${unta == 0 ? 'Tidak Punya' : '' || unta > 0 && unta < 5 ? `Level *${unta}* To level *${unta + 1}*\n││Exp *${_unta}* -> *${unta *1000}*` : '' || unta == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐄 Sapi: ${sapi == 0 ? 'Tidak Punya' : '' || sapi > 0 && sapi < 5 ? `Level *${sapi}* To level *${sapi + 1}*\n││Exp *${_sapi}* -> *${sapi *1000}*` : '' || sapi == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐃 Kerbau: ${kerbau == 0 ? 'Tidak Punya' : '' || kerbau > 0 && kerbau < 5 ? `Level *${kerbau}* To level *${kerbau + 1}*\n││Exp *${_kerbau}* -> *${kerbau *1000}*` : '' || kerbau == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐘 Gajah: ${gajah == 0 ? 'Tidak Punya' : '' || gajah > 0 && gajah < 5 ? `Level *${gajah}* To level *${gajah + 1}*\n││Exp *${_gajah}* -> *${gajah *1000}*` : '' || gajah == 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐊 Buaya: ${buaya == 0 ? 'Tidak Punya' : '' || buaya > 0 && buaya < 5 ? `Level *${buaya}* To level *${buaya + 1}*\n││Exp *${_buaya}* -> *${buaya *1000}*` : '' || buaya == 5 ? '*Max Level*' : ''}
│╰──────────────┐
├───────────────┘
│ ❏ Epic Pet
│╭───────────────
││🦁 Singa: ${singa== 0 ? 'Tidak Punya' : '' || singa> 0 && singa< 5 ? `Level *${singa}* To level *${singa+ 1}*\n││Exp *${_singa}* -> *${singa*5000}*` : '' || singa== 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐼 Panda: ${panda== 0 ? 'Tidak Punya' : '' || panda> 0 && panda< 5 ? `Level *${panda}* To level *${panda+ 1}*\n││Exp *${_panda}* -> *${panda*5000}*` : '' || panda== 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐅 Harimau: ${harimau== 0 ? 'Tidak Punya' : '' || harimau> 0 && harimau< 5 ? `Level *${harimau}* To level *${harimau+ 1}*\n││Exp *${_harimau}* -> *${harimau*5000}*` : '' || harimau== 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🦏 Badak: ${badak== 0 ? 'Tidak Punya' : '' || badak> 0 && badak< 5 ? `Level *${badak}* To level *${badak+ 1}*\n││Exp *${_badak}* -> *${badak*5000}*` : '' || badak== 5 ? '*Max Level*' : ''}
│╰──────────────┐
│╭──────────────┘
││🐺 Serigala: ${serigala== 0 ? 'Tidak Punya' : '' || serigala> 0 && serigala< 5 ? `Level *${serigala}* To level *${serigala+ 1}*\n││Exp *${_serigala}* -> *${serigala*500}*` : '' || serigala== 5 ? '*Max Level*' : ''}
│╰──────────────┐
├───────────────┘
│ ❏ Legendary Pet
│╭──────────────
││🐉 Naga: ${naga== 0 ? 'Tidak Punya' : '' || naga> 0 && naga< 100 ? `Level *${naga}* To level *${naga+ 1}*\n││Exp *${_naga}* -> *${naga*10000}*` : '' || naga== 5 ? '*Max Level*' : ''}
│╰──────────────┐
╰───────────────┘
`.trim()
    conn.reply(m.chat, str, m)
}
handler.help = ['kandang']
handler.command = /^(kandang)$/i
handler.tags = ['rpg']

module.exports = handler