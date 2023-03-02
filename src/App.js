import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import PageCategory from './Pages/Category/PageCategory';
import PageListCategory from './Pages/AllCategory/PageListCategory';
import PageDetails from './Pages/Details/PageDetails';
import PageHome from './Pages/Home/PageHome';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <PageHome/> }/>
        <Route path="/category/:type" element={ <PageCategory/> }/>
        <Route path="/category/" element={ <PageListCategory/> }/>
        <Route path="/games/:gameId" element={ <PageDetails/> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
