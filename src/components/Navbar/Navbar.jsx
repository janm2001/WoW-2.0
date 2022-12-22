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
                <Link href='/'>HOME</Link>
                <Link href='/expansions'>EXPANSIONS</Link>
                <Link href='/classes'>CLASSES</Link>
                <Link href='/news'>NEWS</Link>
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
          <ListItemText inset><Link href='/'>HOME</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link href='/expansions'>EXPANSIONS</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link href='/classes'>CLASSES</Link></ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset><Link href='/news'>NEWS</Link></ListItemText>
        </MenuItem>
        
      </MenuList>
    </Paper>}
           
        </nav>
  )
}

export default Navbar