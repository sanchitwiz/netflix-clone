import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'


function Home() {
  const navigate = useNavigate();

  const bannerMovie = () => {
    const videoKey = '80dqOwAOhbo';
    navigate(`/player/${videoKey}`);
  };

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos obcaecati quasi animi nostrum dolore nesciunt enim deserunt minima ratione molestias earum reprehenderit, architecto optio aliquid. Excepturi veniam aliquam harum neque.</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" onClick={bannerMovie}/>Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <div className="title-cards">
            <TitleCards title={"Popular on Netflix"} category={'now_playing'}/>
          </div>
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movie"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcomings"} category={"upcoming"}/>
        <TitleCards title={"Top Picks for You"} category={"top_rated"}/>
      </div>
        <Footer />
    </div>
  )
}

export default Home
