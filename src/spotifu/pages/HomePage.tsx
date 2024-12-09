import { useSelector } from "react-redux"
import { PlayerNav } from "../components/PlayerNav"
import { SearchBar } from "../components/SearchBar"
import { HomeView } from "../views/HomeView"
import { ProfileView } from "../views/ProfileView"
import { RootState } from "../../store/store"

export const HomePage = () => {

    const state = useSelector((state: RootState) => state.ui.viewProfile);

    return(
        <div className="container-home">
            <main className="main">
                {/* searchbar */}
                <SearchBar />

                {/* views */}
                {
                    state ? <ProfileView /> : <HomeView />
                }

                
                {/* audio player */}
                <PlayerNav />
            </main>
        </div>
    )
}