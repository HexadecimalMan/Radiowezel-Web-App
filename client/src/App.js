import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './Main';
import Navbar1 from './components/Navbar'
import Navbar2 from './dashboard/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom';

function App() {
  if (window.location.pathname == "/informacje" || window.location.pathname == "/login") {
    return (<div className="App"><Main /><Footer /></div>)
  }
  else {
    return (
      <div className="App">
        <Routes>
          <Route path="/:any" element={<Navbar1 />}></Route>
          <Route path="/dashboard/:any" element={<Navbar2 />}></Route>
        </Routes>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;