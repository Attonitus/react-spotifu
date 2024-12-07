export const SearchBar = () => {
    return(
        <div className="search-bar">
            <h1 className="logo">Spotifu</h1>
            <div className="input-div">
                <input type="text" placeholder="Search: indie, rock " className="input-search" />
            </div>
            <div className="user-info">
                <h3>Samitita</h3>
                <span className="material-symbols-outlined icon">
                    logout
                </span>
            </div>
        </div>
    )
}