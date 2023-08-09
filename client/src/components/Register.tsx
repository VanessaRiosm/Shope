import {
  Button,
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
import {Link} from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'

const formSchema = Yup.object().shape({
  username: Yup.string()
    .required('Campo Requerido')
    .min(5, 'minimo 5 caracteres')
    .max(25, 'maximo 25 caracteres'),

  email: Yup.string()
    .required('Campo Requerido')
    .email('correo electronico invalido')
    .max(25, 'maximo 25 caracteres'),

  password: Yup.string()
    .required('Campo Requerido')
    .min(5, 'minimo 5 caracteres')
    .max(15, 'maximo 15 caracteres'),

  ConfirmPassword: Yup.string()
    .required('Campo Requerido')
    .oneOf([Yup.ref('Password')], 'la contraseña no coincide'),
})

export const Register = () => {
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
                Regístrate
              </Typography>

              <Box mt='20px' width='100%'>
                <Formik
                  initialValues={{
                    username: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                  }}
                  validationSchema={formSchema}
                  onSubmit={(values: any) => console.log(values)}
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
                        <ErrorMessage name='username' component='div' />
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
                        <ErrorMessage name='email' component='div' />
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
                        <ErrorMessage name='password' component='div' />
                      </Typography>
                    </FormGroup>

                    <FormGroup>
                      <label
                        htmlFor='ConfirmPassword'
                        id='ConfirmPassword'
                        style={{marginTop: '10px'}}
                      >
                        {' '}
                        Confirmar Contraseña:
                      </label>
                      <Field
                        name='ConfirmPassword'
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
                        <ErrorMessage name='ConfirmPassword' component='div' />
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
                          to={'/login'}
                          style={{
                            textDecoration: 'none',
                            color: '#107acc',
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
