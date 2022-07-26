import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css'

export const Game = () => {
  const navigate = useNavigate()

  // const HandleGo = () => {
  //   console.log("handleBuyPortfolio clicked")
  //   navigate('/afterBuy')
  // }

  const handleEasy = () => {
    navigate('/easy')
  }

  const handleMedium = () => {
    navigate('/medium')
  }

  const handleHard = () => {
    navigate('/hard')
  }

  return (
    <>
      <div className="game-container">
        <button className='easyBtn' onClick={handleEasy}>Easy</button>
        <button className='mediumBtn' onClick={handleMedium}>Medium</button>
        <button className='hardBtn' onClick={handleHard}>Hard</button>
      </div>
    </>
  )
  // return (
  //   <div className='game'>
  //     <div className='heading'><h3>Portfolios...</h3></div>
  //     <div className="portfolio-box-container">
  //       <div className="portfolio-box">
  //         <h3>Portfolio 1</h3>
  //         <div className="portfolioDesc">
  //           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, illo!</p>
  //           <button className='goBtn' onClick={HandleGo}>Go</button>
  //         </div>
  //       </div>

  //     </div>
  //   </div>
  // )
}
