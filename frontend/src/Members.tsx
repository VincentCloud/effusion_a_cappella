import React, { useState } from 'react';
import Img from 'react-smooth-image';
import MemberDetail from './MemberDetail';
import IMember from './models/IMember';

interface IMemberPhotoProps {
  member: IMember;
  onClick?: () => void;
}

const MemberPhoto: React.FC<IMemberPhotoProps> = props => {
  const [noHover, setNoHover] = useState(false);
  return (
    <div className="App-member" onClick={props.onClick}>
        <Img
          src={props.member.thumbnail || props.member.src}
          alt={props.member.name}
        />
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
            {props.member.name}
            <br />
            <small>
                {props.member.part} | {props.member.years}
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
            member={member}
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
