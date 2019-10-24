import React, { useState } from 'react';
import Img from 'react-smooth-image';
import MemberDetail from './MemberDetail';
import IMember from './models/IMember';

const members: IMember[] = [
  {
    bio: `**Hometown:**  \nCorbeil, Ontario

**What do you study in university?**  \nMajor in Sociology with a double minor
in Hispanic Studies and Canadian Studies.

**If you could only listen to one artist for the rest of your life, who
would it be?**  \nAretha Franklin

**What is your musical guilty pleasure?**  \nLes Trois Accords, their music is
hilarious

**What is your favourite Effusion arrangement and why?**  \nA Long Walk by Jill
Scott. It is one of those songs that I have sung with Effusion that I will never
forget. I love all the little details between the different voice parts and the
song is just amazing overall.

**What is your hidden talent?**  \nI can speak French, English, Spanish,
Italian, and a little bit of Catalan.

**Describe Effusion in one word:**  \nVowels
`,
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
    years: `'18, '19`
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
    execPosition: 'VP External',
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
    name: 'Clemence Taisne',
    part: 'Alto',
    src: 'https://effusion.ca/wp-content/uploads/2017/04/Emma-1.jpg',
    years: `'19`
  },
  {
    name: 'Jacob Peng',
    part: 'Tenor',
    src: 'https://pengmai.github.io/static/media/me.16975ca4.jpg',
    years: `'19`
  },
  {
    name: 'Victor Wang',
    part: 'Bass',
    src: 'https://effusion.ca/wp-content/uploads/2016/02/Ben.jpg',
    years: `'19`
  }
];

interface IMemberPhotoProps {
  name: string;
  part: string;
  onClick?: () => void;
  src: string;
  years: string;
}

const MemberPhoto: React.FC<IMemberPhotoProps> = props => {
  const [noHover, setNoHover] = useState(false);
  return (
    <div className="App-member" onClick={props.onClick}>
        <Img src={props.src} alt={props.name} />
        <span
          className={`App-member-caption ${noHover ? 'no-hover' : ''}`}
          onMouseLeave={e => {
            if (
              e.target instanceof HTMLElement &&
              e.target.parentElement &&
              e.target.parentElement.className.includes('App-member-caption')
            ) {
              setNoHover(false);
            }
          }}
          onClick={() => setNoHover(true)}
        >
          <span>
            {props.name}
            <br />
            <small>
                {props.part} | {props.years}
            </small>
          </span>
        </span>
    </div>
  );
};

const Members: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <h1>members</h1>
      <MemberDetail
        show={showModal}
        hideModal={() => {
          setShowModal(false);
          document.body.style.overflow = 'auto';
        }}
        member={selectedMember}
      />
      <div className="App-members-gallery">
        {members.map(member =>
          <MemberPhoto
            {...member}
            onClick={() => {
              setShowModal(true);
              document.body.style.overflow = 'hidden';
              setSelectedMember(member);
            }}
            key={member.name}
          />
        )}
      </div>
    </>
  );
};

export default Members;
