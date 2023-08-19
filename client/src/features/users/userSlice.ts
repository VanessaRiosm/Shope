import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

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

export const fetchLogin: any = createAsyncThunk(
  'users/fetchLogin',
  async (data: any) => {
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
    } catch (err: any) {
      return err.message
    }
  }
)

export const fetchRegister: any = createAsyncThunk(
  'users/fetchRegister',
  async (data: any) => {
    const response = await axios.post(`${URL}/users/`, data)

    return response.data
  }
)

export const fetchGetUsers: any = createAsyncThunk(
  'users/fetchGetUsers',
  async () => {
    const response = await axios.get(`${URL}/users/`)

    return response.data
  }
)

export const fetchCurrentUser: any = createAsyncThunk(
  'users/fetchCurrentUser',
  async () => {
    const token = window.localStorage.getItem('token')

    const response = await axios.get(`${URL}/auth/getuser`, {
      headers: {Authorization: `Bearer ${token}`},
    })

    return response.data
  }
)

export const fetchLogOut: any = createAsyncThunk('users/fetchLogOut', () => {
  window.localStorage.removeItem('token')
})

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
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
