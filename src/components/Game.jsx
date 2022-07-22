import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Game.css'

export const Game = () => {
  const navigate = useNavigate()

  const HandleBuyPortfolio = () => {
    console.log("handleBuyPortfolio clicked")
    navigate('/afterBuy')
  }
  return (
    <div className='game'>
      <h3>Portfolios...</h3>
      <div className="carousel-inner">
        <div className="carousel-item active">
          Portfolio 1
          <button onClick={HandleBuyPortfolio}>Buy</button>
        </div>

      </div>
    </div>
  )
}
