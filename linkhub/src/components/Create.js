import axios from "axios";
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
              'Authorization':`Bearer ${props.token}`,
            //   'Content-Type': 'multipart/form-data'
            }
          },)
          .then((response)=>
          console.log(response))
          .catch((err)=>
          console.log(err))
    }
    return (
        <form action="">
            <div>
                <input type="text" name="gfg" id="gfg" placeholder="GeeksForGeeks"/>
            </div>
            <div>
                <input type="text" name="codechef" id="codechef" placeholder="Codechef"/>
            </div>
            <div>
                <input type="text" name="leetcode" id="leetcode" placeholder="LeetCode"/>
            </div>
            <div>
                <input type="text" name="codeforces" id="codeforces" placeholder="CodeForces"/>
            </div>
            <div>
                <input type="text" name="hackerrank" id="hackerrank" placeholder="HackerRank"/>
            </div>
            <div>
                <input type="text" name="hackerearth" id="hackerearth" placeholder="HackerEarth"/>
            </div>
            <div>
                <input type="text" name="portfolio" id="portfolio" placeholder="Portfolio"/>
            </div>
            <div>
                <input type="text" name="website" id="website" placeholder="Website"/>
            </div>
            <div>
                <input type="text" name="instagram" id="instagram" placeholder="Instagram"/>
            </div>
            <div>
                <input type="text" name="linkedin" id="linkedin" placeholder="LinkedIn"/>
            </div>
            <div>
                <input type="text" name="facebook" id="facebook" placeholder="Facebook"/>
            </div>
            <div>
                <input type="text" name="github" id="github" placeholder="Github"/>
            </div>
            <div>
                <button onClick={(e)=>{
                    e.preventDefault();
                    create();
                }}>Submit</button>
            </div>
        </form>
    )
}