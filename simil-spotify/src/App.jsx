import Header from './components/Header';
import './App.css';
import Card from './components/Card';
import SongData from './components/SongData';
import SongImg from './components/SongImg';


function App() {
  
  const songs = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      duration: "5:55",
      genre: "Rock",
      image: "https://upload.wikimedia.org/wikipedia/it/8/8b/BohemianRhapsody.jpg"
    },
    {
      id: 2,
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: "3:53",
      genre: "Pop",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png"
    },
    {
      id: 3,
      title: "Rolling in the Deep",
      artist: "Adele",
      duration: "3:48",
      genre: "Soul",
      image: "https://www.billboard.com/wp-content/uploads/stylus/1646069-adele-perform-2-grammys-2012-show-617.jpg?w=617&h=409&crop=1"
    },
    {
      id: 4,
      title: "Uptown Funk",
      artist: "Mark Ronson ft. Bruno Mars",
      duration: "4:30",
      genre: "Funk",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a7/Mark_Ronson_-_Uptown_Funk_%28feat._Bruno_Mars%29_%28Official_Single_Cover%29.png"
    },
    {
      id: 5,
      title: "Stairway to Heaven",
      artist: "Led Zeppelin",
      duration: "8:02",
      genre: "Rock",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stairway_to_Heaven_by_Led_Zeppelin_US_promotional_single.png"
    },
    {
      id: 6,
      title: "Blinding Lights",
      artist: "The Weeknd",
      duration: "3:20",
      genre: "Pop",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png"
    },
    {
      id: 7,
      title: "Bad Guy",
      artist: "Billie Eilish",
      duration: "3:14",
      genre: "Electropop",
      image: "https://www.shoptherocket.com/cdn/shop/files/MAGNET_Billie_Eilish_I_m_The_Bad_Guy.jpg?v=1729785183"
    },
    {
      id: 8,
      title: "Smells Like Teen Spirit",
      artist: "Nirvana",
      duration: "5:01",
      genre: "Grunge",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg"
    },
    {
      id: 9,
      title: "Despacito",
      artist: "Luis Fonsi ft. Daddy Yankee",
      duration: "3:47",
      genre: "Reggaeton",
      image: "https://www.guinnessworldrecords.es/news/2018/4/images/despacito-header-520895.jpg"
    },
    {
      id: 10,
      title: "Hips Don't Lie",
      artist: "Shakira ft. Wyclef Jean",
      duration: "3:38",
      genre: "Pop",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c0/Shakira-HipsDon%27tLie.jpg"
    }
  ];

  return (
    <>
      <Header/>

      {songs.map((song)=>
        <Card key={song.id} >
          <SongData song={song} />
          <SongImg image={song.image} /> 
        
         </Card>
      
      )}
    </>
  )
}

export default App
