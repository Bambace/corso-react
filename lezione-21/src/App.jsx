import { useState } from "react";
import "./App.css";
import Post from "./components/Post/Post";
import Footer from "./components/Footer/Footer";
import { LikeContext } from "./context/Context";
import { GandaLorem } from "gandalorem";

function App() {
  const [post, setPost] = useState({
    id: crypto.randomUUID(),
    descr: "foto bellisima della luna, scattata ieri notte!",
    urlImg: "https://www.clarin.com/img/2024/07/29/G1SnbsO-L_2000x1500__1.jpg",
    likesCount: 42,
  });

  return (
    <>
      <LikeContext.Provider value={post.likesCount}>
        <Post post={post} />

        <hr />
        <hr />

        <Footer />
      </LikeContext.Provider>

      <h2><GandaLorem words={5}/></h2>
      <p>
        <GandaLorem words={20} />
      </p>
    </>
  );
}

export default App;
