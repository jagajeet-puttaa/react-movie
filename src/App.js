import React from 'react';

// Routing 

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components 

import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

// Styles 

import { GlobalStyle } from './GlobalStyle';


const App = () => (

  // Enclosing the entire App in the router
  <Router>
      
      {/* Here the header is common for all the pages so it is not inside the Routes */}
      <Header/>
      <Routes>
        {/* Path / denotes Home  */}
        <Route path='/' element={<Home/>}/>
        <Route path='/:movieId' element={<Movie/>}/>
        {/* /* means all for those routes which doesnt exist */}
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <GlobalStyle/>
  </Router>

);

export default App;
