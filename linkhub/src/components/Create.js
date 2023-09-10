import axios from "axios";
import '../Css/Create.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";

export default function Create(props){
    const [others,setOthers]=useState([])
    // const navigate=useNavigate();

    let other_fields=others.map((other,index)=>{
        return <div className="flex" key={index}>
        <div className="inputGroup r">
                <input type="text" name="title" placeholder="Title" value={other.title} onChange={(e)=>{
                    handleChange(index,e)}}
                />
                </div>
                 <div className="inputGroup">
                <input type="text" name="value" placeholder="Link Goes Here" value={other.value} onChange={(e)=>{
                    handleChange(index,e)}}/>
                </div>
                <div>
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#e2e5e9",}} onClick={()=>{
                    remove(index)
                }}/>
                </div>
                </div>
    })
    let handleChange = (i, e) => {
        let newFormValues = [...others];
        newFormValues[i][e.target.name] = e.target.value;
        setOthers(newFormValues);
     }
        
    let add = () => {
        setOthers([...others, { title: "", value: "" }])
     }
    
    let remove = (i) => {
        let newFormValues = [...others];
        newFormValues.splice(i, 1);
        setOthers(newFormValues)
    }

    async function create(){
        console.log(props.token)
        let others_obj={}

        console.log(others)
        for(let i=0;i<others.length;i++)
        { 
            others_obj[others[i].title]=others[i].value
        }
        console.log(others_obj)
        const linkhub={
            "profile":document.getElementById("image").files[0],
            "gfg":document.forms[0].gfg.value,
            "leetcode":document.forms[0].leetcode.value,
            "codechef":document.forms[0].codechef.value,
            "codeforces":document.forms[0].codeforces.value,
            "hackerrank":document.forms[0].hackerrank.value,
            "hackerearth":document.forms[0].hackerearth.value,
            "facebook":document.forms[0].facebook.value,
            "instagram":document.forms[0].instagram.value,
            "linkedin":document.forms[0].linkedin.value,
            "github":document.forms[0].github.value,
            "website":document.forms[0].website.value,
            "portfolio":document.forms[0].portfolio.value,
            "others":JSON.stringify(others_obj)

        }
        console.log(linkhub)
        await axios.post("https://linkhub-api-pnmu.onrender.com/create",linkhub,{
            headers:{
              'Authorization':`Bearer ${localStorage.getItem("access_token")}`,
              'Content-type': "multipart/form-data"
            }
          },)
          .then((response)=>
          console.log(response))
          .catch((err)=>
          console.log(err))
    }
    return (
        <div className="bg">
          <form className="create_form">
            <h1 className="create_title">PROFILE</h1>
            <div className="image_box">
                <input type="file" id="image"/>
            </div>
            <h1 className="create_title">CODING PLATFORMS</h1>
            <div className="flex">

                <div className="inputGroup r">
                    <input  type="text" name="gfg" id="gfg" />
                    <label htmlFor="gfg">GeeksForGeeks</label>
                </div>
                <div className="inputGroup">
                <input type="text" name="codechef" id="codechef" />
                    <label htmlFor="codechef">Codechef</label>
                </div>

            </div>
           
        <div className="flex">
        <div className="inputGroup r">
                <input  type="text" name="leetcode" id="leetcode" className="rmargin"/>
                <label htmlFor="leetcode">LeetCode</label>
            </div>
            <div className="inputGroup">
                <input  type="text" name="codeforces" id="codeforces"/>
                <label htmlFor="codeforces">CodeForces</label>
            </div>
        </div>
            
            <div className="flex">
                <div className="inputGroup r">
                    <input  type="text" name="hackerrank" id="hackerrank" className="rmargin"/>
                    <label htmlFor="hackerrank">HackerRank</label>
                </div>
                <div className="inputGroup">
                    <input  type="text" name="hackerearth" id="hackerearth"/>
                    <label htmlFor="hackerearth">HackerEarth</label>
                </div>
            </div>
            <h1 className="create_title">PERSONAL WEBSITES</h1>

            <div className="flex">
            <div className="inputGroup r">
                <input  type="text" name="portfolio" id="portfolio" className="rmargin"/>
                <label htmlFor="portfolio">Portfolio</label>
            </div>
            <div className="inputGroup">
                <input  type="text" name="website" id="website"/>
                <label htmlFor="website">Website</label>
            </div>
            </div>

            <h1 className="create_title">SOCIAL MEDIA</h1>

        <div className="flex">
            <div className="inputGroup r">
                    <input  type="text" name="instagram" id="instagram" className="rmargin"/>
                    <label htmlFor="instagram">Instagram</label>
            </div>
            <div className="inputGroup">
                <input  type="text" name="facebook" id="facebook"/>
                <label htmlFor="facebook">Facebook</label>
            </div>
        </div>

        <div className="flex">
        <div className="inputGroup r">
                <input type="text" name="linkedin" id="linkedin" className="rmargin"/>
                <label htmlFor="linkedin">LinkedIn</label>
        </div>
        <div className="inputGroup">
                <input  type="text" name="github" id="github"/>
                <label htmlFor="github">GithHub</label>
            </div>
        </div>
        
        <div id="others">
            <div style={{display:"flex"}}>
        <h1 className="create_title">OTHERS</h1>
        <button className="add_others" type="button" onClick={(e)=>{
            e.preventDefault();
            add()
            }} style={{marginLeft:"auto"}}>ADD MORE +
        </button>
            </div>
            {other_fields}
        </div>
            <div>
                <button type="button" className="create_btn" onClick={(e)=>{
                    e.preventDefault();
                    create(); 
                    // navigate("/view")
                }}>Submit</button>
            </div>
    </form>
    </div>
    )

}