import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Movies from './components/movies';

function App() {

  const [movies, setMovies] = useState([])
  const [toggler, setToggler] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    const data = {
      movieName : e.target['movieName'].value
    }
    axios.post(`${process.env.REACT_APP_BE_URL}/movies`, data)
    .then(res => setToggler(oldState => !oldState))
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BE_URL}/movies`)
    .then(res => setMovies(res.data.movies))
    .catch(err => console.log(err))
  }, [toggler])

  return (
    <div className="App">
      <header className="App-header">

        <h2>Movies App</h2>
        <Router>
        <Link to='/movies'>Movies</Link>
        <Link to='/about'>About us</Link>
          <Routes>
            <Route path='/' element={<Movies movies={movies} submitHandler={submitHandler}/>}/>
            <Route path='/movies' element={<Movies movies={movies} submitHandler={submitHandler}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/*' element={<Movies movies={movies} submitHandler={submitHandler}/>}/>

          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
