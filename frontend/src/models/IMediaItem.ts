interface IMediaPhoto {
  type: 'photo';
  caption: string;
  src: string;
}

interface IVideo {
  type: 'video';
  caption: string;
  id: string;
}

type IMediaItem = IMediaPhoto | IVideo;
export default IMediaItem;
