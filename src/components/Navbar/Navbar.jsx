import React from 'react'
import { Link } from '@mui/material'
import './Navbar.css'
import logo from '../../assets/wow-logo.jpg'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {IconButton} from '@mui/material'



const Navbar = () => {
  const [menu,setMenu] = useState(false);

  return (
    <nav>
      <div className="wrap">

      <div className="brand">
                <Link href="#"><img src={logo} className="logo" alt="" /></Link>

            </div>

            <div className="links">
                <Link href='#'>HOME</Link>
                <Link href='#'>EXPANSIONS</Link>
                <Link href='#'>CLASSES</Link>
                <Link href='#'>NEWS</Link>
            </div>

            <div className='smallerDisplay'>
              
              <AiOutlineMenu />
              

              {/* {menu && <div>I'm here</div>} */}

            </div>
      </div>
           
        </nav>
  )
}

export default Navbar