import { useState, useEffect } from 'react'
import data from '../data/stock-data'
import StockPreview from './StockPreview'

export default function Dashboard()
{
    const [stocks, setStocks] = useState(null)

    useEffect(() =>
    {
        // simulate loading
        setTimeout(() => setStocks(data), 2000)
    }, [])

    const loaded = () =>
    {
        return (
            <div className="Dashboard">
                <h1>Most Active Stocks</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Company Name</th>
                            <th>Price</th>
                            <th>Change</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            stocks.map(stock => (
                                <StockPreview stock={stock} key={stock.symbol} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

    const loading = () =>
    {
        return <h2>Loading...</h2>
    }

    return stocks ? loaded() : loading()
}
