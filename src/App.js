import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {LoginPage, MovieDetailsPage, MoviesPage} from "./pages";
import {RequireAuth} from "./hoc";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<MoviesPage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:movieID'} element={<RequireAuth><MovieDetailsPage/></RequireAuth>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
