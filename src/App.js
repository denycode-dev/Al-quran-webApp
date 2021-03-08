import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Import Components
import HomeScreen from './Views/HomeScreen/Home'
import DetailSurah from './Views/DetailSurah/DetailSurah';
import NotFound from './Views/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch className="font-sans subpixel-antialiased">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/:surah" component={DetailSurah} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
