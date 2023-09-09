import { Link } from "react-router-dom";

export default function NavBar(props){
    return (
        <nav style={{"display":props.nav}}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/create'>Create</Link></li>
                <li><Link to={`/${props.user}`}>View</Link></li>
                <li><Link to='/edit'>Edit</Link></li>
            </ul>
        </nav>
    )
}