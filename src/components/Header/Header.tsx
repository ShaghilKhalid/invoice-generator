import React from 'react'
import logo from '../../assets/logo-black.png'
import Buttons from '../Buttons/Buttons'
import { Link } from 'react-router-dom'
const Header = () => {
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <>
            <div className="shadow-md flex items-center justify-between">
                <div className="logo">
                    <Link to='/'><img src={logo} className='img-fluid' alt="" /></Link>
                </div>
                <div className="button me-4">
                    <Buttons click={logout} title='Logout' Class='bg-red-700 hover:bg-white hover:text-red-700 border border-red-700 transition-all px-3 py-2 text-white rounded-md' />
                </div>
            </div>
        </>
    )
}

export default Header