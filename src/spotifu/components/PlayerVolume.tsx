
interface Props{
    volume: number,
    handleVolumeChange: ({target}: React.ChangeEvent<HTMLInputElement>) => void
}

export const PlayerVolume = ({handleVolumeChange, volume}:Props) => {
    return(
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
    )
}