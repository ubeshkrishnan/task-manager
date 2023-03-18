import { configureStore } from '@reduxjs/toolkit'
import task from "./api/task";

export const store = configureStore({
  reducer: {
    task:task,
  },
})

