import {useEffect} from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material'
import {NavBar} from './NavBar'
import {useAppDispatch, useAppSelector} from '../hooks'
import {Footerr} from './Footer'
import {Navigate} from 'react-router-dom'
import {fetchCurrentUser} from '../features/users/userSlice'
import {FaUserCircle} from 'react-icons/fa'
import {AiFillCaretDown} from 'react-icons/ai'

export const Profile = () => {
  const {username, email, rol} = useAppSelector(
    (state) => state.user.currentUser
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [])

  return (
    <div>
      {rol === 'user' || rol === 'admin' ? (
        <Box display='grid'>
          <NavBar />
          <Box mt='100px'>
            <Box>
              <FaUserCircle size='60px' />
              <Typography>Your Profile info</Typography>
              <p> name: {username}</p>
              <p> email: {email}</p>
            </Box>

            <Box>
              <Accordion sx={{width: '50%', bgcolor: '#F7F7F8'}}>
                <AccordionSummary
                  expandIcon={<AiFillCaretDown />}
                  aria-controls='Historial de compras'
                  id='panel1a-header'
                >
                  <Typography>Historial de compras</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box bottom='0' width='100%'>
              <Footerr />B
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>{<Navigate to='/' />}</Box>
      )}
    </div>
  )
}
