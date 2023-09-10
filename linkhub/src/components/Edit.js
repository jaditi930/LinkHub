import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function Edit(props){
    const [linksHub,setLinksHub]=useState([])
    useEffect(()=>{(async()=> {
            console.log(props.user)
            await axios.get(`https://linkhub-api-pnmu.onrender.com/${localStorage.getItem("username")}`,
            {
                headers:{
                  'Authorization':`Bearer ${localStorage.getItem("access_token")}`,
                }
            })
            .then((response)=>{
                setLinksHub(response.data)
                console.log(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
            
        }
        )()
    },[]
    )
    // function populate()
    // {
    //     let inp=others.length;
    //     let obj=[`others_t${inp}`,`others_v${inp}`]
    //     setOthers([...others,obj])

    // }
    // function remove()
    // {
    //     setOthers(oldOthers => {
    //         return oldOthers.filter((_, i) => i !== others.length-1)
    //       })
    // }
    let other_fields=linksHub.others.map((other,index)=>{
        console.log(other)
        return <div className="flex">
        <div className="inputGroup r">
                <input type="text" id={`others_t${index}`} defaultValue={""} placeholder="Title"/>
                </div>
                 <div class="inputGroup">
                <input type="text" id={`others_v${index}`} defaultValue={""} placeholder="Link Goes Here"/>
                </div>
                <div>
                <FontAwesomeIcon icon={faTrashCan} style={{color: "#e2e5e9",}} onClick={()=>{
                    // remove()
                }}/>
                </div>
                </div>
    })
    async function edit(){
        console.log(props.token)
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

        }
        console.log(linkhub)
        await axios.post("https://linkhub-api-pnmu.onrender.com/edit",linkhub,{
            headers:{
              'Authorization':`Bearer ${localStorage.getItem("access_token")}`,
              'Content-Type': 'multipart/form-data'
            }
          },)
          .then((response)=>
          console.log(response))
          .catch((err)=>
          console.log(err))
    }
    return (
<div className="bg">
          <form action="" className="create_form">

          <h1 className="create_title">PROFILE</h1>

            <div className="image_box">

            {/* <img src={`https://linkhub-api-pnmu.onrender.com/profiles/${linksHub.path}`} 
            height="200" width="200" style={{borderRadius:"50%"}} id="edit_image"/> */}

            <input type="file" onClick={(e)=>{
                e.preventDefault();
            }}/>

          </div>

            <h1 className="create_title">CODING PLATFORMS</h1>
            <div className="flex">

                <div className="inputGroup r">
                    <input  type="text" name="gfg" id="gfg" required="" autoComplete="off"
                    defaultValue={linksHub.gfg}/>
                    <label htmlFor="gfg">GeeksForGeeks</label>
                </div>
                <div className="inputGroup">
                <input type="text" name="codechef" id="codechef" required="" autoComplete="off"
                 defaultValue={linksHub.codechef}/>
                    <label htmlFor="codechef">Codechef</label>
                </div>

            </div>
           
        <div className="flex">
        <div className="inputGroup r">
                <input  type="text" name="leetcode" id="leetcode" className="rmargin" 
                 defaultValue={linksHub.leetcode}/>
                <label htmlFor="leetcode">LeetCode</label>
            </div>
            <div className="inputGroup">
                <input  type="text" name="codeforces" id="codeforces" 
                 defaultValue={linksHub.codeforces}/>
                <label htmlFor="codeforces">CodeForces</label>
            </div>
        </div>
            
            <div className="flex">
                <div className="inputGroup r">
                    <input  type="text" name="hackerrank" id="hackerrank" className="rmargin" 
                     defaultValue={linksHub.hackerrank}/>
                    <label htmlFor="hackerrank">HackerRank</label>
                </div>
                <div className="inputGroup">
                    <input  type="text" name="hackerearth" id="hackerearth" 
                     defaultValue={linksHub.hackerearth}/>
                    <label htmlFor="hackerearth">HackerEarth</label>
                </div>
            </div>
            <h1 className="create_title">PERSONAL WEBSITES</h1>
            <div className="flex">
            <div className="inputGroup r">
                <input  type="text" name="portfolio" id="portfolio" className="rmargin" 
                 defaultValue={linksHub.portfolio}/>
                <label htmlFor="portfolio">Portfolio</label>
            </div>
            <div className="inputGroup">
                <input  type="text" name="website" id="website" 
                 defaultValue={linksHub.website}/>
                <label htmlFor="website">Website</label>
            </div>
            </div>
            <h1 className="create_title">SOCIAL MEDIA</h1>
        <div className="flex">
            <div className="inputGroup r">
                    <input  type="text" name="instagram" id="instagram" className="rmargin" 
                     defaultValue={linksHub.instagram}/>
                    <label htmlFor="instagram">Instagram</label>
            </div>
            <div className="inputGroup">
                <input  type="text" name="facebook" id="facebook" 
                 defaultValue={linksHub.facebook}/>
                <label htmlFor="facebook">Facebook</label>
            </div>
        </div>

        <div className="flex">
        <div className="inputGroup r">
                <input type="text" name="linkedin" id="linkedin" className="rmargin" 
                 defaultValue={linksHub.linkedin}/>
                <label htmlFor="linkedin">LinkedIn</label>
        </div>
        <div className="inputGroup">
                <input  type="text" name="github" id="github" 
                 defaultValue={linksHub.github}/>
                <label htmlFor="github">GithHub</label>
            </div>
        </div>
        <div id="others">
            <div style={{display:"flex"}}>
        <h1 className="create_title">OTHERS</h1>
        <button className="add_others" type="button" onClick={(e)=>{
            e.preventDefault();
            // populate()
            }} style={{marginLeft:"auto"}}>ADD MORE +
        </button>
            </div>
            {other_fields}
        </div>

        <div>
                <button className="create_btn" onClick={(e)=>{
                    e.preventDefault();
                    edit(); 
                }}>Edit</button>
            </div>
    </form>
    </div>
    )
}