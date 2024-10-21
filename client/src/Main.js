import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.js'
import SongRequests from './pages/SongRequests.js'
import Shoutouts from './pages/Shoutouts.js'
import About from './pages/About.js'
import News from './pages/News.js'
import Schedule from './pages/Schedule.js'
import Carousel from './pages/Carousel.js'

import Login from './dashboard/Login.js'
import Dashboard_Home from './dashboard/Home.js'
import Dashboard_SongRequests from './dashboard/SongRequests.js'
import Dashboard_Shoutouts from './dashboard/Shoutouts.js'
import Dashboard_Schedule from './dashboard/Schedule.js'
import Dashboard_About from './dashboard/About.js'
import Dashboard_News from './dashboard/News.js'
import Dashboard_Settings from './dashboard/Settings.js'

const Main = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/zglos-piosenke' element={<SongRequests/>}></Route>
      <Route exact path='/dedykacje' element={<Shoutouts/>}></Route>
      <Route exact path='/o-nas' element={<About/>}></Route>
      <Route exact path='/aktualnosci' element={<News/>}></Route>
      <Route exact path='/ramowka' element={<Schedule/>}></Route>
      <Route exact path='/informacje' element={<Carousel/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/dashboard/' element={<Dashboard_Home/>}></Route>
      <Route exact path='/dashboard/song-requests' element={<Dashboard_SongRequests/>}></Route>
      <Route exact path='/dashboard/shoutouts' element={<Dashboard_Shoutouts/>}></Route>
      <Route exact path='/dashboard/schedule' element={<Dashboard_Schedule/>}></Route>
      <Route exact path='/dashboard/about' element={<Dashboard_About/>}></Route>
      <Route exact path='/dashboard/news' element={<Dashboard_News/>}></Route>
      <Route exact path='/dashboard/settings' element={<Dashboard_Settings/>}></Route>
    </Routes>
  );
}

export default Main;
