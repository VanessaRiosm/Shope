import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
// import {User} from '../../types/types'
const URL = import.meta.env.VITE_APP_URL

interface Register {
  username: string
  email: string
  password: string
  confirmPassword: string
}

// como se remplaza el any en esta interfaz
interface UsersState {
  usersList: any | null
  currentUser: any | null
  status: string
  refresh: boolean
  rol: string
}

const initialState = {
  usersList: null,
  currentUser: {},
  status: 'idle',
  refresh: true,
  rol: '',
} as UsersState

export const fetchLogin = createAsyncThunk(
  'users/fetchLogin',
  async (data: {email: string; password: string}) => {
    try {
      const response = await fetch(`${URL}/auth/login`, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      return await response.json()
    } catch (error) {
      if (error instanceof Error) console.error('Error: ', error.message)
    }
  }
)

export const fetchRegister = createAsyncThunk(
  'users/fetchRegister',
  async (data: Register) => {
    try {
      const response = await axios.post(`${URL}/users/`, data)

      return response.data
    } catch (error) {
      if (error instanceof Error) console.error('Error: ', error.message)
    }
  }
)

export const fetchGetUsers = createAsyncThunk(
  'users/fetchGetUsers',
  async () => {
    try {
      const response = await axios.get(`${URL}/users/`)

      return response.data
    } catch (error) {
      if (error instanceof Error) console.error('Error: ', error.message)
    }
  }
)

export const fetchCurrentUser = createAsyncThunk(
  'users/fetchCurrentUser',
  async () => {
    try {
      const token = window.localStorage.getItem('token')

      const response = await axios.get(`${URL}/auth/getuser`, {
        headers: {Authorization: `Bearer ${token}`},
      })

      return response.data
    } catch (error) {
      if (error instanceof Error) console.error('Error: ', error.message)
    }
  }
)

export const fetchLogOut = createAsyncThunk('users/fetchLogOut', () => {
  window.localStorage.removeItem('token')
})

export const fetchDeleteUser = createAsyncThunk(
  'users/fetchDeleteUser',
  async (uid) => {
    try {
      const token = window.localStorage.getItem('token')

      const response = await axios.delete(`${URL}/users/delete/${uid}`, {
        headers: {Authorization: `Bearer ${token}`},
      })

      return response.data
    } catch (error) {
      if (error instanceof Error) console.error('Error: ', error.message)
    }
  }
)

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      //Login
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        if (action.payload.token)
          localStorage.setItem('token', action.payload.token)

        state.status = 'success'
      })

      //Register
      .addCase(fetchRegister.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRegister.fulfilled, (state) => {
        state.refresh = !state.refresh
        state.status = 'success'
      })

      //get users

      .addCase(fetchGetUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchGetUsers.fulfilled, (state, action) => {
        state.usersList = action.payload
        state.status = 'success'
      })

      //get current user

      .addCase(fetchCurrentUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload
        state.rol = action.payload.rol
        state.status = 'success'
      })

      //refresh log out

      .addCase(fetchLogOut.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchLogOut.fulfilled, (state) => {
        state.refresh = !state.refresh
        state.status = 'success'
      })

      //Delete user
      .addCase(fetchDeleteUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDeleteUser.fulfilled, (state) => {
        state.refresh = !state.refresh
        state.status = 'success'
      })
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
