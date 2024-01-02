import { configureStore } from '@reduxjs/toolkit'
import binarySlice from './binarySlice'
export const store = configureStore({
  reducer: {
    binary:binarySlice
  },
})