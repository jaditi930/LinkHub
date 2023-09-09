import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


export default function View(){
    const [linksHub,setLinksHub]=useState([])

    useEffect(()=>{(async()=> {
            const user=window.location.href.split('/')[3]
            console.log(user)
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
        <div className="bg">
          <form action="" className="create_form">
            <h1 className="create_title">CODING PLATFORMS</h1>
            <div className="flex">

                <div class="inputGroup r">
                    <input  type="text" name="gfg" id="gfg" required="" autocomplete="off" value={linksHub.gfg}/>
                    <label htmlFor="gfg">GeeksForGeeks</label>
                </div>
                <div class="inputGroup">
                <input type="text" name="codechef" id="codechef" required="" autocomplete="off" value={linksHub.codechef}/>
                    <label htmlFor="codechef">Codechef</label>
                </div>

            </div>
           
        <div className="flex">
        <div class="inputGroup r">
                <input  type="text" name="leetcode" id="leetcode" class="rmargin" value={linksHub.leetcode}/>
                <label htmlFor="leetcode">LeetCode</label>
            </div>
            <div class="inputGroup">
                <input  type="text" name="codeforces" id="codeforces" value={linksHub.codeforces}/>
                <label htmlFor="codeforces">CodeForces</label>
            </div>
        </div>
            
            <div className="flex">
                <div class="inputGroup r">
                    <input  type="text" name="hackerrank" id="hackerrank" class="rmargin" value={linksHub.hackerrank}/>
                    <label htmlFor="hackerrank">HackerRank</label>
                </div>
                <div class="inputGroup">
                    <input  type="text" name="hackerearth" id="hackerearth" value={linksHub.hackerearth}/>
                    <label htmlFor="hackerearth">HackerEarth</label>
                </div>
            </div>
            <h1 className="create_title">PERSONAL WEBSITES</h1>
            <div className="flex">
            <div class="inputGroup r">
                <input  type="text" name="portfolio" id="portfolio" class="rmargin" value={linksHub.portfolio}/>
                <label htmlFor="portfolio">Portfolio</label>
            </div>
            <div class="inputGroup">
                <input  type="text" name="website" id="website" value={linksHub.website}/>
                <label htmlFor="website">Website</label>
            </div>
            </div>
            <h1 className="create_title">SOCIAL MEDIA</h1>
        <div className="flex">
            <div class="inputGroup r">
                    <input  type="text" name="instagram" id="instagram" class="rmargin" value={linksHub.instagram}/>
                    <label htmlFor="instagram">Instagram</label>
            </div>
            <div class="inputGroup">
                <input  type="text" name="facebook" id="facebook" value={linksHub.facebook}/>
                <label htmlFor="facebook">Facebook</label>
            </div>
        </div>

        <div className="flex">
        <div class="inputGroup r">
                <input type="text" name="linkedin" id="linkedin" class="rmargin" value={linksHub.linkedin}/>
                <label htmlFor="linkedin">LinkedIn</label>
        </div>
        <div class="inputGroup">
                <input  type="text" name="github" id="github" value={linksHub.github}/>
                <label htmlFor="github">GithHub</label>
            </div>
        </div>
    </form>
    </div>
        </>
    )
}