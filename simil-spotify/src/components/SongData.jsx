export default function SongData({ song }) {
  return (
    <>
      <div className="song-data">
        <span><p>
          <b>{song.title}</b>
        </p></span>
        
        <span><p>
          <i>{song.artist}</i>
        </p></span>
        
        <span><p>{song.duration}</p></span>
        <span><p>{song.genre}</p></span>
      </div>
    </>
  );
}
