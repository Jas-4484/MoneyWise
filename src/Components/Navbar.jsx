import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar = (props) => {
  navigate = useNavigate();
  return (
    <div className="Nav w-full h-12 bg-[#66B2FF] flex justify-between items-center ">
        <img src="wlogo.png" className="h-5/6 px-4" onClick={() => navigate('/first')}></img>
        {props.type === "0" ? (
          <div className="flex gap-6 px-8">
            <h2 className="font-bold text-white">Login</h2>
            <h2 className="font-bold text-white">SignUp</h2>
          </div>
        ) : null}
    </div>
  )
}

export default Navbar
