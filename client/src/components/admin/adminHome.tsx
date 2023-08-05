import * as React from 'react'
// import {useState} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../redux/store'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import {AiOutlineMenu} from 'react-icons/ai'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import {Link} from 'react-router-dom'

const pages = [
  {name: 'Productos', page: 'adminProducts'},
  {name: 'Ofertas', page: 'adminOffers'},
  {name: 'Envios', page: 'adminShip'},
  {name: 'Usuarios', page: 'adminUsers'},
]

export const AdminHome = () => {
  const rol = useSelector((state: RootState) => state.user.rol)

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  return (
    <div>
      {rol === 'admin' ? (
        <AppBar position='static' color={'transparent' || '#00e5ff'}>
          <Container maxWidth='xl'>
            <Toolbar disableGutters>
              <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <AiOutlineMenu />
                </IconButton>

                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  // onClick
                  sx={{
                    display: {xs: 'block', md: 'none'},
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={() => {}}>
                      <Typography textAlign='center'>{page.name}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Typography
                variant='h4'
                noWrap
                component='div'
                sx={{flexGrow: 1, display: {xs: 'block', sm: 'block'}}}
              >
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                  SHOPE
                </Link>
              </Typography>

              <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                {pages.map((page) => (
                  <Box mx={2}>
                    <Button
                      key={page.name}
                      // onClick
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
      ) : null}
    </div>
  )
}
