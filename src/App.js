import Home from './pages/Home';
import Job from './pages/Job';
import { GlobalStyle, lightTheme, darkTheme } from './Theme';
import { ThemeProvider } from 'styled-components';
import { Header, Footer } from './components/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useState } from 'react';
function App() {
    const [theme, setTheme] = useState(true);
    const themeToggler = () => {
        setTheme(!theme);
        const bgWave = document.querySelector('.wave');
        //TODO
        bgWave.classList.toggle('active');
        console.log(bgWave);
    };

    return (
        <Router>
            <ThemeProvider theme={theme ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Header themeToggler={themeToggler} />
                <span className="wave"></span>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/job" exact component={Job} />
                    </Switch>
                </main>
                <Footer />
            </ThemeProvider>
        </Router>
    );
}

export default App;
