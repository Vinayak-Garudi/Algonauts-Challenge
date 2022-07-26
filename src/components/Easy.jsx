import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Easy = () => {
    const navigate = useNavigate()

    const handleEasyGo = () => {
        navigate('/afterBuy')
    }
    return (
        <>
            <div className='easy-container'>
                <div className='heading'><h3>Easy Portfolios...</h3></div>
                <div className="portfolio-box-container">
                    <div className="portfolio-box">
                        <h3>Portfolio 1</h3>
                        <div className="portfolioDesc">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, illo!</p>
                            <button className='goBtn' onClick={handleEasyGo}>Go</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
