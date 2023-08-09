import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://localhost:3000'

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

export const fetchLogin: any = createAsyncThunk(
  'users/fetchLogin',
  async (data: any) => {
    console.log(data)
    const response = await axios.post(`${URL}/auth/login`, data)

    return response.data
  }
)

export const userSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        // Add user to the state array
        state.status = 'loading'
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log(action.payload)
        localStorage.setItem('token', action.payload)
        state.status = 'success'
      })
  },
})

export const {} = userSlice.actions
export default userSlice.reducer
