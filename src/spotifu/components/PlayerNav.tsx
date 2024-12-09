import { useRef, useState } from "react"


export const PlayerNav = () => {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);

    const onClickPlay = () => {
        if (audioRef.current) {
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    const handleLoadCurrentTime = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadDuration = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSliderDurationChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        if(audioRef.current){
            const {value} = target;
            audioRef.current.currentTime = Number(value);
            setCurrentTime(Number(value));
        }
    }

    const handleVolumeChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    };

    return(
        <div className="player-nav">
            <audio ref={audioRef}
            onTimeUpdate={handleLoadCurrentTime}
            onLoadedMetadata={handleLoadDuration} 
            src="https://res.cloudinary.com/dkzturwmj/video/upload/v1733710084/vaz3j3norsvglfmq0zeu.mp3">
            </audio>
            <div className="player-song-info">
                <div className="player-song-info-img">
                    <img src="https://attonitus.github.io/spotifu/img/temaactual1.jpg" alt="" />
                </div>
                <div className="player-song-info-info">
                    <h5 className="title-song">Fontz</h5>
                    <h5 className="artist-name">Eugenne McGuiness</h5>
                </div>
            </div>
            <div className="player-controls">
                <div className="player-controls-buttons">
                    <button className="button-icon">
                        <span className="material-symbols-outlined">
                            skip_previous
                        </span>
                    </button>
                    <button onClick={onClickPlay} className="button-icon alter-white">
                        <span className="material-symbols-outlined">
                            {isPlaying ? "pause" : "play_arrow"}
                        </span>
                    </button>
                    <button className="button-icon">
                        <span className="material-symbols-outlined">
                            skip_next
                        </span>
                    </button>
                </div>
                <div className="player-playback">
                    <span>{new Date(currentTime * 1000).toISOString().substr(14, 5)}</span>
                    <div className="slider-container">
                        <input type="range" className="slider" value={currentTime}
                            max={duration}
                            onChange={handleSliderDurationChange}
                        />
                    </div>
                    <span>{new Date(duration * 1000).toISOString().substr(14, 5)}</span>
                </div>
            </div>
            <div className="player-player-volumen">
                <div className="player-volumen">
                    <span className="material-symbols-outlined">volume_up</span>
                    <div className="slider-container-volumen">
                        <input type="range" className="slider volumen" min={0}
                            max={1}
                            step={0.01}
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}