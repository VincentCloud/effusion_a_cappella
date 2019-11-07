import IMediaItem from './models/IMediaItem';

import clemence from './images/clemence.jpg';
import jacob from './images/jacob.jpg';
import victor from './images/victor.jpg';

const media: IMediaItem[] = [
  {
    caption: 'Lovely Day - Effusion A Cappella (Cover of Bill Withers)',
    id: 'fCOe0NWQth8',
    type: 'video'
  },
  {
    caption: 'A Long Walk - Effusion A Cappella (Jill Scott Cover)',
    id: 'bDBqK7EhOq0',
    type: 'video'
  },
  {
    caption: `Untitled (How Does It Feel) - Effusion A Cappella (D'Angelo Cover)`,
    id: 'vfRqVV15j7E',
    type: 'video'
  },
  {
    caption: 'Redemption Song - Effusion A Cappella (cover of Bob Marley)',
    id: 'qjnyMp6HpWw',
    type: 'video'
  },
  {
    caption: `Fallin' - Effusion A Cappella (cover of Alicia Keys)`,
    id: 'j4c0DfjxRK4',
    type: 'video'
  },
  {
    caption: `Brown Sugar - Effusion A Cappella (D'Angelo Cover)`,
    id: 'PUNj2xlNBJg',
    type: 'video'
  },
  {
    caption: 'Ex Factor - Effusion A Cappella (cover of Lauryn Hill)',
    id: 'LJkOG1LphlA',
    type: 'video'
  },
  {
    caption: `Nobody's Supposed To Be Here - Effusion A Cappella (cover of Deborah Cox)`,
    id: 'H8QrJO9LQ1Y',
    type: 'video'
  },
  {
    caption: 'Seven Nation Army - Effusion A Cappella (cover of the White Stripes)',
    id: 'CwOgG9BDbrc',
    type: 'video'
  },
  {
    caption: 'Chandelier - Effusion A Cappella (Cover of Sia)',
    id: 'Qscdjh4qXWI',
    type: 'video'
  },
  {
    caption: 'Jealous - Nick Jonas (Effusion A Cappella Cover)',
    id: 'ryXvpHu0fc8',
    type: 'video'
  },
  {
    caption: 'Fall Concert 2014, Clockwork.',
    src: 'https://effusion.ca/wp-content/uploads/2015/05/eff_l.jpg',
    type: 'photo'
  },
  {
    caption: 'Spring Concert 2014, In Bloom.',
    src: 'https://effusion.ca/wp-content/uploads/2015/05/eff_g-e1430963962844.jpg',
    type: 'photo'
  }
];

