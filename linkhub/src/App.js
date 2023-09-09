import Create from './components/Create'
import Edit from './components/Edit'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import View from './components/View'
import { useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {
  const [token,setToken]=useState("");
  const [nav,setNav]=useState("none");
  // const [user,setUser]=useState("");
  function LogOut(){
    // setUser("")
    setToken("")
    localStorage.removeItem("acces_token")
    localStorage.removeItem("username")

  }
  return (
    <Router>
      <NavBar nav={nav} />
    <Routes>
      <Route exact path="/" element={<Home/>}></Route>
      <Route exact path="/login" element={<Login token={token} setToken={setToken} setNav={setNav}/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/create" element={<Create/>}></Route>
      <Route path="/edit" element={<Edit/>}></Route>
      <Route path="/:username" element={<View />}></Route>
    </Routes>
  </Router> 
  );
}

export default App;
