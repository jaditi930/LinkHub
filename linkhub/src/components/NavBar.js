import { Link } from "react-router-dom";
import './Css/NavBar.css'
export default function NavBar(props){
    return (
        <nav style={{"display":props.nav}}>
            <ul className="nav_ul">
                <li className="nav_li"><Link to='/'>Home</Link></li>
                <li className="nav_li"><Link to='/create'>Create</Link></li>
                <li className="nav_li"><Link to={`/${props.user}`}>View</Link></li>
                <li className="nav_li"><Link to='/edit'>Edit</Link></li>
                <li className="nav_li right"><Link to='/logout'>Logout</Link></li>

            </ul>
        </nav>
    )
}