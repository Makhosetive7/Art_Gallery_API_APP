import { configureStore } from '@reduxjs/toolkit'
import { bobsburgersApi } from "../services/bobsburgersAPI"

export const store = configureStore({
  reducer: {
    [bobsburgersApi.reducerPath]: bobsburgersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(bobsburgersApi.middleware),
})
