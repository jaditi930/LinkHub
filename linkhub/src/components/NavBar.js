import { Link } from "react-router-dom";
import '../Css/NavBar.css'
import { useNavigate } from "react-router-dom";

export default function NavBar(props){
    const navigate=useNavigate();
    function logOut(){
        props.setToken("")
        localStorage.removeItem("access_token")
        localStorage.removeItem("username")
        navigate("/")
      }

    return (
        <nav>
            <ul className="nav_ul">
                <div>
                <li className="nav_li" style={{fontWeight:"600",letterSpacing:"2px"}}><Link to='/'>LINKHUB</Link></li>
                </div>
                {localStorage.getItem("access_token") ? (
                <div style={{alignSelf:"center",display:"flex"}}>
                <li className="nav_li"><Link to='/create'>Create</Link></li>
                <li className="nav_li"><Link to={`/${localStorage.getItem("username")}`}>Show</Link></li>
                <li className="nav_li"><Link to='/edit'>Edit</Link></li>
                </div>
                )
                :
                (
                    ""
                )}
                {localStorage.getItem("access_token")  ? (
                <div style={{marginLeft:"auto",display:"flex"}}>
                <li className="nav_li rbtn" onClick={logOut} style={{color:"white",cursor:"pointer"}}>Logout</li>
                </div>
                )
                :
                (
                <div style={{marginLeft:"auto",display:"flex"}}>
                <li className="nav_li rbtn"><Link to='/login'>Login</Link></li> 
                <li className="nav_li rbtn"><Link to='/'>Signup</Link></li>
                </div>
                )}

            </ul>
        </nav>
    )
}