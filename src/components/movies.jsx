import React from 'react'

function Movies({movies, submitHandler}) {
    return (
     <>
             <form onSubmit={submitHandler}>
          <input type="text" name='movieName' placeholder='Please enter the movie name'/>
          <input type='submit' value="Add Movie" />
        </form>
        <br />
        <h3>List of Stored Movies</h3>
        {movies.map(item => <div>{item.movieName}</div>)}
    </>  
    )
}

export default Movies
