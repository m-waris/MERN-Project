import React from 'react'
import { Link } from 'react-router-dom'
import bread from '../imgs/bread.png'
import '../App.css'
export default function Nav_bar() {
    return (
        <>
            <nav className=" bg-slate-100 py-6 flex justify-between px-5 md:px-10">
                <div className=' space-x-3'>
                    <Link to='/' className='flex space-x-1' >
                        <img src={bread} alt="" />
                        <h1 className=' text-xl mt-1 font-bold'>FoodApp</h1>

                    </Link>
                </div>
                <div className=" space-x-3 flex items-center">
                    <Link className="nav" to="/">Home</Link>
                    <Link className="nav border-2 border-yellow-300" to="/login">Login</Link>
                </div>
            </nav>
        </>
    )
}
