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
import {Container} from '@mui/material'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {fetchRegister} from '../features/users/userSlice'
import {useDispatch} from 'react-redux'
import {useState} from 'react'

const formSchema = Yup.object().shape({
  username: Yup.string()
    .required('Campo Requerido')
    .min(5, 'minimo 5 caracteres')
    .max(25, 'maximo 25 caracteres'),

  email: Yup.string()
    .required('Campo Requerido')
    .max(50, 'maximo 50 caracteres')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'correo electronico invalido'),

  password: Yup.string()
    .required('Campo Requerido')
    .min(8, 'minimo 8 caracteres')
    .max(15, 'maximo 15 caracteres'),

  confirmPassword: Yup.string()
    .required('Campo Requerido')
    .oneOf([Yup.ref('password')], 'la contraseña no coincide'),
})

export const Register = () => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const [viewSuccess, setViewSuccess] = useState('noShow')

  return (
    <Container component='main' maxWidth='lg'>
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
              backgroundImage: 'url(https://source.unsplash.com/random)',
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
                  src='https://static.vecteezy.com/system/resources/previews/003/275/730/original/shopping-bag-store-logo-online-shopping-logo-design-free-vector.jpg'
                  style={{width: '100px', height: '100px'}}
                />
              </Link>
              <Typography component='h1' variant='h5'>
                Regístrate
              </Typography>

              {viewSuccess === 'show' ? (
                <div>
                  <Alert severity='success' sx={{mt: '10px', width: '100%'}}>
                    Usuario creado existosamente
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
                        Nombre de usuario:
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
                        Correo Electronico:
                      </label>

                      <Field
                        name='email'
                        placeholder='Ejemplo@gmail.com'
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
                        Contraseña:
                      </label>
                      <Field
                        name='password'
                        placeholder='Contraseña *'
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
                        Confirmar Contraseña:
                      </label>
                      <Field
                        name='confirmPassword'
                        placeholder='Confirmar contraseña *'
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
                      Registrarme
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
                          {'¿Ya tienes cuenta? Inicia Sesión'}
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
    </Container>
  )
}
