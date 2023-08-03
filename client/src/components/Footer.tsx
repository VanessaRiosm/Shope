import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
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
        display={{xs: 'grid', sm: 'flex'}}
        bgcolor={{
          xs: 'red',
          sm: 'green',
          md: 'blue',
          lg: 'pink',
          xl: 'purple',
        }}
      >
        <Box>
          <p>Regístrate y obtén un 25% de descuento</p>
          <p style={{fontWeight: 'bold', fontSize: '25px'}}>
            EN TU PRIMERA COMPRA
          </p>
        </Box>

        <Button>REGISTRARSE</Button>
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
                123 Main Street, Anytown, USA
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Email: info@example.com
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                Phone: +1 234 567 8901
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant='h6' color='text.primary' gutterBottom>
                Follow Us
              </Typography>
              <Link href='https://www.facebook.com/' color='inherit'>
                <FaFacebookSquare />
              </Link>
              <Link
                href='https://www.instagram.com/'
                color='inherit'
                sx={{pl: 1, pr: 1}}
              >
                <FaInstagramSquare />
              </Link>
              <Link href='https://www.twitter.com/' color='inherit'>
                <FaTwitterSquare />
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography variant='body2' color='text.secondary' align='center'>
              {'Copyright © '}
              <Link color='inherit' href='https://your-website.com/'>
                Your Website
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
