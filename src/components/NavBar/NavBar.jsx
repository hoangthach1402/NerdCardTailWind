import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'

const NavBar = () => {
    return (
        <nav className='flex items-center '>
            <div className='flex items-center'>

                <div className='text-20 font-semibold mr-2'>
                    NerdCard
                </div>
                <BsFillSunFill size={"24px"} color="e9c46a" />
            </div>
        </nav>
    )
}

export default NavBar
