import { useEffect, useReducer } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { reducer, initialState } from './store/store';
import {countriesAPI} from './api/api'
import Home from './pages/Home/Home';
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state.countries );
  useEffect(() => {
    countriesAPI.getAll(dispatch)
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home countries={state.countries}/> }/>
      </Routes>
    </div>
  );
}

export default App;
