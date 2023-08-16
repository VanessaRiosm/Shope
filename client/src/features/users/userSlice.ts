import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

// como se remplaza el any en esta interfaz
interface UsersState {
  usersList: any | null
  user: any | null
  status: string
  rol: string
}

const initialState = {
  usersList: null,
  user: null,
  status: 'idle',
  rol: 'other',
} as UsersState

export const fetchLogin: any = createAsyncThunk(
  'users/fetchLogin',
  async (data: any) => {
    try {
      const response = await fetch(`${URL}/auth/login`, {
        method: 'POST',
        mode: 'cors', //cors para localhost no-cors para deploy
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      return await response.text()
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

export const userSlice: any = createSlice({
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
        // if (action.payload.token)
        //   localStorage.setItem('token', action.payload.token)

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
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
