import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import {Link} from 'react-router-dom'
import Grid from '@mui/material/Grid'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from 'react-icons/fa'
import {Box, Button} from '@mui/material'

export const Footerr = () => {
  return (
    <Box>
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
            <p>Regístrate y obtén un 25% de descuento</p>
            <p style={{fontWeight: 'bold', fontSize: '25px'}}>
              EN TU PRIMERA COMPRA
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
              REGISTRARSE
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        component='footer'
        marginTop='60px'
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
      >
        <Container maxWidth='lg'>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' color='text.primary' gutterBottom>
                About Us
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                We are XYZ company, dedicated to providing the best service to
                our customers.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' color='text.primary' gutterBottom>
                Contact Us
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                linkedIn: nomeseelenlace.com
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Email: vanessa.riosm571@gmail.com
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Phone: +57 3025061093
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' color='text.primary' gutterBottom>
                Follow Us
              </Typography>
              <a href='https://www.facebook.com/'>
                <FaFacebookSquare
                  style={{color: '#4518D9', fontSize: '30px'}}
                />
              </a>
              <a href='https://www.instagram.com/'>
                <FaInstagramSquare
                  style={{color: '#4518D9', fontSize: '30px'}}
                />
              </a>
              <a href='https://www.twitter.com/'>
                <FaTwitterSquare style={{color: '#4518D9', fontSize: '30px'}} />
              </a>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant='body2' color='text.secondary' align='center'>
              {'Copyright © '}
              <a
                href='https://portfolio-67iu.vercel.app/'
                style={{textDecoration: 'none', color: 'gray'}}
              >
                Vanessa Rios Muñoz
              </a>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
