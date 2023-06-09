import { NavLink } from "react-router-dom"

export default function Navbar()
{
    return (
        <nav className="Navbar">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/stocks'>Stocks</NavLink>
        </nav>
    )
}
