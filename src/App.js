import './App.css';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesPage} from "./pages";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<MoviesPage/>}/>
                <Route path={'/movies'} element={<MoviesPage/>}/>
                <Route path={'/movies/:movieID'} element={<MovieDetailsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
