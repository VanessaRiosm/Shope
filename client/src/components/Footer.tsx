import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa'
import {Box, Button} from '@mui/material'
import {useAppSelector} from '../hooks'
import {Promotion} from './Promotion'
import shope from '../images/shopelogo.png'

export const Footerr = () => {
  const {currentUser} = useAppSelector((state) => state.user)

  return (
    <Box>
      {!currentUser.username && (
        <Box
          border='1px solid gray'
          margin='60px 70px 50px 70px'
          padding='30px'
          justifyContent='space-around'
          alignItems='center'
          display={{xs: 'grid', sm: 'flex'}}
        >
          <Box>
            <Box>
              <p>Sign up and get a 25% discount</p>
              <p style={{fontWeight: 'bold', fontSize: '25px'}}>
                ON YOUR FIRST PURCHASE
              </p>
            </Box>
          </Box>

          <Box>
            <Link
              to={'/register'}
              style={{textDecoration: 'none', color: 'white'}}
            >
              <Button
                variant='contained'
                style={{
                  backgroundColor: '#4518D9 ',
                }}
              >
                SIGN UP
              </Button>
            </Link>
          </Box>
        </Box>
      )}

      <Box>
        <Promotion knit={''} />
      </Box>

      {/* footer */}
      <Box component='footer' height='17rem' bgcolor='#EEEEEE'>
        <Box display='grid' justifyItems='center'>
          <Box mt='30px' display='flex' alignItems='center' gap='5px'>
            <img src={shope} height='25px' />{' '}
            <Typography fontSize='20px' fontWeight='bold'>
              SHOPE
            </Typography>
          </Box>

          <Box display='flex' gap={{xs: '10px', sm: '30px'}} mt='30px'>
            <Typography>About Shope</Typography>
            <Typography>Help & FAQs</Typography>
            <Typography>Ways to Shop</Typography>
            <Typography>Legal</Typography>
          </Box>

          <Box display='flex' gap='30px' margin='30px 0 25px 0'>
            <FaFacebookSquare fontSize='30px' />
            <FaInstagramSquare fontSize='30px' />
            <a
              href='https://twitter.com/varimu14'
              target='_blank'
              style={{color: 'black'}}
            >
              <FaTwitterSquare fontSize='30px' />{' '}
            </a>
            <a
              href='https://www.linkedin.com/in/vanessa-rios-munoz/'
              target='_blank'
              style={{color: 'black'}}
            >
              <FaLinkedin fontSize='30px' />{' '}
            </a>
          </Box>

          {/* top, right, bottom, left */}
          <Box>
            <Typography variant='body2' color='text.secondary' align='center'>
              {'Copyright © '}
              <a
                href='https://portfolio-67iu.vercel.app/'
                style={{textDecoration: 'none', color: 'gray'}}
              >
                Vanessa Rios Muñoz
              </a>
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
