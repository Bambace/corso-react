import "./Film.css";
import { FaHeart, FaRegHeart  } from "react-icons/fa";

export default function Film({ movie,onToggleFavorite  }) {


    function handleClickHeart(){
            //alert(`Id movie: ${movie.id}`);
        onToggleFavorite(movie.id)

    }

  return (
    <>
      <div className="card-movie">
        <div className="card-img">
          <img src={movie.img_url} alt={movie.titolo} />
        </div>
        <div className="card-content">
          <h1>{movie.titolo}</h1>
          <p>{movie.directed_by}</p>
          <p>
            [{movie.year}] {movie.duration}'
          </p>
          <p>
            {movie.genres.map((genre, index) => (
                <span key={index}>{genre} </span>
            ))}
          </p>
          <p>{movie.short_description}</p>

          {/* renderizo il cuore pieno solo se isFavorite e true  */}
          <span onClick={()=>handleClickHeart()}>
          {movie.isFavorite?(
             <FaHeart className='heart-icon'/>
          ):(
            <FaRegHeart className='heart-icon'/>
          )}
          </span>
       
         
        </div>
      </div>
    </>
  );
}
