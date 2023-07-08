import logo from './logo.svg';
import {useEffect} from 'react';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './Screens/Home';
import Donate from './Screens/Donate';
import VideoUpload from './Components/VideoUpload';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import { Video } from './Screens/Video';
import VideoViewer from './Components/VideoViewer';
function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/upload' element={<VideoUpload />} />
        <Route exact path='/donate' element={<Donate />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/createuser' element={<Signup/>} />
        <Route exact path='/video-list' element={<Video />} />
        <Route exact path='/video-viewer' element={<VideoViewer />} />
      </Routes>
    <Footer />
    </Router>
    </>
  );
}

export default App;
