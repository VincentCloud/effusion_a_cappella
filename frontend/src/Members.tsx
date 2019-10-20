import React from 'react';

interface IMember {
  execPosition?: string;
  name: string;
  part: string;
  src: string;
  years: string;
}

const members: IMember[] = [
  {
    execPosition: 'President',
    name: 'Emmanuelle Faucher',
    part: 'Soprano',
    src: 'https://effusion.ca/wp-content/uploads/2017/04/Emma-1.jpg',
    years: `'16, '17, '18, '19`
  },
  {
    execPosition: 'Music Director',
    name: 'Jiayin Huang',
    part: 'Mezzo',
    src: 'https://effusion.ca/wp-content/uploads/2017/02/Jiayin-e1566748409917.jpg',
    years: `'18, '19`
  },
  {
    name: 'Pauline Rivera',
    part: 'Alto',
    src: 'https://effusion.ca/wp-content/uploads/2017/02/Pauline-featured.jpg',
    years: `'16, '17, '18, '19`
  },
  {
    execPosition: 'VP Finance',
    name: 'Vincent Huang',
    part: 'Bass',
    src: 'https://effusion.ca/wp-content/uploads/2017/02/Vincent-e1566749398203.jpg',
    years: `'19`
  },
  {
    name: 'Hrichik Sarker',
    part: 'Baritone',
    src: 'https://effusion.ca/wp-content/uploads/2017/02/Hrichik.jpg',
    years: `'16, '17, '18, '19`
  },
  {
    execPosition: 'VP Internal',
    name: 'Celia Benhocine',
    part: 'Alto',
    src: 'https://effusion.ca/wp-content/uploads/2016/09/Celia.jpg',
    years: `'18, '19`
  },
  {
    execPosition: 'VP Publicity',
    name: 'Mandy Tardif',
    part: 'Mezzo',
    src: 'https://effusion.ca/wp-content/uploads/2016/02/Mandy-2.jpg',
    years: `'18, '19,`
  },
  {
    name: 'Marc Darmohraj',
    part: 'Baritone',
    src: 'https://effusion.ca/wp-content/uploads/2016/02/Marc2.jpg',
    years: `'17, '18, '19`
  },
  {
    name: 'Ben Dringoli',
    part: 'Beatbox/Tenor',
    src: 'https://effusion.ca/wp-content/uploads/2016/02/Ben.jpg',
    years: `'17, '18, '19`
  },
  {
    name: 'Emmanuelle Martin',
    part: 'Mezzo',
    src: 'https://effusion.ca/wp-content/uploads/2015/05/Memma-featured.jpg',
    years: `'19`
  },
  {
    name: 'Ella Stewart',
    part: 'Soprano',
    src: 'https://effusion.ca/wp-content/uploads/2015/05/Ella.jpg',
    years: `'18, '19`
  },
  {
    name: 'Moses Otim',
    part: 'Bass',
    src: 'https://effusion.ca/wp-content/uploads/2015/05/Moses.jpg',
    years: `'18, '19`
  },
  {
    name: 'Eddy Yang',
    part: 'Tenor',
    src: 'https://effusion.ca/wp-content/uploads/2015/05/Eddy.jpg',
    years: `'17, '18, '19`
  },
  {
    execPosition: 'President',
    name: 'Emmanuelle Faucher',
    part: 'Soprano',
    src: 'https://effusion.ca/wp-content/uploads/2017/04/Emma-1.jpg',
    years: `'16, '17, '18, '19`
  },
  {
    execPosition: 'VP Internal',
    name: 'Celia Benhocine',
    part: 'Alto',
    src: 'https://effusion.ca/wp-content/uploads/2016/09/Celia.jpg',
    years: `'18, '19`
  },
  {
    name: 'Ben Dringoli',
    part: 'Beatbox/Tenor',
    src: 'https://effusion.ca/wp-content/uploads/2016/02/Ben.jpg',
    years: `'17, '18, '19`
  }
];

class Members extends React.Component {
  public render() {
    return (
      <>
        <h1>members</h1>
        <div className="App-members-gallery">
          {members.map(({ src, name }, i) =>
            <div
              className="App-member"
              key={`${name}-${i}`}
            >
              <img src={src} alt={name} />
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Members;
