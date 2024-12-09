import { useDispatch } from "react-redux"
import { setViewProfile } from "../../store/slices/uiSlice";


export const PlayerSongInfo = () => {

    const dispatch = useDispatch();

    const handleViewProfile = () => {
        dispatch(setViewProfile());
    }

    return (
        <div className="player-song-info">
            <div className="player-song-info-img">
                <img src="https://attonitus.github.io/spotifu/img/temaactual1.jpg" alt="" />
            </div>
            <div className="player-song-info-info">
                <h5 className="title-song">Fontz</h5>
                <h5 onClick={handleViewProfile} className="artist-name">Eugenne McGuiness</h5>
            </div>
        </div>
    )
}