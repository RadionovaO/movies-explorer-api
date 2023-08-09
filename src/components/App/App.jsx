import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import ErrorPage from '../ErrorPage/ErrorPage';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/'
          element={<Main />}
        />
        <Route path='/movies'
          element={<Movies />}
        />
        <Route path='/saved-movies'
          element={<SavedMovies />}
        />
        <Route path='/signup'
          element={<Register />}
        />
        <Route path='/signin'
          element={<Login />}
        />
        <Route path='/profile'
          element={<Profile />}
        />
        <Route path='/404'
          element={<ErrorPage />}
        />
      </Routes>
     
    </div>
  );
};

export default App;
