let handler  = async (m, { conn }) => {
    conn.reply(m.chat,`“${pickRandom(global.nuklir)}”`, m)
  }
  handler.help = ['kodenuklir']
  handler.tags = ['Hentai','premium']
  handler.command = /^(kodenuklir)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = true
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  global.nuklir = [
  "Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n289828","Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n125952","Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n304307","nah kalo ini cari di nekopoi..\n\nmuramatasan no himitsu","Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n369123","Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n177013","Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n371869","Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n371923","Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n359649",
  "Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n285504",
  "Cara menggunakan kode nuklir dibawah ini adalah menggunakan website nhentai atau bot telegram nhentai..\n\n318145"
  ]
  