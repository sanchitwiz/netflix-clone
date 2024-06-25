import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {

  const {id} = useParams();
  const navigate = useNavigate();

  const [info , setInfo] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGQxZjQwOTU4MjhjYjYwZTI5ZDc5YTBlNzBlZGYzOCIsIm5iZiI6MTcxOTMxOTA2Mi41MTQ0MDcsInN1YiI6IjY2N2FiNzRhOThmNTY1NDljZThiZTRmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FnN7ivwfBkFXeW-HHk40cnLkQvxSsqfWlaTYcNU-Nhg'
    }
  };
  
  useEffect( ()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setInfo(response.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back Arrow" onClick={ ()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${info.key}`} frameBorder="0" title='trailer' allowFullScreen></iframe>
      <div className="player-info">
        <p>Published On: {info.published_at.slice(0,10)}</p>
        <p>{info.name}</p>
        <p>Type: {info.type}</p>
      </div>
    </div>
  )
}

export default Player

