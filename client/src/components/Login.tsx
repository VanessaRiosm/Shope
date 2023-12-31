import {
  Button,
  Alert,
  CssBaseline,
  FormGroup,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import {useAppDispatch} from '../hooks'
import {useState} from 'react'
import {fetchCurrentUser, fetchLogin} from '../features/users/userSlice'
import loginImage from '../images/loginImage.png'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('required field')
    .max(50, 'maximum 50 characters')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'invalid email address'),

  password: Yup.string()
    .required('required field')
    .min(8, 'minimum 8 characters')
    .max(15, 'maximum 15 characters'),
})

export const Login = () => {
  const history = useNavigate()
  const dispatch = useAppDispatch()

  const [viewError, setViewError] = useState('noShow')

  return (
    <Box display='flex' justifyContent='center'>
      <Box width='900px'>
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Grid container>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${loginImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light'
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* aqui empieza el formulario */}

            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Link to={'/'}>
                  <img
                    src='../../shopelogo.png'
                    style={{width: '90px', height: '90px'}}
                  />
                </Link>
                <Typography component='h1' variant='h5'>
                  Sign In
                </Typography>

                {viewError === 'show' ? (
                  <div>
                    <Alert
                      onClose={() => {
                        setViewError('noShow')
                      }}
                      severity='error'
                      sx={{mt: '10px', width: '100%'}}
                    >
                      Incorrect user or password
                    </Alert>
                  </div>
                ) : null}

                <Box mt='20px' width='100%'>
                  <Formik
                    initialValues={{
                      email: '',
                      password: '',
                    }}
                    validationSchema={formSchema}
                    onSubmit={async (values: {
                      email: string
                      password: string
                    }) => {
                      try {
                        const resp = await dispatch(fetchLogin(values))
                        await dispatch(fetchCurrentUser())

                        if (resp) {
                          if (resp.payload.token) {
                            history('/', {replace: true})
                          } else {
                            setViewError('show')
                          }
                        } else console.log('bad response')
                      } catch (error) {
                        throw Error
                      }
                    }}
                  >
                    <Form>
                      <FormGroup>
                        <label htmlFor='email' id='email'>
                          {' '}
                          Email:
                        </label>

                        <Field
                          name='email'
                          placeholder='Example@gmail.com'
                          type='email'
                          style={{
                            margin: '5px 0px 0px 0px',
                            padding: '7px',
                            width: '100%',
                            height: '45px',
                          }}
                        />

                        <Typography color='red'>
                          <ErrorMessage name='email' />
                        </Typography>
                      </FormGroup>

                      <FormGroup>
                        <label
                          htmlFor='password'
                          id='password'
                          style={{marginTop: '10px'}}
                        >
                          {' '}
                          Password:
                        </label>
                        <Field
                          name='password'
                          placeholder='Password *'
                          type='password'
                          style={{
                            margin: '10px 0px 0px 0px',
                            padding: '7px',
                            width: '100%',
                            height: '45px',
                          }}
                        />
                        <Typography color='red'>
                          <ErrorMessage name='password' />
                        </Typography>
                      </FormGroup>

                      <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        style={{
                          backgroundColor: '#4518D9',
                        }}
                        sx={{mt: 3, mb: 2}}
                      >
                        {' '}
                        Sign in
                      </Button>
                      <Grid container>
                        <Grid>
                          <Link
                            to={'/register'}
                            style={{
                              textDecoration: 'none',
                              color: '#4518D9',
                              margin: '20px 0 10px 0',
                            }}
                          >
                            {'Dont have an account? Sign Up'}
                          </Link>
                        </Grid>
                      </Grid>
                    </Form>
                  </Formik>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
