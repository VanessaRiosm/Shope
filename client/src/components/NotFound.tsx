import {Box, Button, Container, Typography} from '@mui/material'
import Grid from '@mui/material/Grid'
import {Link} from 'react-router-dom'

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth='md'>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant='h1'>404</Typography>
            <Typography variant='h6'>
              The page you’re looking for doesn’t exist.
            </Typography>

            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
              <Button variant='contained' sx={{mt: '30px', bgcolor: '#4518D9'}}>
                Back Home
              </Button>
            </Link>
          </Grid>
          <Grid xs={6}>
            <img
              src='https://static-00.iconduck.com/assets.00/9-404-error-illustration-2048x908-vp03fkyu.png'
              alt=''
              width={500}
              height={250}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
