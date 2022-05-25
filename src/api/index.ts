import axios from "axios";
import { ISearchResponse } from "./types";

export const instanse = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/',
})

const key = '&key=AIzaSyDSdOTW_ldna3Yh7LBDW1pnKzbooqFEWm8'

export const booksAPI = {
    async searchBooks(params: Params) {
        const {value, startIndex, category, sortingBy} = params
        const res = await instanse.get<ISearchResponse>(
            `volumes?q=${value}${category !== 'all' && `+subject:${category}`}&maxResults=30&startIndex=${startIndex}&orderBy=${sortingBy}${key}`
        )
        return res.data
    }
}


export type Params = {
    value: string
    startIndex: number
    category: 'all' | 'art' | 'biography' | 'computers'
        | 'history' | 'medical' | 'poetry'
    sortingBy: 'relevance' | 'newest'
}
