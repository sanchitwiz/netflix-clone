import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


function TitleCards({title, category}) {

  const[apiData , setAPIData] = useState([]);

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGQxZjQwOTU4MjhjYjYwZTI5ZDc5YTBlNzBlZGYzOCIsIm5iZiI6MTcxOTMxOTA2Mi41MTQ0MDcsInN1YiI6IjY2N2FiNzRhOThmNTY1NDljZThiZTRmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FnN7ivwfBkFXeW-HHk40cnLkQvxSsqfWlaTYcNU-Nhg'
    }
  };
  
  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect( ()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setAPIData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])
  return (
    <div className='titlecards'>
      <h2>{title}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map( (card,index)=>{
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards
