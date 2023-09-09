
export default function SignUp(){
    return (
        <form>
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname"/>
        </div>
        <div>
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname"/>
        </div>
        <div>
            <label htmlFor="username">User Name</label>
            <input type="text" name="username" id="username"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
        </div>
        </form>
    )
}