let fs = require('fs')
let request = require('request')
let fetch = require('node-fetch')
let topdf = require('image-to-pdf')
let nhentai = require('nhentai-node-api')

let handler = async (m, { conn, args, text }) => {
		if (!args[0]) return m.reply('Masukkan angka')
		if (isNaN(args[0])) return m.reply('Pake angka')
		await m.reply('Loading...')
		let data = JSON.stringify(await eval(`${args[0]}-1`))
		let input = args[0]
		//let input = m.quoted.text.split('='.repeat(25))[data].split('ID: ')[1].split('\n')[0]
		let count = 0
		let ResultPdf = []
		let doujin = await nhentai.getDoujin(input)
		let title = doujin.title.default
		let details = doujin.details
		let parodies = details.parodies.map(v => v.name)
		let characters = details.characters.map(v => v.name)
		let tags = details.tags.map(v => v.name)
		let artists = details.artists.map(v => v.name)
		let groups = details.groups.map(v => v.name)
		let categories = details.categories.map(v => v.name)
		let array_page = doujin.pages

		for (let index = 0; index < array_page.length; index++) {
			if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
			let image_name = './tmp/' + title + index + '.jpg'
			await new Promise((resolve) => request(array_page[index]).pipe(fs.createWriteStream(image_name)).on('finish', resolve))
			console.log(array_page[index])
			m.reply("uploading " + index + "/" + array_page.length)
			ResultPdf.push(image_name)
			count++
		}

		await new Promise((resolve) =>
			topdf(ResultPdf, 'A4')
			.pipe(fs.createWriteStream('./tmp/' + title + '.pdf'))
			.on('finish', resolve)
		)

		for (let index = 0; index < array_page.length; index++) {
			fs.unlinkSync('./tmp/' + title + index + '.jpg')
		}
		
		let size = await fs.statSync(`./tmp/${title}.pdf`).size
		if (size < 45000000) {
			m.reply('Uploading...')
			let thumbnail = await (await fetch(doujin.cover)).buffer()
			await conn.sendFile(m.chat, fs.readFileSync(`./tmp/${title}.pdf`), `${title}.pdf`, '', m, false, { asDocument: true, thumbnail: thumbnail })
			.then(() => fs.unlinkSync(`./tmp/${title}.pdf`))
		} else {
			m.reply('Sedang mengupload ke anonfiles karena file terlalu besar')
			let options = {
				method: 'POST',
				url: 'https://api.anonfiles.com/upload',
				formData: {
					file: fs.createReadStream(`./tmp/${title}.pdf`),
				},
			}
			
			request(options, function(err, res, body) {
				if (err) throw err
				fs.unlinkSync(`./tmp/${title}.pdf`)
				m.reply('Link Download: ' + JSON.parse(body).data.file.url.full)
			})
		}
}
handler.help = ['getnhentai [id]']
handler.tags = ['premium']
handler.command = /^get?(nhentai|hentai|doujin|nh)$/i
handler.premium = true

module.exports = handler