let handler = async (m, { args, usedPrefix, command }) => {
  let json = JSON.parse(JSON.stringify(global.manhwa));
  let data = json.map((v, i) => `${i + 1}. ${v.size}\n${v.genre}\n${v.link}`).join('\n\n');
  if (isNaN(args[0])) throw `contoh:\n${usedPrefix + command} 1`;
  if (args[0]) {
    if (args[0] < 1 || args[0] > 200) throw `minimal 1 & maksimal 17!`;
    let { index, size, genre, link, thumb, judul } = json.find((v) => v.index == args[0].replace(/[^0-9]/g, ''));
    conn.sendFile(
      m.chat,
      thumb,
      'thumbial.jpg',
      `
*No*: ${index}
*Judul*: ${judul}
*Ukuran*: ${size}
*Genre*: ${genre}
*Link*: ${link}
    `.trim(),
      m
    );
  }
};
handler.command = /^(manhwa|doujin?)$/i;

module.exports = handler;

global.manhwa = [
  {
    index: 1,
    thumb: 'https://d.top4top.io/p_21736peh11.jpg',
    judul: '2 GADIS YANG DI PAKSA NGEW3 OM² DI SEKOLAH NYA',
    size: '11.5 MB',
    genre: 'school girl,Oji san,Rape,Stalker,BlowJob, Creampie,Uniform,Threesome',
    link: 'https://is.gd/18su2g',
  },
  {
    index: 2,
    thumb: 'https://e.top4top.io/p_2173q9oz81.jpg',
    judul: 'DITIDURI OM² DAN DI LIAT PACAR KU',
    size: '8.4 MB',
    genre: 'School Girl,Dilf, Netorare,Creampie,BlowJob,Sleep, Uniform',
    link: 'https://is.gd/SgoCcm',
  },
  {
    index: 3,
    thumb: 'https://h.top4top.io/p_2173fdlav1.jpg',
    judul: 'DI IZINKAN NGEW3 ADIK KANDUNGKU EPS 1',
    size: '25.1 MB',
    genre: 'Tidak diketahui',
    link: 'https://is.gd/oCP9HT',
  },
  {
    index: 4,
    thumb: 'https://k.top4top.io/p_2173o7k811.jpg',
    judul: 'DI IZINKAN NGEW3 ADIK KANDUNGKU EPS 2',
    size: '21.5 MB',
    genre: 'Tidak diketahui',
    link: 'https://is.gd/pMuIbg',
  },
  {
    index: 5,
    thumb: 'https://a.top4top.io/p_2173pbfqw1.jpg',
    judul: 'ANAK DAN MAMAH DI RUMAH EPS 1',
    size: '29.1 MB',
    genre: 'Incest,Mother,Milf,BlowJob,Loli,Tit Job,Cum Inside,Cum in Face, Netorare, shota,Eye Glass,Mind Break, Hypnotis',
    link: 'https://is.gd/G6lnxl',
  },
  {
    index: 6,
    thumb: 'https://k.top4top.io/p_2173f27hb1.jpg',
    judul: 'BERMAIN DENGAN REKAN KERJA SEMALAMAN DI HOTEL 💕',
    size: '33.6 MB',
    genre: 'Romantic,Hotel,First Time,Virgin,Big Oppai, Creampie,Cum Inside,Cum In Face,Kiss ing',
    link: 'https://is.gd/3PCdmR',
  },
  {
    index: 7,
    thumb: 'https://f.top4top.io/p_21730glmq1.jpg',
    judul: 'DI PAKSA NGEW3 OLEH GURU KU EPS 1 PART 1',
    size: '30.3 MB',
    genre: 'Big Oppai, First Time, Creampie, BlowJob,TitJob,Paizuri, Netorare, School Girl,Rape,Romantic,Uniform',
    link: 'https://is.gd/jyyC2p',
  },
  {
    index: 8,
    thumb: 'https://a.top4top.io/p_21738ea0v1.jpg',
    judul: 'DI PAKSA NGEW3 OLEH GURU KU EPS 1 PART 2',
    size: '25.4 MB',
    genre: 'Big Oppai, First Time, Creampie, BlowJob,TitJob,Paizuri, Netorare, School Girl,Rape,Romantic,Uniform',
    link: 'https://is.gd/dSDESU',
  },
  {
    index: 9,
    thumb: 'https://j.top4top.io/p_2173y2p3d1.jpg',
    judul: 'KAKAK SEMOX CANTIK MAIN SAMA ANAK KECIL',
    size: '31.7 MB',
    genre: "Milf,Rape,Shota,Onee San,Big Oppai,Condom's, Creampie, Blow Job,Tit Job, First-time,Hand Job",
    link: 'https://is.gd/RPdG0y',
  },
  {
    index: 10,
    thumb: 'https://i.top4top.io/p_2173vtqs71.jpg',
    judul: 'KOMIK NARUTO HINATA SELINGKUH (HD)',
    size: '24.1 MB',
    genre: 'Milf,Rape,Big Oppai,Creampie, Blow Job,Tit Job, First-time,Hand Job, Netorare',
    link: 'https://is.gd/a8t8HI',
  },
  {
    index: 11,
    thumb: 'https://g.top4top.io/p_2173ox4ir1.jpg',
    judul: 'BERBAGI KENIKMATAN DIAM² BERSAMA PAMAN',
    size: '20.7 MB',
    genre: 'School,Dilf,UB,Uniform,First Time,Ojii San,Twin Tail, Creampie, Prostitution,Ahegao',
    link: 'https://is.gd/D1ARMz',
  },
  {
    index: 12,
    thumb: 'https://f.top4top.io/p_2173c0vjr1.jpg',
    judul: 'DI PAKSA NGEW3 OLEH GURU KU EPS 2',
    size: '27.2 MB',
    genre: 'Big Oppai, First Time, Creampie, BlowJob,TitJob,Paizuri, Netorare, School Girl,Rape,Romantic,Uniform',
    link: 'https://is.gd/MUKQF2',
  },
  {
    index: 13,
    thumb: 'https://k.top4top.io/p_21735c4661.jpg',
    judul: 'NGEW3 GADIS SEKOLAH SAMPAI HAM1L',
    size: '17.3 MB',
    genre: 'Big Oppai, First Time, Creampie, BlowJob,TitJob,Paizuri,School Girl,Rape,Romantic,Uniform',
    link: 'https://is.gd/7v4M3C',
  },
  {
    index: 14,
    thumb: 'https://g.top4top.io/p_2173u91sg1.jpg',
    judul: 'DI AJARKAN KENIKMATAN OLEH KAKAK PACAR KU SAAT SEPI',
    size: '19 MB',
    genre: 'Uniform ,Boy School,Shotta,Onee San, Cheating,First time, Ahegao,Romantic',
    link: 'https://is.gd/kBlDxG',
  },
  {
    index: 15,
    thumb: 'https://i.top4top.io/p_2173gcltu1.jpg',
    judul: 'DIBUAT BASAH DI KERETA Part Gadis Sekolah  EPS 1',
    size: '23.8 MB',
    genre: 'Uniform ,Boy School,Shotta,Onee San, Cheating,First time, Ahegao,Romantic',
    link: 'https://is.gd/o2Q6NG',
  },
  {
    index: 16,
    thumb: 'https://c.top4top.io/p_2173oboyb1.jpg',
    judul: 'BELAJAR BERSAMA BERUJUNG BASAH BERSAMA PART Sensei EPS 2',
    size: '15.5 MB',
    genre: 'Teacher,First Time,Romantic,Sensei,Bussines Suit,On School',
    link: 'https://is.gd/eY6u5Y',
  },
  {
    index: 17,
    thumb: 'https://j.top4top.io/p_2173wuq9x1.jpg',
    judul: 'DIBUAT BASAH DI KERETA Part Gadis Sekolah  EPS 2',
    size: '21.7 MB',
    genre: 'School Girl, Uniform, Vanila, Ahegao,On Public,Rape, Creampie,stalker,First Time',
    link: 'https://is.gd/00QbBS',
  },
  {
    index: 18,
    thumb: 'https://d.top4top.io/p_217093yuj1.jpg',
    judul: 'Threesome',
    size: '2,1 MB',
    genre: 'Tidak ketahui',
    link: 'https://is.gd/D9HIUo',
  },
  {
    index: 19,
    thumb: 'https://j.top4top.io/p_2173fzlzp1.jpg',
    judul: 'HIJAB TANTE MARWAH',
    size: '11.9 MB',
    genre: 'Tidak ketahui',
    link: 'https://is.gd/Y2xJoL',
  },
];
