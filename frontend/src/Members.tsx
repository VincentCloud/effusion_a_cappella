import React, { useState } from 'react';
import Img from 'react-smooth-image';
import MemberDetail from './MemberDetail';
import IMember from './models/IMember';

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

interface IMembersProps {
  members: IMember[];
}

const Members: React.FC<IMembersProps> = ({ members }) => {
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
