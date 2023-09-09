import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Css/Form.css'
export default function Login(props){
    const navigate=useNavigate();
    async function logUser(){
        let user={
            "username":document.forms[0].username.value,
            "password":document.forms[0].password.value

        }
        console.log(user)
        await axios.post("https://linkhub-api-pnmu.onrender.com/login",user)
        .then((response)=>{
            props.setToken(response.data.token)
            console.log(response.data.token)
            props.setNav("block")
            props.setUser(user.username)
            navigate("/")
        })
        .catch((err)=>
            console.log(err)
        )

    }
    return (
        <div className="bg">
        <form className="login_form">
            <h1 className="form_title">Login</h1>
            <div className="switch_container">
                <span className="switch_btn">
                    <Link to='/login'>Login</Link>
                </span>
                <span className="switch_btn">
                    <Link to='/signup'>SignUp</Link>
                </span>
            </div>
        <div >
            <input className="form_inputs" type="text" name="username" id="username" placeholder="Username"></input>
        </div>
        <div >
            <input className="form_inputs" type="password" name="password" id="password" placeholder="Password"></input>
        </div>
            <button className="submit_btn" onClick={(e)=>{
                e.preventDefault();
                logUser()
            }}>Login</button>
        <div className="message">
        <Link to='/signup'>  Not a member ? Signup now </Link>
        </div>
        </form>
        </div>
    )
}