export default {
  homeImages: [
    {
      caption: `Adrift | Spring Concert '19`,
      credits: 'Nicolas Photographie',
      src: 'https://effusion.ca/wp-content/uploads/2019/08/Carousel-1.jpg'
    },
    {
      caption: `Adrift | Spring Concert '19`,
      credits: 'Nicolas Photographie',
      src: 'https://effusion.ca/wp-content/uploads/2019/08/Carousel-3.jpg'
    },
    {
      caption: `Adrift | Spring Concert '19`,
      credits: 'Nicolas Photographie',
      src: 'https://effusion.ca/wp-content/uploads/2019/08/Carousel-2.jpg'
    }
  ],
  media,
  members: (window as any).EFFUSION_MEMBERS || [], //[
//     {
//       bio: `**Hometown:**  \nCorbeil, Ontario

// **What do you study in university?**  \nMajor in Sociology with a double minor
// in Hispanic Studies and Canadian Studies.

// **If you could only listen to one artist for the rest of your life, who
// would it be?**  \nAretha Franklin

// **What is your musical guilty pleasure?**  \nLes Trois Accords, their music is
// hilarious

// **What is your favourite Effusion arrangement and why?**  \nA Long Walk by Jill
// Scott. It is one of those songs that I have sung with Effusion that I will never
// forget. I love all the little details between the different voice parts and the
// song is just amazing overall.

// **What is your hidden talent?**  \nI can speak French, English, Spanish,
// Italian, and a little bit of Catalan.

// **Describe Effusion in one word:**  \nVowels
// `,
//       execPosition: 'President',
//       name: 'Emmanuelle Faucher',
//       part: 'Soprano',
//       src: 'https://effusion.ca/wp-content/uploads/2017/04/Emma-1.jpg',
//       years: `'16, '17, '18, '19`
//     },
  //   {
  //     bio: '',
  //     execPosition: 'Music Director',
  //     name: 'Jiayin Huang',
  //     part: 'Mezzo',
  //     src: 'https://effusion.ca/wp-content/uploads/2017/02/Jiayin-e1566748409917.jpg',
  //     years: `'18, '19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Pauline Rivera',
  //     part: 'Alto',
  //     src: 'https://effusion.ca/wp-content/uploads/2017/02/Pauline-featured.jpg',
  //     years: `'16, '17, '18, '19`
  //   },
  //   {
  //     bio: '',
  //     execPosition: 'VP Finance',
  //     name: 'Vincent Huang',
  //     part: 'Bass',
  //     src: 'https://effusion.ca/wp-content/uploads/2017/02/Vincent-e1566749398203.jpg',
  //     years: `'19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Hrichik Sarker',
  //     part: 'Baritone',
  //     src: 'https://effusion.ca/wp-content/uploads/2017/02/Hrichik.jpg',
  //     years: `'16, '17, '18, '19`
  //   },
  //   {
  //     bio: '',
  //     execPosition: 'VP Internal',
  //     name: 'Celia Benhocine',
  //     part: 'Alto',
  //     src: 'https://effusion.ca/wp-content/uploads/2016/09/Celia.jpg',
  //     years: `'18, '19`
  //   },
  //   {
  //     bio: '',
  //     execPosition: 'VP Publicity',
  //     name: 'Mandy Tardif',
  //     part: 'Mezzo',
  //     src: 'https://effusion.ca/wp-content/uploads/2016/02/Mandy-2.jpg',
  //     years: `'18, '19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Marc Darmohraj',
  //     part: 'Baritone',
  //     src: 'https://effusion.ca/wp-content/uploads/2016/02/Marc2.jpg',
  //     years: `'17, '18, '19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Ben Dringoli',
  //     part: 'Beatbox/Tenor',
  //     src: 'https://effusion.ca/wp-content/uploads/2016/02/Ben.jpg',
  //     years: `'17, '18, '19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Emmanuelle Martin',
  //     part: 'Mezzo',
  //     src: 'https://effusion.ca/wp-content/uploads/2015/05/Memma-featured.jpg',
  //     years: `'19`
  //   },
  //   {
  //     bio: '',
  //     execPosition: 'VP External',
  //     name: 'Ella Stewart',
  //     part: 'Soprano',
  //     src: 'https://effusion.ca/wp-content/uploads/2015/05/Ella.jpg',
  //     years: `'18, '19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Moses Otim',
  //     part: 'Bass',
  //     src: 'https://effusion.ca/wp-content/uploads/2015/05/Moses.jpg',
  //     years: `'18, '19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Eddy Yang',
  //     part: 'Tenor',
  //     src: 'https://effusion.ca/wp-content/uploads/2015/05/Eddy.jpg',
  //     years: `'17, '18, '19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Clemence Taisne',
  //     part: 'Alto',
  //     src: clemence,
  //     years: `'19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Jacob Peng',
  //     part: 'Tenor',
  //     src: jacob,
  //     years: `'19`
  //   },
  //   {
  //     bio: '',
  //     name: 'Victor Wang',
  //     part: 'Bass',
  //     src: victor,
  //     years: `'19`
  //   }
  // ],
  news: [
    {
      body: `
After hearing around 150 auditions and some very difficult deliberations,
we have reached a decision on who will be called back. Thank you to everyone
who auditioned, and **congratulations to the following people on being invited
Effusion A Cappella’s Fall 2019 Callbacks:**

Abbi Baran  
Rebecca Chen  
Sarah Garreston  
Paige Murray  
Clemence Taisne  
Sarah Sundara  
Natalia Popovska  
Sonja Hagglund  
Jillian Tam  
Daniel Luo  
Jacob Peng  
Ugo Umeano  
Samer Girgis  
Jared Warden-Joseph  
Edgard Ngalissamy  
Terence Liu  
Ben Posedi  
Victor Wang  

**Callbacks will be held on the evening of Tuesday, September 17th.
Please email us at info.effusion@gmail.com by the end of today to confirm
that you are able to join us for callbacks.** We will then provide you with
more information on what you need to prepare.
  `,
      date: '09/16/2019',
      title: 'Fall 2019 Callbacks List'
    },
    {
      body: `
### IT’S THAT TIME OF YEAR AGAIN! EFFUSION A CAPPELLA IS HOLDING ITS FALL 2019 AUDITIONS.
**Audition time slot sign ups** will take place at Activities Night (September 11th & 12th, 4-8 pm, Tomlinson Field House – 475 Pine Ave. W).

**The auditions will be held on***:

September 13th: 4:00 pm – 9:00 pm  
September 14th: 8:30 am – 12:30 pm  
September 15th: 8:30 am – 5 pm  
The exact location of the auditions will be given upon sign up, but they will take place only a few blocks from McGill campus.

**What you need to prepare for your audition:**

All we need from you is a ~1 minute prepared excerpt of a song of your choice, so be sure to choose a song that showcases your voice and what you can bring to the group. If you can beatbox, we’d love to hear that as well.

**There is an additional audition date taking place on September 8th for those who already signed up at Discover McGill. All others should sign up at Activities Night and will audition on one of the three dates listed above.*
  `,
      date: '08/22/2019',
      title: 'Fall 2019 Auditions!'
    }
  ]
};
