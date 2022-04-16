import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import InformationPage from './pages/informationPage';
import IntroPage from './pages/IntroPage/IntroPage';
import MainPage from './pages/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      <div className="mainPage shadow rounded">
        <MainPage />
      </div>
     
    </div>
  );
}

export default App;
