import {Outlet} from "react-router-dom";
import useLocalStorage from "use-local-storage";

import {Header} from "../components";

const MainLayout = () => {

    const [theme, setTheme] = useLocalStorage('theme', 'light');

    return(
        <div id={theme}>
            <div className={'background'} >
                <Header theme={theme} setTheme={setTheme}/>
                <Outlet/>
            </div>
        </div>
    )
    
}

export {MainLayout}