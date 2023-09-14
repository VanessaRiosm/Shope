import {
  Button,
  CssBaseline,
  FormGroup,
  Paper,
  Box,
  Grid,
  Typography,
  Alert,
} from '@mui/material'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import {fetchRegister} from '../features/users/userSlice'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import loginImage from '../images/loginImage.png'

const formSchema = Yup.object().shape({
  username: Yup.string()
    .required('required field')
    .min(3, 'minimum 3 characters')
    .max(25, 'maximum 15 characters'),

  email: Yup.string()
    .required('required field')
    .max(50, 'maximum 50 characters')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'invalid email address'),

  password: Yup.string()
    .required('required field')
    .min(8, 'minimum 8 characters')
    .max(15, 'maximum 15 characters'),

  confirmPassword: Yup.string()
    .required('required field')
    .oneOf([Yup.ref('password')], 'the password does not match'),
})

export const Register = () => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const [viewSuccess, setViewSuccess] = useState('noShow')

  return (
    <Box display='flex' justifyContent='center' mb='30px' mt='-40px'>
      <Box width='1000px'>
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
                  Sign Up
                </Typography>

                {viewSuccess === 'show' ? (
                  <div>
                    <Alert severity='success' sx={{mt: '10px', width: '100%'}}>
                      User successfully created
                    </Alert>
                  </div>
                ) : null}

                <Box mt='20px' width='100%'>
                  <Formik
                    initialValues={{
                      username: '',
                      email: '',
                      password: '',
                      confirmPassword: '',
                    }}
                    validationSchema={formSchema}
                    onSubmit={async (values: any, {resetForm}) => {
                      resetForm()
                      dispatch(fetchRegister(values))
                      setViewSuccess('show')
                      setTimeout(() => {
                        history('/login', {replace: true})
                      }, 1500)
                    }}
                  >
                    <Form>
                      <FormGroup>
                        <label
                          htmlFor='username'
                          id='username'
                          style={{marginTop: '10px'}}
                        >
                          {' '}
                          Username:
                        </label>

                        <Field
                          name='username'
                          placeholder='Yourname123'
                          type='user'
                          style={{
                            margin: '5px 0px 0px 0px',
                            padding: '7px',
                            width: '100%',
                            height: '45px',
                          }}
                        />

                        <Typography color='red'>
                          <ErrorMessage name='username' />
                        </Typography>
                      </FormGroup>

                      <FormGroup>
                        <label
                          htmlFor='email'
                          id='email'
                          style={{marginTop: '10px'}}
                        >
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

                      <FormGroup>
                        <label
                          htmlFor='confirmPassword'
                          id='confirmPassword'
                          style={{marginTop: '10px'}}
                        >
                          {' '}
                          Confirm Password:
                        </label>
                        <Field
                          name='confirmPassword'
                          placeholder=' Confirm Password *'
                          type='password'
                          style={{
                            margin: '10px 0px 0px 0px',
                            padding: '7px',
                            width: '100%',
                            height: '45px',
                          }}
                        />
                        <Typography color='red'>
                          <ErrorMessage name='confirmPassword' />
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
                        Sign Up
                      </Button>
                      <Grid container>
                        <Grid>
                          <Link
                            to={'/login'}
                            style={{
                              textDecoration: 'none',
                              color: '#4518D9',
                              margin: '20px 0 10px 0',
                            }}
                          >
                            {'Already have an account? Sign In'}
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
