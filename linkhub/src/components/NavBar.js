import { Link } from "react-router-dom";
import './Css/NavBar.css'
export default function NavBar(props){
    return (
        <nav style={{"display":props.nav}}>
            <ul class="nav_ul">
                <li class="nav_li"><Link to='/'>Home</Link></li>
                <li class="nav_li"><Link to='/create'>Create</Link></li>
                <li class="nav_li"><Link to={`/${props.user}`}>View</Link></li>
                <li class="nav_li"><Link to='/edit'>Edit</Link></li>
                <li class="nav_li right"><Link to='/logout'>Logout</Link></li>

            </ul>
        </nav>
    )
}