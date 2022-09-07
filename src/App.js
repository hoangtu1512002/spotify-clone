import DetailtSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import { Songs } from "./store/Context";
import DataSongs from './data/songs.json';
import Play from "./components/Playing";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const music = DataSongs.find(song => song.id === idSong);

    if(!music) {
      setSong(DataSongs[0]);
    } else {
      setSong(music);
    }
  }

  return (
    <div className="App">
        <Navbar></Navbar>
        <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
          <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
            <DetailtSong />
            <ListSong />
          </div>
          <Play />
        </Songs.Provider>
    </div>
  );
}

export default App;
