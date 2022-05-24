import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const booksAPI = createApi({
    reducerPath: 'booksAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
    endpoints: (builder) => ({
        getBooksByParams: builder.query({
            query: ({
                value,
                startIndex,
                category,
                sortingBy
            }) => 
                `volumes?q=${value}${category !== 'all' && `+subject:${category}`}&maxResults=30&startIndex=${startIndex}&orderBy=${sortingBy}`
        })
    })
})

export const { useGetBooksByParamsQuery } = booksAPI