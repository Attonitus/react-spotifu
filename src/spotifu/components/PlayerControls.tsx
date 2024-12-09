
interface Props{
    onClickPlay: () => void,
    isPlaying: boolean,
    currentTime: number,
    duration: number,
    handleSliderDurationChange: ({target}: React.ChangeEvent<HTMLInputElement>) => void
}

export const PlayerControls = ({currentTime, 
    duration, handleSliderDurationChange, isPlaying, onClickPlay}: Props) => {
    return(
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
    )
}