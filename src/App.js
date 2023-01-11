import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Update from './components/Update';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Navbar />
      <Welcome />
      <Routes>
        <Route path='/smartphones' element={<Home />}></Route>
        <Route path='/smartphones/add' element={<Add />}></Route>
        <Route path='/smartphones/update/:id' element={<Update />}></Route>
      </Routes>

    </>


  );
}

export default App;
