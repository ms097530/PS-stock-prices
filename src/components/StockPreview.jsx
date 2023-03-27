import { useNavigate } from "react-router-dom"

export default function StockPreview({ stock })
{
    const navigate = useNavigate()

    const handleClick = () =>
    {
        navigate(`/stocks/${stock.symbol}`)
    }

    let percentChange = (stock.change / (stock.lastPrice + stock.change) * 100).toFixed(2)
    let percentChangeStr = percentChange.toString()

    return (
        <tr className='StockPreview' onClick={handleClick}>
            <td>
                {stock.name}
            </td>
            <td>
                {stock.lastPrice.toFixed(2)}
            </td>
            <td>
                {stock.change.toFixed(2)} <span className={percentChange > 0 ? 'gain' : 'loss'}>({percentChangeStr}%)</span>
            </td>
        </tr>
    )
}
