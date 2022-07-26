import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CleaningListItemView from '../views/CleaningListItemView/CleaningListItemView';
import CleaningListsView from '../views/CleaningListsView/CleaningListsView';
import HomeView from '../views/HomeView/HomeView';
import NoMatchView from '../views/NoMatchView/NoMatchView';
import './App.css';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/cleaning-lists" element={<CleaningListsView />} />
        <Route path="/cleaning-lists/:id" element={<CleaningListItemView />} />
        <Route path="*" element={<NoMatchView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
