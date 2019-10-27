import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import Img from 'react-smooth-image';
import IMediaItem from './models/IMediaItem';

const mediaItems: IMediaItem[] = [
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
}

const MediaPreview: React.FC<IMediaPreviewProps> = ({ item }) => {
  const { caption, src } = toPreview(item);
  return (
    <div className="App-media-preview">
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

const Media = () => (
  <div>
    <h1>media</h1>
    <div className="App-media-gallery">
      {mediaItems.map(item => <MediaPreview item={item} key={item.caption} />)}
    </div>
  </div>
);

export default Media;
