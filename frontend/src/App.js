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
import Edit from './pages/Edit';

function App() {
  return (
    <>
     <nav className="navbar navbar-expand-lg  bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" to="/">Crud App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">Create</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/edit">Edit</Link>
            </li> 
        </ul> 
      </div>
    </div>
    </nav>
    <div className='container'>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/edit' element={<Edit/>}/>
    </Routes>
    </div>
    </>
  );
}

export default App;