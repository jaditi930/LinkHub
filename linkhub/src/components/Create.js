import axios from "axios";
import './Css/Create.css';

export default function Create(props){
    async function create(){
        console.log(props.token)
        const linkhub={
            // "profile":document.forms[0].gfg.value,
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
        await axios.post("https://linkhub-api-pnmu.onrender.com/create",linkhub,{
            headers:{
              'Authorization':`Bearer ${localStorage.getItem("access_token")}`,
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
            <h1 className="create_title">CODING PLATFORMS</h1>
            <div className="flex">

                <div class="inputGroup r">
                    <input  type="text" name="gfg" id="gfg" required="" autocomplete="off"/>
                    <label htmlFor="gfg">GeeksForGeeks</label>
                </div>
                <div class="inputGroup">
                <input type="text" name="codechef" id="codechef" required="" autocomplete="off"/>
                    <label htmlFor="codechef">Codechef</label>
                </div>

            </div>
           
        <div className="flex">
        <div class="inputGroup r">
                <input  type="text" name="leetcode" id="leetcode" class="rmargin"/>
                <label htmlFor="leetcode">LeetCode</label>
            </div>
            <div class="inputGroup">
                <input  type="text" name="codeforces" id="codeforces"/>
                <label htmlFor="codeforces">CodeForces</label>
            </div>
        </div>
            
            <div className="flex">
                <div class="inputGroup r">
                    <input  type="text" name="hackerrank" id="hackerrank" class="rmargin"/>
                    <label htmlFor="hackerrank">HackerRank</label>
                </div>
                <div class="inputGroup">
                    <input  type="text" name="hackerearth" id="hackerearth"/>
                    <label htmlFor="hackerearth">HackerEarth</label>
                </div>
            </div>
            <h1 className="create_title">PERSONAL WEBSITES</h1>
            <div className="flex">
            <div class="inputGroup r">
                <input  type="text" name="portfolio" id="portfolio" class="rmargin"/>
                <label htmlFor="portfolio">Portfolio</label>
            </div>
            <div class="inputGroup">
                <input  type="text" name="website" id="website"/>
                <label htmlFor="website">Website</label>
            </div>
            </div>
            <h1 className="create_title">SOCIAL MEDIA</h1>
        <div className="flex">
            <div class="inputGroup r">
                    <input  type="text" name="instagram" id="instagram" class="rmargin"/>
                    <label htmlFor="instagram">Instagram</label>
            </div>
            <div class="inputGroup">
                <input  type="text" name="facebook" id="facebook"/>
                <label htmlFor="facebook">Facebook</label>
            </div>
        </div>

        <div className="flex">
        <div class="inputGroup r">
                <input type="text" name="linkedin" id="linkedin" class="rmargin"/>
                <label htmlFor="linkedin">LinkedIn</label>
        </div>
        <div class="inputGroup">
                <input  type="text" name="github" id="github"/>
                <label htmlFor="github">GithHub</label>
            </div>
        </div>

            <div>
                <button className="create_btn" onClick={(e)=>{
                    e.preventDefault();
                    create(); 
                }}>Submit</button>
            </div>
    </form>
    </div>
    )

}