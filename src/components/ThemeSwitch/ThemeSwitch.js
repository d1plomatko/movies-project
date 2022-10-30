import css from './ThemeSwitch.module.css';

const ThemeSwitch = ({theme, setTheme}) => {

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)

    };

    return (<div className={css.switch}>

        <button onClick={toggleTheme}>
            {theme === 'light' ?
                <i className="fa-solid fa-sun"></i> :
                <i className="fa-solid fa-moon"></i>}
        </button>

        {theme === 'light' ? <div>Light</div> : <div>Dark</div>}

    </div>)
}

export {ThemeSwitch};