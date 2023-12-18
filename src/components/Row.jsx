import React, { useEffect, useState } from 'react'
import instance from './instance';
import './row.css';
function Row({title,fetchUrl,isPoster}) {
    console.log(fetchUrl);

    const [allMovie,setAllMovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";


    const fetchData=async()=>{
      const {data} =await instance.get(fetchUrl)
      // const {results}=data
      // console.log(results);
      setAllMovie(data.results)
    }
    //console.log(allMovie);
      

useEffect(()=>{
  fetchData();
}, [])


  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="movie-row">
       {
        allMovie?.map(item=>(
          <img className='movie' src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
        ))
       }
          
      </div>
    </div>

  )
}

export default Row