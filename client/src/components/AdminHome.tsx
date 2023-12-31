import * as React from 'react'
import {useState} from 'react'
import {useAppSelector} from '../hooks'
import {AiOutlineMenu} from 'react-icons/ai'
import {Link, Navigate} from 'react-router-dom'

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  MenuItem,
  Menu,
  Fade,
} from '@mui/material'
import {AdminProducts} from './AdminProducts'
import {AdminUsers} from './AdminUsers'

const pages = [
  {id: 1, name: 'Products'},
  {id: 2, name: 'Users'},
  {id: 3, name: 'Offers'},
  {id: 4, name: 'Shipping'},
]

export const AdminHome = () => {
  //no sirve le rootstate
  const rol = useAppSelector((state) => state.user.rol)
  const [component, setComponent] = useState('Products')

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleComponent = () => {
    if (component === 'Products') return <AdminProducts />
    if (component === 'Users') return <AdminUsers />
  }

  return (
    <Box>
      {rol === 'admin' ? (
        <Box>
          <AppBar position='fixed' sx={{bgcolor: 'white'}}>
            <Container maxWidth='xl'>
              <Toolbar disableGutters>
                <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                  <IconButton
                    size='large'
                    aria-label='account of current user'
                    aria-controls='menu-appbar'
                    aria-haspopup='true'
                    onClick={handleClick}
                    sx={{color: 'black'}}
                  >
                    <AiOutlineMenu />
                  </IconButton>

                  <Menu
                    id='fade-menu'
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    {pages.map((page) => (
                      <MenuItem
                        key={page.name}
                        onClick={() => {
                          handleClick
                          setComponent(page.name)
                        }}
                      >
                        <Typography textAlign='center'>{page.name}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                  <img
                    src='../../../shopelogo.png'
                    style={{
                      width: '40px',
                      height: '40px',
                      // top, right, bottom, left
                      margin: '5px 5px px 5px',
                    }}
                  />
                </Link>
                <Typography
                  variant='h4'
                  noWrap
                  component='div'
                  sx={{flexGrow: 1, display: {xs: 'block', sm: 'block'}}}
                >
                  <Link
                    to={'/'}
                    style={{textDecoration: 'none', color: 'black'}}
                  >
                    SHOPE
                  </Link>
                </Typography>

                <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                  {pages.map((page) => (
                    <Box mx={2}>
                      <Button
                        key={page.id}
                        onClick={() => setComponent(page.name)}
                        sx={{my: 2, color: 'black', display: 'block'}}
                      >
                        {page.name}
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
          <div>{handleComponent()}</div>
        </Box>
      ) : (
        <Box>{<Navigate to='/' />}</Box>
      )}
    </Box>
  )
}
