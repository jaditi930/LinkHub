import {Link} from 'react-router-dom'
export default function Home(){

    return (
        <>
        <div>
            Don't have an account? SignUp Here
            <button>
                <Link to='/signup'>SignUp</Link>
            </button>
        </div>
        <div>
            Existing User Login Here
            <button><Link to='/login'>Login</Link></button>
        </div>
        </>
    )
}