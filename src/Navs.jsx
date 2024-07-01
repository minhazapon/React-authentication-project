import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authUseContext } from "./AuthContext";




const Navs = () => {

    const nav = <>
    
        <li><NavLink to="/" >Home</NavLink></li>
        <li><NavLink to="/learn" >Learn React</NavLink></li>
        <li><NavLink to="/dev" >React Dev</NavLink></li>
    
    </>

        const {user, logOut} =  useContext(authUseContext)
        
        const handleOut = () => {
          logOut()
          .then(() => console.log('logOut successfully'))
          .catch( error => 
            console.error(error)
          )
        
         }

    return (
        <div className=" ml-2 mt-2 mr-2">

<div className="navbar bg-base-100 shadow-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {nav}
      </ul>
    </div>

    
    <div className=" flex items-center gap-2">
    <img className=" h-[50px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />
    <a className=" text-2xl font-serif "><span className=" text-[#61DBFB]">React</span> News</a>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {nav}
    </ul>
  </div>
  <div className="navbar-end">

   

    {/* {  user ? <>
        
       
    </>:
     

    } */}

    { user ? <>
    
      <button onClick={handleOut} className=" btn">SignOut</button>
    </>:

    <Link to="/login" ><a className="btn">SignIn</a></Link>   

    }
   
  </div>
</div>
            
        </div>
    );
};

export default Navs;