import { useState } from 'react';
import { Song } from '../components/Song';
import profileImg from '/profile.jpeg';

export const ProfileView = () => {

    const [songs, setSongs] = useState(['1', '2', '3', '4']);

    return(
        <div className="profile-view">
            <div className="profile-info">
                <div className="profile-img">
                    <img src={profileImg} alt="" />
                </div>
                <h2>Tyler the creator</h2>
            </div>
            <div className="songs-container">
                <div className="songs">
                    {
                        songs.map( song => (
                            <Song key={song} />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}