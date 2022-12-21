import React from 'react'
import { Link } from '@mui/material'
import './Navbar.css'
import logo from '../../assets/wow-logo.jpg'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import {Paper,MenuItem,MenuList,ListItemText} from '@mui/material'




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
              
              <button onClick={() => setMenu(!menu)}>
              <AiOutlineMenu />
              </button>
              

              

            </div>

      </div>
      {menu && <Paper className='linksSmall' sx={{ width: "100%",background:"#000",color:"#fff",textAlign:"center" }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>HOME</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>EXPANSIONS</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>CLASSES</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>NEWS</ListItemText>
        </MenuItem>
        
      </MenuList>
    </Paper>}
           
        </nav>
  )
}

export default Navbar