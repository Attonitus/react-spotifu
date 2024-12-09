import { SongList } from "../components/SongList"

export const HomeView = () => {


    return(
        <div className="home-view">
            <h1>Listen your favorite genre!</h1>
            <SongList genre="Rap" />
            <SongList genre="Rock" />
            <SongList genre="Reggeaton" />
        </div>
    )
}