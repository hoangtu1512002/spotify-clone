import React, { useContext } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import '../assets/css/Playing.css';
import { Songs } from "../store/Context";
function Play() {
    const {song, handleSetSong} = useContext(Songs);
    const handleClickNext = () => {
        handleSetSong(song.id + 1);
    };
    const handleClickprev = () => {
        handleSetSong(song.id - 1);
    };
    return ( <div className="">
        <AudioPlayer className="player-music" 
            src={song.url} layout="horizontal" 
            showSkipControls={true}
            showJumpControls={false}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickprev}
        />
    </div> );
}

export default Play;