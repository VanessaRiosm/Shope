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
  const {username, email, rol, sales} = useAppSelector(
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
            <Box display='grid' justifyItems='center' gap='20px'>
              <FaUserCircle size='60px' />
              <Typography fontWeight='bold'>Your Profile info</Typography>
              <Typography>Username: {username}</Typography>
              <Typography>Email: {email}</Typography>
            </Box>

            <Box display='grid' justifyItems='center' mt='30px'>
              <Accordion sx={{width: '50%', bgcolor: '#F7F7F8'}}>
                <AccordionSummary
                  expandIcon={<AiFillCaretDown />}
                  aria-controls='Shopping history'
                  id='panel1a-header'
                >
                  <Typography>Shopping history</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {sales &&
                      sales.map((s: {orderNum: number}) => (
                        <Typography>{s.orderNum}</Typography>
                      ))}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box bottom='0' width='100%'>
              <Footerr />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>{<Navigate to='/' />}</Box>
      )}
    </div>
  )
}
