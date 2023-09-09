import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


export default function View(){
    const [linksHub,setLinksHub]=useState([])
    const user=useParams()
    console.log(user)

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