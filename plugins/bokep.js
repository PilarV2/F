let handler  = async (m, { conn }) => {
    conn.reply(m.chat,`${pickRandom(global.bokep)}`, m)
  }
  handler.help = ['bokep']
  handler.tags = ['premium', '18+']
  handler.command = /^(bokeprandom|unduhbokep|bagibokep|bgibokep|downloadbokep)$/i
  handler.owner = false
  handler.mods = false
  handler.premium = true
  handler.group = false
  handler.private = true
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler
  
  function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())]
  }
  
  global.bokep = [
    `Nama:Asd Bali\nVideo: 1\nSize: \nDurasi: 30 Detik \n Kualitas: HD\n Rate: ⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/1KsgFASQ-NjP_jThRf6_JlYluaKhxIStA/view?usp=sharing`,
`Nama:Tidak Di Ketahui\nDurasi: 2 Menit \nKualitas: HD\n Rate: ⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/1HdyTq-DfQ43mHILjyMy2MAYZR8X5wmPD/view?usp=sharing`,
`Nama:Tidak Di Ketahui\nDurasi: 1 Menit \nKualitas: HD\n Rate: ⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/1yTvaDfAUid33PlyLrhYJL2h7MTUm92A_/view?usp=sharing`,
`Nama:Tidak Di Ketahui\nKualitas: HD\nRate: ⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/1fTUIvibGYGh2XEcCQEjz8W7K8wRyfjVA/view?usp=sharing`,
`Nama:Artis JAV\nKategori: JAV \nKualitas: HD\nRate: ⭐⭐⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/18Co91nOxnf_IuPbsCbFXEC7xeN9cRkmr/view?usp=sharing`,
`Nama:Tidak Di Ketahui\nKualitas: HD\nRate: ⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/1zdaWJnYLSX5wIWn4oR2QVeotqp7YWNid/view?usp=sharing`,
`Nama:Tidak Di Ketahui\nKualitas: HD\nRate: ⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/1qGxTveT-AeYvAnAVmMphpLgML3shWXYz/view?usp=sharing`,
`Nama:Tidak Di Ketahui\nKualitas: HD\nRate: ⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/17TCiHgSnZu06XECkvFwDNfrviq-KwoFf/view?usp=sharing`,
`Nama:Tidak Di Ketahui\nKualitas: HD\nRate: ⭐⭐⭐⭐\n\nDownload Link\nDownload: https://drive.google.com/file/d/179b51QaAwau5PI-1Vp-Ic6x55L7LjrcD/view?usp=sharing`,
  ]
  