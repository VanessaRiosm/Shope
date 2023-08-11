import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = import.meta.env.VITE_APP_URL

// como se remplaza el any en esta interfaz
interface UsersState {
  user: any | null
  status: string
  rol: string
}

const initialState = {
  user: null,
  status: 'idle',
  rol: 'other',
} as UsersState

// export const fetchLogin: any = createAsyncThunk(
//   'users/fetchLogin',
//   async (data: any) => {
//     const response = await axios.post(`${URL}/auth/login`, data)

//     return response.data
//   }
// )

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
        // if (action.payload.token)
        //   localStorage.setItem('token', action.payload.token)

        state.status = 'success'
      })
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
