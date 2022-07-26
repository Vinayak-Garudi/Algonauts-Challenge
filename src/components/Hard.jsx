import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Hard = () => {
    const navigate = useNavigate()

    const handleHardGo = () => {
        navigate('/afterBuyH')
    }
    return (
        <>
            <div className='easy-container'>
                <div className='heading'><h3>Hard Portfolios...</h3></div>
                <div className="portfolio-box-container">
                    <div className="portfolio-box">
                        <h3>Portfolio 1</h3>
                        <div className="portfolioDesc">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, illo!</p>
                            <button className='goBtn' onClick={handleHardGo}>Go</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
