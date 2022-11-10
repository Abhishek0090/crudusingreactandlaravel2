 import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Create from './pages/Create';

function App() {
  return (
    <>
     <nav class="navbar navbar-expand-lg  bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Crud App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/create">Create</Link>
            </li> 
        </ul> 
      </div>
    </div>
    </nav>
    <div className='container'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;