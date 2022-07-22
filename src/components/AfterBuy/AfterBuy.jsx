import React from 'react'
import './AfterBuy.css'

export const AfterBuy = () => {
    return (
        <div className='AfterBuy'>
            <div>
                <h3>Day</h3>
                <h4 className='coins'>Coins</h4>
            </div>
            <div className="stocks">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Stocks</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Gross Amount</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Stocks 1</th>
                            <td>price 1</td>
                            <td>Quantity 1</td>
                            <td>Value 1</td>
                            <td><button>Buy</button></td>
                            <td><button>Sell</button></td>
                            <td><button>Hold</button></td>
                        </tr>
                        <tr>
                            <th scope="row">Stocks 2</th>
                            <td>price 2</td>
                            <td>Quantity 2</td>
                            <td>Value 2</td>
                            <td><button>Buy</button></td>
                            <td><button>Sell</button></td>
                            <td><button>Hold</button></td>
                        </tr>
                        <tr>
                            <th scope="row">Stocks 3</th>
                            <td>price 3</td>
                            <td>Quantity 3</td>
                            <td>Value 3</td>
                            <td><button>Buy</button></td>
                            <td><button>Sell</button></td>
                            <td><button>Hold</button></td>
                        </tr>
                    </tbody>
                </table>
                <h6>GA: Gross Amount</h6>
                <h6>GA Algo's: Gross Amount of algo</h6>
                <h6>GA gain/loss: Percent value</h6>
                <h6>Overall gain/loss: percent value</h6>
                <button>Next</button>
            </div>
        </div>
    )
}
