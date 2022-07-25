import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios'
import './AfterBuy.css'
import HDFC from '../HDFCBANK.json';
import Relaince from '../relaience.json';
import Vedanta from '../VEDANTA.json'

export const AfterBuy = () => {

    const [priceID, setPriceID] = useState(0)
    const [quantityOwned, setQuantityOwned] = useState(0)
    console.log("initial price id: ", priceID)

    // for setting day
    const [day, setDay] = useState(1)
    const [disable, setDisable] = useState(false);
    console.log("day", day)
    // to handle next day
    const handleNextDay = () => {
        if (day < 252) {
            setDay(day + 1)
            for (let day = 1; day < 252; day++) {
                setPriceID(priceID + 1)
                console.log("price id: ", priceID)
            }
        }
        else {
            setDisable(true)
        }
    }


    // Setting Stock price one by one from the data by using ID og the price
    // const [priceID, setPriceID] = useState(599059)
    // for (let day = 1; priceID < 252; day++) {
    //     setPriceID(priceID+1)
    // }

    // 599059   599310
    // let text = "";

    // for (let i = 0; i < 7; i++) {
    //     text += "The number is " + i + "<br>";
    // }


    // for price quantity and amount
    // let stockPrice1 = 100
    const [stockQuantity1, setStockQuantity1] = useState(0)
    let stockValue1 = HDFC[priceID].price * stockQuantity1

    // let stockPrice2 = 10
    const [stockQuantity2, setStockQuantity2] = useState(0)
    let stockValue2 = Relaince[priceID].price * stockQuantity2

    // let stockPrice3 = 10
    const [stockQuantity3, setStockQuantity3] = useState(0)
    let stockValue3 = Vedanta[priceID].price * stockQuantity3

    // For Gross Amount(GA)
    const GA = stockValue1 + stockValue2 + stockValue3



    // setting coins
    const [coins, setCoins] = useState(100000)

    // for buying
    const handleBuy1 = () => {
        setQuantityOwned(quantityOwned + stockQuantity1)
        setCoins(() => coins - stockValue1)
        // document.getElementById("stock_quantity_1").value = 0
    }

    const handleBuy2 = () => {
        setQuantityOwned(quantityOwned + stockQuantity2)
        setCoins(() => coins - stockValue2)
    }

    const handleBuy3 = () => {
        setQuantityOwned(quantityOwned + stockQuantity3)
        setCoins(() => coins - stockValue3)
    }

    // for selling
    const handleSell1 = () => {
        // setQuantityOwned(11)
        // setStockQuantity1(8)
        // console.log("Quantity owned",quantityOwned)
        // console.log("stockQuantity1", stockQuantity1)
        // setQuantityOwned(quantityOwned - stockQuantity1)
        // console.log("Quantity owned",quantityOwned)
        // console.log("stockQuantity1", stockQuantity1)
        // if (quantityOwned < stockQuantity1) {
        //     setCoins(() => coins + stockValue1)
        //     setQuantityOwned(quantityOwned - stockQuantity1)
        //     console.log("Quantity owned",quantityOwned)
        //     console.log("stockQuantity1", stockQuantity1)
        //     document.getElementById("stock_quantity_1").value = 0
        // }
        setCoins(() => coins + stockValue1)
    }

    const handleSell2 = () => {
        setCoins(() => coins + stockValue2)
    }

    const handleSell3 = () => {
        setCoins(() => coins + stockValue3)
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
                            <th scope="col">Quantity Owned</th>
                            <th scope="col">Gross Amount</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Stock 1</th>
                            <td>{HDFC[priceID].price}</td>
                            <td><input type="number" id="stock_quantity_1" placeholder='Qty...' onChange={(e) => setStockQuantity1(e.target.value)} /></td>
                            <td>{quantityOwned}</td>
                            <td>{stockValue1}</td>
                            <td><button className='buttons' onClick={handleBuy1}>Buy</button></td>
                            <td><button className='buttons' onClick={handleSell1}>Sell</button></td>
                            {/* <td><button>Hold</button></td> */}
                        </tr>
                        <tr>
                            <th scope="row">Stock 2</th>
                            <td>{Relaince[priceID].price}</td>
                            <td><input type="number" placeholder='Qty...' onChange={(e) => setStockQuantity2(e.target.value)} /></td>
                            <td>Qty 2</td>
                            <td>{stockValue2}</td>
                            <td><button className='buttons' onClick={handleBuy2}>Buy</button></td>
                            <td><button className='buttons' onClick={handleSell2}>Sell</button></td>
                            {/* <td><button>Hold</button></td> */}
                        </tr>
                        <tr>
                            <th scope="row">Stock 3</th>
                            <td>{Vedanta[priceID].price}</td>
                            <td><input type="number" placeholder='Qty...' onChange={(e) => setStockQuantity3(e.target.value)} /></td>
                            <td>Qty 3</td>
                            <td>{stockValue3}</td>
                            <td><button className='buttons' onClick={handleBuy3}>Buy</button></td>
                            <td><button className='buttons' onClick={handleSell3}>Sell</button></td>
                            {/* <td><button>Hold</button></td> */}
                        </tr>
                    </tbody>
                </table>
                <h6 className='GA'>GA: {GA}</h6>
                <h6 className='algoGA'>GA Algo's: Gross Amount of algo</h6>
                {/* <h6>GA gain/loss: Percent value</h6> */}
                {/* <h6>Overall gain/loss: percent value</h6> */}
                <button className='buttons' onClick={handleNextDay} disabled={disable}>Next</button>
            </div>
        </div>
    )
}
