import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { CounterState } from "../app/interfaces"
import { fetchCount } from "./api/counter.api"
import { RootState } from "./store"


const initialState: CounterState = {
    value: 0,
    status: 'idle'
}

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount: number) => {
        const response = await fetchCount(amount)

        return response.data
    }
)


export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(incrementAsync.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(incrementAsync.fulfilled, (state, action) => {
            state.status = 'idle'
            state.value += action.payload
          })
          .addCase(incrementAsync.rejected, (state) => {
            state.status = 'failed'
          })
      },
})


export const counterActions = counterSlice.actions
export const counterReducer = counterSlice.reducer
export const selectCount = (state: RootState) => state.counter.value
