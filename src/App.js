import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './pages';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import Home from './pages';
import SigninPage from './pages/signin';


function App() {
  return (
    <Router>
      <Home></Home>
      <SigninPage></SigninPage>
      {/* <Routes>
        <Route path='/' component={Home} exact ></Route>
        <Route path='/signin' component={SigninPage} exact ></Route>
      </Routes> */}
    </Router>
    
   
  );
}

export default App;
