import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {LoginPage, MovieDetailsPage, MoviesPage, NotFoundPage} from "./pages";
import {RequireAuth} from "./hoc";
import './App.css';

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<MoviesPage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:movieID'} element={<RequireAuth><MovieDetailsPage/></RequireAuth>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
