import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';
import Img from 'react-smooth-image';
import MediaModal from './MediaModal';
import IMediaItem, { IPlayer } from './models/IMediaItem';

const toPreview = (item: IMediaItem) => {
  switch (item.type) {
    case 'photo': return item;
    case 'video': return {
      caption: item.caption,
      src: `http://i3.ytimg.com/vi/${item.id}/sddefault.jpg`,
      type: item.type
    };
  }
};

interface IMediaPreviewProps {
  item: IMediaItem;
  onClick: () => void;
}

const MediaPreview: React.FC<IMediaPreviewProps> = ({ item, onClick }) => {
  const { caption, src } = toPreview(item);
  return (
    <div className="App-media-preview" onClick={onClick}>
      <Img src={src} alt={caption} containerStyles={{ paddingBottom: '75%' }}/>
      <span className="App-media-preview-caption">
        <span>{caption}</span>
        {item.type === 'video'
          ? <span className="App-media-preview-playbutton">
              <FaYoutube />
            </span>
          : null}
      </span>
    </div>
  );
};

interface IMediaProps {
  mediaItems: IMediaItem[];
}

const Media: React.FC<IMediaProps> = ({ mediaItems }) => {
  const [selectedItem, setSelectedItem] = useState(mediaItems[0]);
  const [showModal, setShowModal] = useState(false);
  const [player, setPlayer] = useState({ pauseVideo: undefined } as IPlayer);
  return (
    <div>
      <h1>media</h1>
      <MediaModal
        show={showModal}
        hideModal={() => {
          setShowModal(false);
          document.body.style.overflow = 'auto';
          if (player.pauseVideo) {
            player.pauseVideo();
          }
        }}
        player={player}
        setPlayer={setPlayer}
        item={selectedItem}
      />
      <div className="App-media-gallery">
        {mediaItems.map(item =>
          <MediaPreview
            item={item}
            key={item.caption}
            onClick={() => {
              setShowModal(true);
              document.body.style.overflow = 'hidden';
              setSelectedItem(item);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Media;
