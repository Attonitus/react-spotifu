

export const Song = () => {
    return(
        <div className="song-container">
            <div className="song-img">
                <img src="https://attonitus.github.io/spotifu/img/cover1.jpg" alt="" />
                <button className="button-icon alter-green">
                    <span className="material-symbols-outlined">
                        play_arrow
                    </span>
                </button>
            </div>
            <div className="song-info">
                <h3 className="song-title">Title</h3>
                <h5 className="song-artist">Artist name</h5>
            </div>
        </div>
    )
}