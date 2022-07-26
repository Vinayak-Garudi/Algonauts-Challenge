import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios'
import '../AfterBuy/AfterBuy.css'
import HDFC from '../HDFCBANK.json';
import Relaince from '../relaience.json';
import Vedanta from '../VEDANTA.json'

export const AfterBuyM = () => {

    const [priceID, setPriceID] = useState(0)
    const [day, setDay] = useState(1)
    const [disable, setDisable] = useState(false);


    // to handle next day
    const handleNextDay = () => {
        // we can take any one stock of that particular year
        console.log(HDFC.length)
        if (day < HDFC.length) {
            setDay(day + 1)
            for (let day = 1; day < HDFC.length; day++) {
                setPriceID(priceID + 1)
                // console.log("price id: ", priceID)
            }
        }
        else {
            setDisable(true)
        }
    }


    // total stock value
    const [quantityOwned1, setQuantityOwned1] = useState(0)
    const [quantityOwned2, setQuantityOwned2] = useState(0)
    const [quantityOwned3, setQuantityOwned3] = useState(0)

    let stockValue1 = HDFC[priceID].price * quantityOwned1
    let stockValue2 = Relaince[priceID].price * quantityOwned2
    let stockValue3 = Vedanta[priceID].price * quantityOwned3

    // current stock value
    const [stockQuantity1, setStockQuantity1] = useState(0)
    const [stockQuantity2, setStockQuantity2] = useState(0)
    const [stockQuantity3, setStockQuantity3] = useState(0)

    let currentStockValue1 = HDFC[priceID].price * stockQuantity1
    let currentStockValue2 = Relaince[priceID].price * stockQuantity2
    let currentStockValue3 = Vedanta[priceID].price * stockQuantity3



    // For Gross Amount(GA)
    const GA = stockValue1 + stockValue2 + stockValue3

    // setting coins
    const [coins, setCoins] = useState(100000)

    // for buying
    const handleBuy1 = () => {
        if (currentStockValue1 <= coins) {
            setQuantityOwned1(quantityOwned1 + stockQuantity1)
            setCoins(() => coins - currentStockValue1)
        }
        // document.getElementById("stock_quantity_1").value = 0
    }

    const handleBuy2 = () => {
        console.log(currentStockValue2)
        if (currentStockValue2 <= coins) {
            console.log("inside condn")
            setQuantityOwned2(quantityOwned2 + stockQuantity2)
            setCoins(() => coins - currentStockValue2)
        }
    }

    const handleBuy3 = () => {
        if (currentStockValue3 <= coins) {
            setQuantityOwned3(quantityOwned3 + stockQuantity3)
            setCoins(() => coins - currentStockValue3)
        }
    }

    // for selling
    const handleSell1 = () => {
        if (quantityOwned1 >= stockQuantity1) {
            setCoins(() => coins + currentStockValue1)
            setQuantityOwned1(quantityOwned1 - stockQuantity1)
            // document.getElementById("stock_quantity_1").value = 0
        }
    }

    const handleSell2 = () => {
        if (quantityOwned2 >= stockQuantity2) {
            setCoins(() => coins + currentStockValue2)
            setQuantityOwned2(quantityOwned2 - stockQuantity2)
        }
    }

    const handleSell3 = () => {
        if (quantityOwned3 >= stockQuantity3) {
            setCoins(() => coins + currentStockValue3)
            setQuantityOwned3(quantityOwned3 - stockQuantity3)
        }
    }


    // api integration
    // const { id } = useParams()

    // const url = `https://www.algonautsadvisory.com/api/v1/calculator?category=ShortTerm&index_or_stock=index&index=GamePortfolio&stock=&from_date=2020-01-01&to_date=2021-01-01&invest=100000&sip=false`
    // const [stock, setStock] = useState(null)

    // useEffect(() => {
    //     axios.get(url).then(
    //         res => {
    //             setStock(res.data)
    //         }
    //     )
    // }, [url])

    // if (stock) {
    // api integration complete
    return (
        <>
            <div className='AfterBuy'>
                <div className="stocks">
                    <div>
                        <h3 className='day'>Day: {day}</h3>
                        <h4 className='coins'>Coins: {coins}</h4>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Stocks</th>
                                <th scope="col">Price</th>
                                <th scope="col">Quantity</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Qnty Owned</th>
                                <th scope="col">Gross Amount</th>
                                {/* <th scope="col"></th> */}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Stock 1</th>
                                <td>{HDFC[priceID].price}</td>
                                <td><input type="number" className='qntyInput' id="stock_quantity_1" placeholder='Qty...' onChange={(e) => setStockQuantity1(Number(e.target.value))} /></td>
                                <td><button className='buttons' onClick={handleBuy1}>Buy</button></td>
                                <td><button className='buttons' onClick={handleSell1}>Sell</button></td>
                                <td>{quantityOwned1}</td>
                                <td>{stockValue1}</td>
                                {/* <td><button>Hold</button></td> */}
                            </tr>
                            <tr>
                                <th scope="row">Stock 2</th>
                                <td>{Relaince[priceID].price}</td>
                                <td><input type="number" className='qntyInput' placeholder='Qty...' onChange={(e) => setStockQuantity2(Number(e.target.value))} /></td>
                                <td><button className='buttons' onClick={handleBuy2}>Buy</button></td>
                                <td><button className='buttons' onClick={handleSell2}>Sell</button></td>
                                <td>{quantityOwned2}</td>
                                <td>{stockValue2}</td>
                                {/* <td><button>Hold</button></td> */}
                            </tr>
                            <tr>
                                <th scope="row">Stock 3</th>
                                <td>{Vedanta[priceID].price}</td>
                                <td><input type="number" className='qntyInput' placeholder='Qty...' onChange={(e) => setStockQuantity3(Number(e.target.value))} /></td>
                                <td><button className='buttons' onClick={handleBuy3}>Buy</button></td>
                                <td><button className='buttons' onClick={handleSell3}>Sell</button></td>
                                <td>{quantityOwned3}</td>
                                <td>{stockValue3}</td>
                                {/* <td><button>Hold</button></td> */}
                            </tr>
                            <tr>
                                <th scope="row">Stock 4</th>
                                <td>{Vedanta[priceID].price}</td>
                                <td><input type="number" className='qntyInput' placeholder='Qty...' onChange={(e) => setStockQuantity3(Number(e.target.value))} /></td>
                                <td><button className='buttons' onClick={handleBuy3}>Buy</button></td>
                                <td><button className='buttons' onClick={handleSell3}>Sell</button></td>
                                <td>{quantityOwned3}</td>
                                <td>{stockValue3}</td>
                                {/* <td><button>Hold</button></td> */}
                            </tr>
                            <tr>
                                <th scope="row">Stock 5</th>
                                <td>{Vedanta[priceID].price}</td>
                                <td><input type="number" className='qntyInput' placeholder='Qty...' onChange={(e) => setStockQuantity3(Number(e.target.value))} /></td>
                                <td><button className='buttons' onClick={handleBuy3}>Buy</button></td>
                                <td><button className='buttons' onClick={handleSell3}>Sell</button></td>
                                <td>{quantityOwned3}</td>
                                <td>{stockValue3}</td>
                                {/* <td><button>Hold</button></td> */}
                            </tr>
                        </tbody>
                    </table>
                    {/* <div className="userCard">
                    <h6 className='GA'>Gross Amount: {GA}</h6>
                    <h6 className='algoGA'>Algo's Gross Amount: Gross Amount of algo</h6>
                    <h6 className='differenceGA'>Difference: </h6>
                </div> */}
                    <button className='buttons' onClick={handleNextDay} disabled={disable}>Next</button>
                </div>
            </div>
            <div className="userCard">
                <h6 className='GA'>Gross Amount: {GA}</h6>
                <h6 className='algoGA'>Algo's Gross Amount: Gross Amount of algo</h6>
                <h6 className='differenceGA'>Difference: </h6>
            </div>
        </>
    )
}
