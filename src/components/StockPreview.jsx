import { useNavigate } from "react-router-dom"

export default function StockPreview({ stock })
{
    const navigate = useNavigate()

    const handleClick = () =>
    {
        navigate(`/stocks/${stock.symbol}`)
    }
    return (
        <tr className='StockPreview' onClick={handleClick}>
            <td>
                {stock.name}
            </td>
            <td>
                {stock.lastPrice}
            </td>
            <td>
                {stock.change}
            </td>
        </tr>
    )
}
