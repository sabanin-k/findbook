import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { booksAPI } from "./booksAPI";
import { appReducer } from './reducers/app'

export const store = configureStore({
    reducer: {
        appReducer,
        [booksAPI.reducerPath]: booksAPI.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(booksAPI.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>