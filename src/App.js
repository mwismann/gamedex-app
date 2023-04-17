import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Categories from './routes/Categories';
import HallOfFame from './pages/HallOfFame';
import JustReleased from './pages/JustReleased';
import Popular from './pages/Popular';
import MostReviewed from './pages/MostReviewed';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/hof" element={<HallOfFame />} />
        <Route path="/just_released" element={<JustReleased />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/most_reviewed" element={<MostReviewed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
