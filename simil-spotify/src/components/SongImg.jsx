import './SongImg.css'

export default function SongImg({image}){
    return(
        <>
        <div className="song-cover">
            <img src={image} alt="coverdisco" />
        </div>
        </>
    )
}