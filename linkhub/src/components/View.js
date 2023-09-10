import axios from "axios";
import { useEffect,useState } from "react";

export default function View(){
    const [linksHub,setLinksHub]=useState([])
    useEffect(()=>{(async()=> {
            const user=window.location.href.split('/')[3]
            console.log(user)
            await axios.get(`https://linkhub-api-pnmu.onrender.com/${user}`)
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
    return (
        <>
        <div className="bg">
          <form action="" className="create_form">
          <h1 className="create_title">PROFILE</h1>
          <div className="image">
          <img src={`https://linkhub-api-pnmu.onrender.com/profiles/${linksHub.path}`} height="200" width="200" style={{borderRadius:"50%"}}/>
          </div>

            { linksHub.gfg || linksHub.codechef || linksHub.leetcode || linksHub.codeforces || linksHub.hackerrank || linksHub.hackerearth  ?
            (<h1 className="create_title">CODING PLATFORMS</h1>)
            : 
            ( "")
            }
            <div className="flex">

                {linksHub.gfg ?
                (<div className="inputGroup r">
                    <input  type="text" name="gfg" id="gfg" required="" autoComplete="off" value={linksHub.gfg}/>
                    <label htmlFor="gfg">GeeksForGeeks</label>
                </div>)
                :
                ( "" )
                }
                {linksHub.codechef ?
                (
                <div className="inputGroup">
                <input type="text" name="codechef" id="codechef" required="" autoComplete="off" value={linksHub.codechef}/>
                    <label htmlFor="codechef">Codechef</label>
                </div>
                )
                : ( "" )
                }

            </div>
           
        <div className="flex">
            { linksHub.leetcode ? 
        ( <div className="inputGroup r">
                <input  type="text" name="leetcode" id="leetcode" class="rmargin" value={linksHub.leetcode}/>
                <label htmlFor="leetcode">LeetCode</label>
            </div>

        ):
        ( "" )
            }
            {linksHub.codeforces ?
            (<div className="inputGroup">
                <input  type="text" name="codeforces" id="codeforces" value={linksHub.codeforces}/>
                <label htmlFor="codeforces">CodeForces</label>
            </div>
            ):
            ( "" )
            }
        </div>
            <div className="flex">
            { linksHub.hackerrank ?
            (
                <div class="inputGroup r">
                    <input  type="text" name="hackerrank" id="hackerrank" class="rmargin" value={linksHub.hackerrank}/>
                    <label htmlFor="hackerrank">HackerRank</label>
                </div>
            ):
            ( "")
            }
            { linksHub.hackerearth ?
               ( <div className="inputGroup">
                    <input  type="text" name="hackerearth" id="hackerearth" value={linksHub.hackerearth}/>
                    <label htmlFor="hackerearth">HackerEarth</label>
                </div>
               ):
               ( "" )
            }
            </div>
            { linksHub.portfolio || linksHub.website ?
            (<h1 className="create_title">PERSONAL WEBSITES</h1>):
            ( "")
            }
            <div className="flex">
            { linksHub.portfolio ?    
            ( <div className="inputGroup r">
                <input  type="text" name="portfolio" id="portfolio" class="rmargin" value={linksHub.portfolio}/>
                <label htmlFor="portfolio">Portfolio</label>
            </div>
            ):
            ( "" )
            }
            { linksHub.website ? 
            (<div className="inputGroup">
                <input  type="text" name="website" id="website" value={linksHub.website}/>
                <label htmlFor="website">Website</label>
            </div>
            ):
            ( "" )
            }
            </div>
            { linksHub.instagram || linksHub.facebook || linksHub.linkedin || linksHub.github ?
            (<h1 className="create_title">SOCIAL MEDIA</h1>):( "")
            }
        <div className="flex">
            { linksHub.instagram ?
            (<div className="inputGroup r">
                    <input  type="text" name="instagram" id="instagram" class="rmargin" value={linksHub.instagram}/>
                    <label htmlFor="instagram">Instagram</label>
            </div>)
            : ("")
            }
            { linksHub.facebook ?
            (<div className="inputGroup">
                <input  type="text" name="facebook" id="facebook" value={linksHub.facebook}/>
                <label htmlFor="facebook">Facebook</label>
            </div>
            ):
            ( "")
            }
        </div>

        <div className="flex">
        { linksHub.linkedin ?
        (<div className="inputGroup r">
                <input type="text" name="linkedin" id="linkedin" class="rmargin" value={linksHub.linkedin}/>
                <label htmlFor="linkedin">LinkedIn</label>
        </div>
        ):
        ( "" )
        }
        { linksHub.github ?
        (<div className="inputGroup">        
                <input  type="text" name="github" id="github" value={linksHub.github}/>
                <label htmlFor="github">GithHub</label>
            </div>
        ):
        ("")
        }
        </div>
    </form>
    </div>
        </>
    )
}