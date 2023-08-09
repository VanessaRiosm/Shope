import {styled, alpha} from '@mui/material/styles'
import {useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import {AppBar, Box, Menu, MenuItem} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import {BsSearch} from 'react-icons/bs'
import {RiShoppingCartLine} from 'react-icons/ri'
import {FaUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {Cart} from './Cart'

//searchbar
const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  marginRight: 10,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

//searchbar icon
const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

//transition searchbar
const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const rol = useSelector((state: RootState) => state.user.rol)

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static' color={'transparent' || '#00e5ff'}>
        <Toolbar>
          <img
            src='https://static.vecteezy.com/system/resources/previews/003/275/730/original/shopping-bag-store-logo-online-shopping-logo-design-free-vector.jpg'
            style={{width: '70px', height: '70px'}}
          />

          <Typography
            variant='h4'
            noWrap
            component='div'
            sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
          >
            <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
              SHOPE
            </Link>
          </Typography>

          <Typography
            noWrap
            component='div'
            fontSize={20}
            fontWeight={'bold'}
            sx={{flexGrow: 1, display: {xs: 'none', md: 'block'}}}
          >
            REBAJAS HASTA 60%DCTO
          </Typography>

          <Search>
            <SearchIconWrapper>
              <BsSearch />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{'aria-label': 'search'}}
            />
          </Search>

          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            sx={{mr: 2}}
          >
            <RiShoppingCartLine />
          </IconButton>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            size={400}
            overlayOpacity={0.5}
            className='bla bla bla'
          >
            <Box>
              <Cart />
            </Box>
          </Drawer>

          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{mr: 2}}
            onClick={handleMenu}
          >
            <FaUserCircle />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {rol === 'admin' ? (
              <div>
                <Link
                  to={'/admin'}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <MenuItem onClick={handleClose}>Panel de admin</MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Cerrar Sesión</MenuItem>
              </div>
            ) : rol === 'user' ? (
              <div>
                <MenuItem onClick={handleClose}>Mi perfil</MenuItem>
                <MenuItem onClick={handleClose}>salir </MenuItem>{' '}
              </div>
            ) : (
              <div>
                <Link
                  to={'/login'}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <MenuItem>Iniciar Sesion</MenuItem>
                </Link>
                <Link
                  to={'/register'}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <MenuItem>Registrarme</MenuItem>
                </Link>
              </div>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
