import axios from 'axios'
import { useNavigate } from 'react-router-dom'
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
            navigate("/")
        })
        .catch((err)=>
            console.log(err)
        )

    }
    return (
        <form>
        <div>
            <input type="text" name="username" id="username" placeholder="Username"/>
        </div>
        <div>
            <input type="password" name="password" id="password" placeholder="Password"/>
        </div>
        <div>
            <button onClick={(e)=>{
                e.preventDefault();
                logUser()
            }}>Submit</button>
        </div>
        </form>
    )
}