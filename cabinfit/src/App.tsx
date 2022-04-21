import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage/MainPage';
import { Provider } from 'react-redux'
import store from './store'
function App() {
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
