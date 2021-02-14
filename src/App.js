import Home from './pages/Home';
import Job from './pages/Job';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/job" exact component={Job} />
            </Switch>
        </Router>
    );
}

export default App;
