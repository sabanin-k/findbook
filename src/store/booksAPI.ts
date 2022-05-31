import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ISearchResponse } from '../api/types'
import { loadMoreBooks, setBooks, setError } from './reducers/appReducer'

export const booksAPI = createApi({
    reducerPath: 'booksAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://www.googleapis.com/books/v1/',
        prepareHeaders: (header) => {
            header.set('Authorization', 'AIzaSyDSdOTW_ldna3Yh7LBDW1pnKzbooqFEWm8')
            return header
        }
     }),
    endpoints: (builder) => ({
        getBooksByParams: builder.query<ISearchResponse, IQueryParams>({
            query: ({
                value,
                startIndex,
                category,
                orderBy
            }) => 
                `volumes?q=${value}${category !== 'all' && `+subject:${category}`}&maxResults=30&startIndex=${startIndex}${orderBy !== 'relevance' ? `&orderBy=${orderBy}` : ''}`,
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled
                    dispatch(setBooks(data.items))
                } catch (error) {
                    if (typeof error === 'string') {
                        dispatch(setError(error))
                    } else if (error instanceof Error) {
                        dispatch(setError(error.message))
                    }
                }
            }
        }),
        loadMoreBooks: builder.query<ISearchResponse, IQueryParams>({
            query: ({
                value,
                startIndex,
                category,
                orderBy
            }) => 
                `volumes?q=${value}${category !== 'all' && `+subject:${category}`}&maxResults=30&startIndex=${startIndex}&orderBy=${orderBy}`,
            onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
                try {
                    const { data } = await queryFulfilled
                    dispatch(loadMoreBooks(data.items))
                } catch (error) {
                    if (typeof error === 'string') {
                        dispatch(setError(error))
                    } else if (error instanceof Error) {
                        dispatch(setError(error.message))
                    }
                }
            }
        }),
        getBookById: builder.query({
            query: (id: string) => `volumes/${id}`
        })
    })
})

export const {
    useGetBooksByParamsQuery,
    useLazyGetBooksByParamsQuery,
    useLazyLoadMoreBooksQuery,
    useGetBookByIdQuery
} = booksAPI


export interface IQueryParams{
    value: string
    startIndex: number
    category: string
    orderBy: string
}