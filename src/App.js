import Home from './pages/Home';
import Job from './pages/Job';
import { GlobalStyle, lightTheme, darkTheme } from './Theme';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useState } from 'react';
function App() {
    const [theme, setTheme] = useState(true);
    const themeToggler = () => {
        setTheme(!theme);
    };

    return (
        <Router>
            <ThemeProvider theme={theme ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Header themeToggler={themeToggler} />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/job" exact component={Job} />
                    </Switch>
                </main>
            </ThemeProvider>
        </Router>
    );
}

export default App;
