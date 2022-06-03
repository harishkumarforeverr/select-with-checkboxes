
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Redux/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import HomePage from "./ReactInterviewTask/HomePage/HomePage";
import LoginPage from './ReactInterviewTask/LoginPage/LoginPage';


// main store 
// const store = createStore(rootReducer) 

// for the users list Api call --> for async api calls we use thunk
const Middleware = [thunk]

const store = createStore(rootReducer,
  composeWithDevTools(applyMiddleware(...Middleware))
)

function App() {
  return (
    // <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='/login' element={ <LoginPage/>}/>
        </Routes>
      </Router>
    // </div>
  );
}

export default App;
