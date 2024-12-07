import { Route, Routes } from "react-router-dom"
import { AuthRouter } from "../auth/router/AuthRouter"
import { SpotifuRouter } from "../spotifu/router/SpotifuRouter"


export const AppRouter = () => {
    return(
        <Routes>

            <Route path="/auth/*" element={<AuthRouter />} />
            
            <Route path="/*" element={<SpotifuRouter />} />

        </Routes>
    )
}