let handler = async (m, { args, usedPrefix, command }) => {
    await m.reply('Jika file itu berformat mp4 mohon sabar, file itu sedang diupload.mungkin membutuhkan beberapa menit...')
    let json = JSON.parse(JSON.stringify(global.bokep2))
    let data = json.map((v, i) => `${i + 1}. ${v.nama}\n${v.kualitas}\n${v.rate}`).join('\n\n')
    if (isNaN(args[0])) throw `contoh:\n${usedPrefix + command} 1`
    if (args[0]) {
        if (args[0] < 1 || args[0] > 200) throw `minimal 1 & maksimal 20!`
        let { index, nama, kualitas, rate, link, thumb } = json.find(v => v.index == args[0].replace(/[^0-9]/g, ''))
        conn.sendFile(m.chat, thumb, 'thumbial.jpg', `
*No*: ${index}
*Nama Artis*: ${nama}
*Kualitas*: ${kualitas}
*Rate*: ${rate}
*Link*: ${link}
    `.trim(), m)
    }
}
handler.command = /^(bokep?)$/i
handler.premium = true
handler.private = true

module.exports = handler

global.bokep2 = [
    {
        index: 1,
        thumb : "https://img-l3.xnxx-cdn.com/videos/thumbs169xnxxposter/66/a0/5f/66a05fd2d28a570c948b7b180b9904a6/66a05fd2d28a570c948b7b180b9904a6.10.jpg",
        nama: "Eimi Fukada",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐⭐⭐",
        link: "https://is.gd/nHvqXD"
    },
    {
        index: 2,
        thumb : "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxposter/9b/7c/0e/9b7c0e51943acf42297665d47998f144/9b7c0e51943acf42297665d47998f144.2.jpg",
        nama: "Jav Porn",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐⭐",
        link: "https://is.gd/d8URaD"
    },
    {
        // ERROR // index: 3,
        thumb : "",
        nama: "Indonesian Porn",
        kualitas: "HD",
        rate: "⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        // ERROR // index: 4,
        thumb : "",
        nama: "Tidak diketahui",
        kualitas: "NON HD",
        rate: "⭐",
        link: "Gantinya video aja...."
    },
    {
        // ERROR // index: 5,
        thumb : "",
        nama: "Tidak diketahui",
        kualitas: "HD",
        rate: "⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 6,
        thumb : "https://img-l3.xnxx-cdn.com/videos/thumbs169lll/66/0c/f5/660cf577fb595683bdd21d20a72ec25f/660cf577fb595683bdd21d20a72ec25f.4.jpg",
        nama: "Mia Khalifa",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐",
        link: "https://is.gd/qId7qQ"
    },
    {
        index: 7,
        thumb : "https://img-hw.xnxx-cdn.com/videos/thumbs169lll/9d/6d/4f/9d6d4fb80463e1994574600fbe42a8ba/9d6d4fb80463e1994574600fbe42a8ba.20.jpg",
        nama: "Tidak diketahui",
        kualitas: "HD",
        rate: "⭐⭐⭐",
        link: "https://is.gd/KolpZz"
    },
    {
        index: 8,
        thumb : "https://img-hw.xnxx-cdn.com/videos/thumbs169lll/14/0f/3d/140f3dda7ada88394cc4b5cdfc313793/140f3dda7ada88394cc4b5cdfc313793.30.jpg",
        nama: "Tidak diketahui",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐",
        link: "https://is.gd/gemnQy"
    },
    {
        // ERROR // index: 9,
        thumb : "",
        nama: "Tidak diketahui",
        kualitas: "HD",
        rate: "⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 10,
        thumb : "https://img-l3.xnxx-cdn.com/videos/thumbs169xnxxposter/61/ea/b0/61eab0b663f1d6711bfd2ef8e473b9bf/61eab0b663f1d6711bfd2ef8e473b9bf.29.jpg",
        nama: "Tidak diketahui",
        kualitas: "HD",
        rate: "⭐⭐⭐",
        link: "https://is.gd/pLxZMN"
    },
    {
        // ERROR // index: 11,
        thumb : "",
        nama: "Tidak diketahui",
        kualitas: "HD",
        rate: "⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 12,
        thumb : "https://j.top4top.io/m_21440wgvi1.mp4",
        nama: "Jav Porn Squirt",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 13,
        thumb : "https://j.top4top.io/m_2145rwz2q1.mp4",
        nama: "Jav Porn",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 14,
        thumb : "https://g.top4top.io/m_2155y5iu91.mp4",
        nama: "Abis jogging disuruh nyepong",
        kualitas: "HD",
        rate: "⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 15,
        thumb : "https://k.top4top.io/m_2170nu7c31.mp4",
        nama: "Enakin aja",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 16,
        thumb : "https://h.top4top.io/m_21559bd4o2.mp4",
        nama: "Ngewe ama bini org",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 17,
        thumb : "https://l.top4top.io/m_21555gx7j1.mp4",
        nama: "Ngewe ama istri orang",
        kualitas: "HD",
        rate: "⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 18,
        thumb : "https://d.top4top.io/m_2155oo7b61.mp4",
        nama: "Ngewe ama janda",
        kualitas: "HD",
        rate: "⭐⭐",
        link: "Gantinya video aja...."
    },
    {
        index: 19,
        thumb : "https://a.top4top.io/p_2155oy1y31.jpg",
        nama: "EVA ELFIE",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐⭐",
        link: "https://is.gd/lz6Tta"
    },
    {
        index: 20,
        thumb : "https://g.top4top.io/p_2155mzi9z1.png",
        nama: "Kurang tau",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐",
        link: "https://is.gd/Wfkw8c"
    },
    {
        index: 21,
        thumb : "https://g.top4top.io/m_2170za9j01.mp4",
        nama: "Nyepong Kontol Gede",
        kualitas: "HD",
        rate: "⭐⭐⭐",
        link: "Gantinya video aja..."
    },
    {
        index: 22,
        thumb : "https://k.top4top.io/m_21735fnmr1.mp4",
        nama: "Artis cantik colmek",
        kualitas: "HD",
        rate: "⭐⭐⭐⭐⭐",
        link: "Gantinya video aja..."
    },
]