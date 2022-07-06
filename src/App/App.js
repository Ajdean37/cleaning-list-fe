import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CleaningListsView from '../views/CleaningListsView/CleaningListsView';
import HomeView from '../views/HomeView/HomeView';
import NoMatchView from '../views/NoMatchView/NoMatchView';
import './App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<NoMatchView />} />
        <Route path="/cleaning-lists" element={<CleaningListsView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
