import React from 'react';
import Img from 'react-image';
import YouTube from 'react-youtube';
import IMediaItem, { IPlayer } from './models/IMediaItem';

interface IMediaPlayerProps {
  item: IMediaItem;
  player: IPlayer;
  setPlayer: (player: IPlayer) => void;
}

const MediaPlayer: React.FC<IMediaPlayerProps> = props => {
  switch (props.item.type) {
    case 'photo':
      if (props.player.pauseVideo) {
        props.setPlayer({ pauseVideo: undefined });
      }
      return <Img src={props.item.src} alt={props.item.caption} />;
    case 'video':
      return (
        <YouTube
          className="App-youtube-player"
          videoId={props.item.id}
          opts={{
            playerVars: { autoplay: 0 }
          }}
          onReady={e => props.setPlayer(e.target)}
        />
      );
  }
};

interface IMediaModalProps {
  hideModal: () => void;
  item: IMediaItem;
  player: IPlayer;
  setPlayer: (player: IPlayer) => void;
  show: boolean;
}

const MediaModal: React.FC<IMediaModalProps> = props => {
  return (
    <div
      className={`App-modal ${props.show ? 'show-modal' : ''}`}
      onClick={event => {
        if (
          event.target instanceof HTMLElement &&
          event.target.className.split(' ').includes('App-modal')
        ) {
          props.hideModal();
        }
      }}
    >
      <div className="App-modal-content media-modal">
        <span className="close-button" onClick={props.hideModal}>&times;</span>
        {props.item ? <MediaPlayer {...props} /> : null}
      </div>
    </div>
  );
};

export default MediaModal;
