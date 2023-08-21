import {styled, alpha, createTheme, ThemeProvider} from '@mui/material/styles'
import {useAppDispatch, useAppSelector} from '../hooks'
import {
  AppBar,
  Badge,
  Box,
  Menu,
  MenuItem,
  BadgeProps,
  Button,
} from '@mui/material'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import {FaShoppingCart, FaUserCircle} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {Cart} from './Cart'
import {fetchCurrentUser, fetchLogOut} from '../features/users/userSlice'

//searchbar
const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.18),
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
    padding: theme.spacing(1, 1, 1, '5px'),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '14ch',
    },
  },
}))

const StyledBadge = styled(Badge)<BadgeProps>(({theme}) => ({
  '& .MuiBadge-badge': {
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#4518D9',
    color: 'white',
  },
}))

const promFont = createTheme({
  typography: {
    fontFamily: ['ADLaM Display', 'cursive'].join(','),
  },
})

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const rol = useAppSelector((state) => state.user.rol)
  const refresh = useAppSelector((state) => state.user.refresh)
  const dispatch = useAppDispatch()

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

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [refresh])

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position='static' color={'transparent' || '#00e5ff'}>
        <Toolbar>
          <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
            <img
              src='../../shopelogo.png'
              style={{
                width: '40px',
                height: '40px',
                // top, right, bottom, left
                margin: '5px 8px 10px 0px',
              }}
            />
          </Link>

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

          <ThemeProvider theme={promFont}>
            <Typography
              noWrap
              component='div'
              fontSize={20}
              fontWeight={'bold'}
              sx={{flexGrow: 1, display: {xs: 'none', md: 'block'}}}
            >
              SALES UP TO 60% OFF
            </Typography>
          </ThemeProvider>

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
            sx={{mr: 1}}
          >
            {' '}
            <StyledBadge badgeContent={1}>
              <FaShoppingCart />
            </StyledBadge>
          </IconButton>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction='right'
            size={400}
            overlayOpacity={0.5}
          >
            <Box>
              <Box>
                {/* <Typography>Cart</Typography> */}
                <Button
                  style={{
                    width: '20px',
                    height: '50px',
                    left: '85%',
                  }}
                  onClick={toggleDrawer}
                >
                  <AiOutlineClose />
                </Button>
              </Box>

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
                  to={'/profile'}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                </Link>

                <Link
                  to={'/admin'}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <MenuItem onClick={handleClose}>Admin Panel</MenuItem>
                </Link>

                <MenuItem onClick={handleClose}>Log Out</MenuItem>
              </div>
            ) : rol === 'user' ? (
              <div>
                <Link
                  to={'/profile'}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                </Link>
                <Link to={'/'} style={{textDecoration: 'none', color: 'black'}}>
                  <MenuItem onClick={() => dispatch(fetchLogOut())}>
                    Log Out
                  </MenuItem>{' '}
                </Link>
              </div>
            ) : (
              <div>
                <Link
                  to={'/login'}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <MenuItem>Sign In</MenuItem>
                </Link>
                <Link
                  to={'/register'}
                  style={{textDecoration: 'none', color: 'black'}}
                >
                  <MenuItem>Sign Up</MenuItem>
                </Link>
              </div>
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
