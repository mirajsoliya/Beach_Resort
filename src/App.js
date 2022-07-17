import React from "react";
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Booking from './pages/Booking'
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter >
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/booking" component={Booking} />
        <Route component={Error} />

      </Switch>

    </BrowserRouter >

  )
} 

export default App;
