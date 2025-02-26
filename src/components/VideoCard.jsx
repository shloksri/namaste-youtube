const VideoCard = ({ info }) => {
  if (!info) return <div>No data fetched</div>;
  //   console.log("info = ", info);

  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        alt="thumbnail"
        className="rounded-lg"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="fot-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
