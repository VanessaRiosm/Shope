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
import {Product} from '../types/types'

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
                  <Box
                    display='flex'
                    flexWrap='wrap'
                    justifyContent='center'
                    gap='30px'
                  >
                    {sales &&
                      sales.map(
                        (s: {
                          orderNum: number
                          products: Product[]
                          total: number
                          date: string
                        }) => (
                          <Box maxWidth='100%' border='1px solid gray' p='5px'>
                            <Typography>Date: {s.date.slice(0, 9)}</Typography>
                            <Typography>Order: {s.orderNum}</Typography>
                            <Typography mb='10px'>Total: ${s.total}</Typography>
                            <Box
                              display='flex'
                              gap='5px'
                              flexWrap='wrap'
                              justifyContent='center'
                            >
                              {s.products.map((p) => (
                                <Box>
                                  <img
                                    src={p.image}
                                    style={{height: '90px', width: '60px'}}
                                  />
                                </Box>
                              ))}
                            </Box>
                          </Box>
                        )
                      )}
                  </Box>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{width: '50%', bgcolor: '#F7F7F8'}}>
                <AccordionSummary
                  expandIcon={<AiFillCaretDown />}
                  aria-controls='Your comments'
                  id='panel1a-header'
                >
                  <Typography>Your comments</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box
                    display='flex'
                    flexWrap='wrap'
                    justifyContent='center'
                    gap='30px'
                  >
                    Coming Soon
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
