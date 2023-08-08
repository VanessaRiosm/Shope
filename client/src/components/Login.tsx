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
  Email: Yup.string()
    .required('campo requerido')
    .email('correo electronico invalido')
    .max(25, 'maximo 25 caracteres'),

  Password: Yup.string()
    .required('campo requerido')
    .min(5, 'minimo 5 caracteres')
    .max(15, 'maximo 15 caracteres'),
})

export const Login = () => {
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

              <Box mt='20px' width='100%'>
                <Formik
                  initialValues={{
                    Email: '',
                    Password: '',
                  }}
                  validationSchema={formSchema}
                  onSubmit={(values) => console.log(values)}
                >
                  <Form>
                    <FormGroup>
                      <label htmlFor='Email' id='Email'>
                        {' '}
                        Correo Electronico:
                      </label>

                      <Field
                        name='Email'
                        placeholder='Ejemplo@gmail.com'
                        type='email'
                        style={{
                          margin: '5px 0px 0px 0px',
                          padding: '7px',
                          width: '100%',
                          height: '45px',
                        }}
                      />

                      <ErrorMessage
                        name='Email'
                        component='label'
                        style={{
                          color: 'red',
                          marginBottom: '5px',
                        }}
                      />
                    </FormGroup>

                    <FormGroup>
                      <label
                        htmlFor='Password'
                        id='Password'
                        style={{marginTop: '10px'}}
                      >
                        {' '}
                        Contraseña:
                      </label>
                      <Field
                        name='Password'
                        placeholder='Contraseña *'
                        type='password'
                        style={{
                          margin: '10px 0px 0px 0px',
                          padding: '7px',
                          width: '100%',
                          height: '45px',
                        }}
                      />
                      <ErrorMessage
                        name='Password'
                        component='label'
                        style={{
                          color: 'red',
                          marginBottom: '5px',
                        }}
                      />
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
                          to={'#'}
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