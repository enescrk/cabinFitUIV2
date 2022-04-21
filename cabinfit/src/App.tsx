import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage';
import { Provider } from 'react-redux'
import store from './store'
import { useEffect } from 'react';
function App() {

  useEffect(() => {

    //TODO: Firebase den alınan renk değerleri koyulacak.
    const brandColor = {};
    if (brandColor != {} && false) {
      debugger
      const root = document.documentElement;
      root.style.setProperty('--primary-color', brandColor ? 'white' : 'red');
      root.style.setProperty('--secondary-color', brandColor ? 'white' : 'black');
      root.style.setProperty('--third-color', brandColor ? 'white' : 'black');
    }

  });
  return (
    <Provider store={store}>
      <div className="App">
        <div className="mainPage shadow rounded">
          <MainPage />
        </div>

      </div>
    </Provider>
  );
}

export default App;
