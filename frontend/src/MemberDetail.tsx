import React from 'react';
import Img from 'react-image';
import ReactMarkdown from 'react-markdown';
import IMember from './models/IMember';

interface IMemberDetailProps {
  show: boolean;
  hideModal: () => void;
  member?: IMember;
}

const MemberPanel: React.FC<IMember> = m => (
  <div className="App-member-panel">
    <div className="member-panel-img-frame">
      <Img src={m.src} alt={m.name} className="member-panel-img" />
    </div>
    <h1>{m.name}</h1>
    <h3>{(m.execPosition ? `${m.execPosition}, ` : '') + m.part}</h3>
    <h3>{m.years}</h3>
    <ReactMarkdown
      className="App-markdown-container"
      source={m.bio || ''}
    />
  </div>
);

const MemberDetail: React.FC<IMemberDetailProps> = ({ hideModal, member, show }) => (
  <div
    className={`App-modal ${show ? 'show-modal' : ''}`}
    onClick={event => {
      if (
        event.target instanceof HTMLElement &&
        event.target.className.split(' ').includes('App-modal')
      ) {
        hideModal();
      }
    }}
  >
    <div className="App-modal-content">
      <span className="close-button" onClick={hideModal}>&times;</span>
      {member ? <MemberPanel {...member} /> : null}
    </div>
  </div>
);

export default MemberDetail;
