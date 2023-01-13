import { Route } from 'react-router-dom';
import './App.css';
import { useReducer } from 'react';
import Navbar from './components/Navbar';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Add from './components/Add';
import Update from './components/Update';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import { createContext } from 'react';

import { initialState, reducer } from './reducer/UseReducer';

//1: ContextAPi
export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/logout' element={<Logout />}></Route>
      <Route path='/smartphones' element={<Home />}></Route>
      <Route path='/smartphones/add' element={<Add />}></Route>
      <Route path='/smartphones/update/:id' element={<Update />}></Route>
    </Routes>
  )
}

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>

        <Navbar />
        {/* <Welcome /> */}
        <Routing />

      </UserContext.Provider>
    </>


  );
}

export default App;
