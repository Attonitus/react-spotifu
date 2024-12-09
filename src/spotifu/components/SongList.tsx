import { useState } from "react";
import { Song } from "./Song";

interface Props{
    genre: string
}

export const SongList = ({genre}:Props) => {

    const [songs, setSongs] = useState(['1', '2', '3', '4']);

    return(
        <div className="song-list">
            <h2>{genre}</h2>
            <div className="songs">
                {
                    songs.map( song => (
                        <Song key={song} />
                    ))
                }
            </div>
        </div>
    )
}