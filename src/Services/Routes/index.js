import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Import Components
import HomeScreen from '../../Components/Organisms/HomeScreen/Home'
import DetailSurah from '../../Components/Organisms/DetailSurah/DetailSurah'
import NotFound from '../../Components/Organisms/NotFound/NotFound'
import Tafsir from '../../Components/Organisms/TafsirView/Tafsir'
import AyatTafsir from '../../Components/Organisms/AyatTafsir/AyatTafsir'

function App() {
  return (
    <Router>
      <Switch className="font-sans subpixel-antialiased">
        <Route path="/" component={HomeScreen} exact />
        <Route path="/:surah" component={DetailSurah} exact />
        <Route path="/:surah/:tafsir" component={Tafsir} exact />
        <Route path="/:surah/:tafsir/:ayat" component={AyatTafsir} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
