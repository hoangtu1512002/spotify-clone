import { useContext } from "react";
import { Songs } from "../store/Context";

function DetailtSong() {
    const {song} = useContext(Songs);

    return ( <div className="col-span-1 p-3">
        <h2 className="text-cyan-500 font-bold">Now playing</h2>
        <h2 className="text-neutral-400 text-2xl">
            {song.name}
        </h2>
        <div className="w-[200px] m-auto mt-10">
            <img className="w-full" src={song.links.images[0].url} alt="" />
        </div>
        <div className="flex justify-evenly items-center mt-10">
            <img className="w-[60px] h-[60px] rounded-[50%]" src={song.links.images[1].url} alt="" />
            <span className="text-xl text-white">{song.author}</span>
        </div>
    </div> );
}

export default DetailtSong;