//created by Nekohime
let fetch = require('node-fetch')

let handler  = async (m, { conn, text }) => {
  try {
    let res = await fetch(`${global.qris}`)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
    await conn.send2ButtonImg(m.chat, await (await fetch(json.url)).buffer(), `
Silahkan discan lalu masukan nominal harga yg sudah dipilih yah
`.trim(), '© Nekohime', '⬅️ Back', '.topup', '📮 Klik Disini Jika Sudah Bayar', '.buktitopup 10 diamond 💎 = Rp 5.000 💵')
   } catch (e) {
        console.log(e)
        throw '*Internal Servel Error*'
    }
}
handler.command = /^dnqr10d$/i

module.exports = handler
