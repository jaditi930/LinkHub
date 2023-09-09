import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


export default function View(){
    // const history=useNavigate();
    // console.log(history.location)
    const [linksHub,setLinksHub]=useState([])
    const user=window.location.href.split("/")[3]
    console.log(user)
    // const user="aditi"

    useEffect(()=>{(async()=> {
            await axios.get(`https://linkhub-api-pnmu.onrender.com/${user}`)
            .then((response)=>{
                setLinksHub(response.data)
                console.log(response)
            })
        }
        )()
    },[]
    )
    return (
        <>
        </>
    )
}