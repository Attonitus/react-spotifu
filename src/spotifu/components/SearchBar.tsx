import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { setViewHome } from "../../store/slices/uiSlice";
import { RootState } from "../../store/store";

export const SearchBar = () => {

    const dispatch = useDispatch();
    const navigator = useNavigate();
    const state = useSelector((state: RootState) => state.auth.user);

    const handleLogout = () => {
        navigator ("/auth", {replace: true})
    }

    const handleViewHome = () => {
        dispatch(setViewHome());
    }

    return(
        <div className="search-bar">
            <h1 className="logo" onClick={handleViewHome}>Spotifu</h1>
            <div className="input-div">
                <input type="text" placeholder="Search: indie, rock " className="input-search" />
            </div>
            <div className="user-info">
                {
                    state ? (
                        <div>
                            <h3>{state.name}</h3>
                            <span onClick={handleLogout} 
                            className="material-symbols-outlined icon">logout</span>
                        </div>
                    ) 
                    : <button className="button-icon">Login</button>
                }

            </div>
        </div>
    )
}