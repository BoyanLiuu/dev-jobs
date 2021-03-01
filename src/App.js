import Home from './pages/Home';
import Job from './pages/Job';
import { GlobalStyle, lightTheme, darkTheme } from './Theme';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/index';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { QueryClient, QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
function App() {
    //check localstorage and see if we store dark/light
    const themeFlag = () => {
        if (localStorage.mode) {
            return localStorage.mode === 'true';
        }
        return true;
    };
    const [theme, setTheme] = useState(themeFlag());
    const themeToggler = () => {
        setTheme(!theme);
    };
    // Create a client for React-query
    const queryClient = new QueryClient();


    // update localstorage
    useEffect(() => {
        localStorage.setItem('mode', theme);
    }, [theme]);

    return (
        <QueryClientProvider client = {queryClient}>
        <Router>
            <ThemeProvider theme={theme ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Header themeToggler={themeToggler} />
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/job/:id" exact component={Job} />
                    </Switch>
                </main>
            </ThemeProvider>
        </Router>
        <ReactQueryDevtools/>
        </QueryClientProvider>
    );
}

export default App;
