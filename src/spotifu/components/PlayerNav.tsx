import { PlayerSongInfo } from "./PlayerSongInfo";
import { PlayerControls } from "./PlayerControls";
import { PlayerVolume } from "./PlayerVolume";
import { usePlayer } from "../hooks/usePlayer";


export const PlayerNav = () => {

    const {audioRef,
        duration,
        handleLoadCurrentTime,
        handleLoadDuration,
        handleSliderDurationChange,
        handleVolumeChange,
        isPlaying,
        onClickPlay,
        volume,
        currentTime} = usePlayer();

    return(
        <div className="player-nav">
            <audio ref={audioRef}
                onTimeUpdate={handleLoadCurrentTime}
                onLoadedMetadata={handleLoadDuration} 
                src="https://res.cloudinary.com/dkzturwmj/video/upload/v1733710084/vaz3j3norsvglfmq0zeu.mp3">
            </audio>
            <PlayerSongInfo />
            <PlayerControls
                onClickPlay={onClickPlay}
                isPlaying={isPlaying}
                handleSliderDurationChange={handleSliderDurationChange}
                duration={duration} 
                currentTime={currentTime} 
            />
            <PlayerVolume handleVolumeChange={handleVolumeChange} volume={volume} />
        </div>
    )
}