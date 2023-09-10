import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
export default function SignUp(){
    const navigate=useNavigate("");
    async function signupUser(){
        let user={
            "firstname":document.forms[0].firstname.value,
            "lastname":document.forms[0].lastname.value,
            "username":document.forms[0].username.value,
            "password":document.forms[0].password.value

        }
        console.log(user)
        await axios.post("https://linkhub-api-pnmu.onrender.com/signup",user)
        .then((response)=>{
            console.log(response)
            navigate("/login");
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <div className="bg" style={{height:"90vh"}}>
        <form classNameName="login_form">
            <h1 className="form_title">SignUp</h1>
            <div className="message">Become a LinkHub member now! </div>
            <div className="switch_container">
                <span className="switch_btn">
                    <Link to='/login'>Login</Link>
                </span>
                <span className="switch_btn">
                    <Link to='/'>SignUp</Link>
                </span>
            </div>
        <div className="flexside">
            <input className="form_inputs side " type="text" name="firstname" id="firstname" placeholder="First Name"/>
            <input className="form_inputs side" type="text" name="lastname" id="lastname" placeholder="Last Name"/>

        </div>
        <div>
            <input className="form_inputs" type="text" name="username" id="username" placeholder="Username"/>
        </div>
        <div>
            <input className="form_inputs" type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <button className="submit_btn" onClick={(e)=>{
                e.preventDefault();
                signupUser()
            }}>SignUp</button>
        </form>
        </div>
    )
}