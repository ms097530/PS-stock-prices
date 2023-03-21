import { Link } from "react-router-dom"

export default function StockPreview({ stock })
{
    return (
        <tr>
            <td>
                {/* <Link to={`/stocks/${stock.symbol}`}> */}
                {stock.name}
                {/* </Link> */}
            </td>
            <td>
                {/* <Link to={`/stocks/${stock.symbol}`}> */}
                {stock.lastPrice}
                {/* </Link> */}
            </td>
            <td>
                {/* <Link to={`/stocks/${stock.symbol}`}> */}
                {stock.change}
                {/* </Link> */}
            </td>
        </tr>
    )
}
