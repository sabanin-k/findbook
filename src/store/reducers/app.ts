import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { booksAPI, Params } from "../../api";
import { Book } from "../../api/types";

export const fetchBooksSearch = createAsyncThunk(
    'searching-books',
    async (params: Params, thunkAPI) => {
        try {
            const data = await booksAPI.searchBooks(params)
            return data.items
        } catch (error) {
            return thunkAPI.rejectWithValue('Error! Searching failed')
        }
    }
)

const appSlice = createSlice({
    name: 'app',
    initialState: {
        books: [] as Book[],
        isFetching: false,
        error: '',
        startIndex: 0,
        category: 'all' || 'art' || 'biography' || 'computers'
            || 'history' || 'medical' || 'poetry',
        sortingBy: 'relevance' || 'newest'
    },
    reducers: {
        increaseStartIndex: (state) => {
            state.startIndex += 30
        },
        resetStartIndex: (state) => {
            state.startIndex = 0
        }
    },
    extraReducers: {
        [fetchBooksSearch.fulfilled.type]: (state, action: PayloadAction<Book[]>) => {
            state.books = action.payload
            state.isFetching = false
        },
        [fetchBooksSearch.pending.type]: (state) => {
            state.isFetching = true
        },
        [fetchBooksSearch.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isFetching = false
            state.error = action.payload
        }
    }
})

export const {
    increaseStartIndex,
    resetStartIndex
} = appSlice.actions

export const appReducer = appSlice.reducer