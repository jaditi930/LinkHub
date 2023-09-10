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
        return <div className="flex">
        <div className="inputGroup r">
                <input type="text" id={`others_t${index}`} placeholder="Title"/>
                </div>
                 <div class="inputGroup">
                <input type="text" id={`others_v${index}`} placeholder="Link Goes Here"/>
                </div>
                <div>
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#e2e5e9",}} onClick={()=>{
                    remove()
                }}/>
                </div>
                </div>
    })

    function populate()
    {
        let inp=others.length;
        let obj=[`others_t${inp}`,`others_v${inp}`]
        setOthers([...others,obj])

    }
    
    function remove(index)
    {
        setOthers(oldOthers => {
            return oldOthers.filter((_, i) => i !== index)
          })
    }
    async function create(){
        console.log(props.token)
        let others_obj={}
        for(let i=0;i<others.length;i++)
        {  
            console.log(others[i][0])
            let key=document.getElementById(others[i][0]).value;
            let value=document.getElementById(others[i][1]).value;
            others_obj[`${key}`]=value;
        }
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
        await axios.post("http://localhost:5000/create",linkhub,{
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
                <input  type="text" name="leetcode" id="leetcode" class="rmargin"/>
                <label htmlFor="leetcode">LeetCode</label>
            </div>
            <div className="inputGroup">
                <input  type="text" name="codeforces" id="codeforces"/>
                <label htmlFor="codeforces">CodeForces</label>
            </div>
        </div>
            
            <div className="flex">
                <div className="inputGroup r">
                    <input  type="text" name="hackerrank" id="hackerrank" class="rmargin"/>
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
                <input  type="text" name="portfolio" id="portfolio" class="rmargin"/>
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
                    <input  type="text" name="instagram" id="instagram" class="rmargin"/>
                    <label htmlFor="instagram">Instagram</label>
            </div>
            <div className="inputGroup">
                <input  type="text" name="facebook" id="facebook"/>
                <label htmlFor="facebook">Facebook</label>
            </div>
        </div>

        <div className="flex">
        <div className="inputGroup r">
                <input type="text" name="linkedin" id="linkedin" class="rmargin"/>
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
            populate()
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