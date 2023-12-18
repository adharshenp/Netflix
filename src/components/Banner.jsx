import React, { useEffect, useState } from 'react'
import './banner.css'
import instance from './instance';
 function Banner({fetchUrl}) {
    // console.log(fetchUrl);
    const [movie,setMovie]=useState()
    const base_url = "https://image.tmdb.org/t/p/original/";


    const fetchData=async()=>{
       const {data}= await instance.get(fetchUrl)
    //    console.log(data.results);
    
          setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }
      console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}}>

        <div className='banner-content'>
            <h1>{movie?.name}</h1>
            <button className='btn btn-danger'>Play <i class="fa-solid fa-caret-right"></i></button>
            <button className='btn btn-outline-light ms-3'>More Info <i class="fa-solid fa-caret-down"></i></button>
            <h2>{movie?.overview?.slice(0,200)}...</h2>
        </div>
    </div>
  )
}
export default Banner