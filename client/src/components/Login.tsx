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
import {Container} from '@mui/material'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {useState} from 'react'
import {fetchLogin} from '../features/users/userSlice'

const formSchema = Yup.object().shape({
  email: Yup.string()
    .required('campo requerido')
    .max(50, 'maximo 50 caracteres')
    .matches(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/, 'correo electronico invalido'),

  password: Yup.string()
    .required('campo requerido')
    .min(8, 'minimo 8 caracteres')
    .max(16, 'maximo 15 caracteres'),
})

export const Login = () => {
  const history = useNavigate()
  const dispatch = useDispatch()

  const [viewError, setViewError] = useState('noShow')

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
              <AiOutlineUser size='35px' />
              <Typography component='h1' variant='h5'>
                Inicia Sesión
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
                    Usuario o contraseña incorrecta
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
                  onSubmit={async (values: any) => {
                    try {
                      const resp = await dispatch(fetchLogin(values))
                      // console.log(resp.payload)
                      if (resp.payload.token) {
                        history('/', {replace: true})
                      } else if (resp.payload === 'no user found') {
                        setViewError('show')
                      } else console.log('ninguno sirve')
                    } catch (error) {
                      throw Error
                    }
                  }}
                >
                  <Form>
                    <FormGroup>
                      <label htmlFor='email' id='email'>
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

                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      sx={{mt: 3, mb: 2}}
                    >
                      {' '}
                      Entrar
                    </Button>
                    <Grid container>
                      <Grid>
                        <Link
                          to={'/Register'}
                          style={{
                            textDecoration: 'none',
                            color: '#107acc',
                            margin: '20px 0 10px 0',
                          }}
                        >
                          {'¿No tienes cuenta? Registrate'}
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
