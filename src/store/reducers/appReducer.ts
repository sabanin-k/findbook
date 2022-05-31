import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IBook } from "../../api/types";

// export const fetchBooksSearch = createAsyncThunk(
//     'searching-books',
//     async (params: Params, thunkAPI) => {
//         try {
//             const data = await booksAPI.searchBooks(params)
//             return data.items
//         } catch (error) {
//             return thunkAPI.rejectWithValue('Error! Searching failed')
//         }
//     }
// )

const appSlice = createSlice({
    name: 'app',
    initialState: {
        books: [] as IBook[],
        isFetching: false,
        error: '',
        searchValue: '',
        startIndex: 0,
        category: 'all' || 'art' || 'biography' || 'computers'
            || 'history' || 'medical' || 'poetry',
        orderBy: 'relevance' || 'newest'
    },
    reducers: {
        setBooks: (state, action: PayloadAction<IBook[]>) => {
            state.books = action.payload
        },
        loadMoreBooks: (state, action: PayloadAction<IBook[]>) => {
            state.books = [...state.books, ...action.payload]
        },        
        increaseStartIndex: (state) => {
            state.startIndex += 30
        },
        resetStartIndex: (state) => {
            state.startIndex = 0
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
        setOrder: (state, action: PayloadAction<string>) => {
            state.orderBy = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload
        }
    },
    // extraReducers: {
    //     [fetchBooksSearch.fulfilled.type]: (state, action: PayloadAction<Book[]>) => {
    //         state.books = action.payload
    //         state.isFetching = false
    //     },
    //     [fetchBooksSearch.pending.type]: (state) => {
    //         state.isFetching = true
    //     },
    //     [fetchBooksSearch.rejected.type]: (state, action: PayloadAction<string>) => {
    //         state.isFetching = false
    //         state.error = action.payload
    //     }
    // }
})

export const selectBooks = (state: RootState) => state.appReducer.books
export const selectCategory = (state: RootState) => state.appReducer.category
export const selectOrder = (state: RootState) => state.appReducer.orderBy
export const selectSearchValue = (state: RootState) => state.appReducer.searchValue
export const selectStartIndex = (state: RootState) => state.appReducer.startIndex

export const {
    setBooks,
    loadMoreBooks,
    increaseStartIndex,
    resetStartIndex,
    setCategory,
    setOrder,
    setSearchValue,
    setError,
} = appSlice.actions

export const appReducer = appSlice.reducer