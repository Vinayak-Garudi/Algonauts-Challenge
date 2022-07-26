import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Medium = () => {
    const navigate = useNavigate()

    const handleMediumGo = () => {
        navigate('/afterBuyM')
    }
    return (
        <>
            <div className='easy-container'>
                <div className='heading'><h3>Medium Portfolios...</h3></div>
                <div className="portfolio-box-container">
                    <div className="portfolio-box">
                        <h3>Portfolio 1</h3>
                        <div className="portfolioDesc">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, illo!</p>
                            <button className='goBtn' onClick={handleMediumGo}>Go</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
