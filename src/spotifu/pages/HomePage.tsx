import { PlayerNav } from "../components/PlayerNav"
import { SearchBar } from "../components/SearchBar"
import { HomeView } from "../views/HomeView"

export const HomePage = () => {
    return(
        <div className="container-home">
            <main className="main">
                {/* searchbar */}
                <SearchBar />

                {/* views */}
                <HomeView />

                {/* audio player */}
                <PlayerNav />
            </main>
        </div>
    )
}