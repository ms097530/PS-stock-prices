import { useParams } from "react-router-dom"

export default function Stock({ stocks })
{
    const { symbol } = useParams()
    const stock = stocks.find(item => item.symbol === symbol)
    // console.log(stock)

    let percentChange = (stock.change / (stock.lastPrice + stock.change) * 100).toFixed(2)
    let percentChangeStr = percentChange.toString()
    return (
        <div className="Stock">
            <h1>{stock.name}</h1>
            <h4>{stock.symbol}</h4>
            <p>Open: {stock.open}</p>
            <p>Last price: {stock.lastPrice}</p>
            <p>Low: {stock.low}</p>
            <p>High: {stock.high}</p>
            <p>Change: {stock.change.toFixed(2)} <span className={percentChange > 0 ? 'gain' : 'loss'}>({percentChangeStr}%)</span></p>
        </div>
    )
}
