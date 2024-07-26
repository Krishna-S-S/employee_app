import React from 'react'
import {AppBar, Button, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant='h5' sx={{ flexGrow: 1 }} textAlign={'left'}>Employee App</Typography> &nbsp;&nbsp;&nbsp;
            <Link to='/add'>
            <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>Add</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/view'>
            <Button variant='contained' style={{ backgroundColor: 'white', color: 'black' }}>View</Button>
          </Link>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
          
    </div>
  )
}

export default Navbar