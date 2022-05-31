import { Box, Button, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IBook } from "../api/types";
import { BookCard } from "../components/BookCard";
import { SearchInput } from "../components/SearchInput";
import { SelectCategories } from "../components/SelectCategories";
import { SelectSorting } from "../components/SelectSorting";
import { useGetBooksByParamsQuery, useLazyGetBooksByParamsQuery } from "../store/booksAPI";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increaseStartIndex, selectBooks, selectCategory, selectOrder, selectSearchValue, selectStartIndex } from "../store/reducers/appReducer";

export const Home: FC = () => {
    const dispatch = useAppDispatch()

    const category = useAppSelector(selectCategory)
    const orderBy = useAppSelector(selectOrder)
    const startIndex = useAppSelector(selectStartIndex)
    const value = useAppSelector(selectSearchValue)
    const books = useAppSelector(selectBooks)

    useGetBooksByParamsQuery({ category, orderBy, value, startIndex })
    // useEffect(() => {
    //     if (data) {
    //         setBooks(data.items)
    //         dispatch(increaseStartIndex)
    //     }
    // }, [data, dispatch])

    const [fetchBooks, isLoading] = useLazyGetBooksByParamsQuery()

    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            gap='10px'
        >
            <Typography
                variant='h2'
                component='h1'
            >
                Findbook!
            </Typography>
            <SearchInput fetchBooks={fetchBooks} />
            <Box
                display='flex'
                justifyContent='space-around'
                gap='10px'
            >
                <SelectCategories
                    selectValues={['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']} />
                <SelectSorting
                    selectValues={['relevance', 'newest']} />
            </Box>
            {isLoading && <p>Loading...</p>}
            <Box
                maxWidth='65vw'
                display='flex'
                justifyContent='center'
                gap='20px'
                flexWrap='wrap'
                marginTop='20px'
            >
                {books.length
                    ? books?.map((book: IBook) => {
                        return (
                            <Box
                                key={book.id}
                                display='flex'
                                flexDirection='row'
                                alignItems='baseline'
                                flexWrap='wrap'
                            >
                                <BookCard book={book} />
                            </Box>
                        )
                    })
                    : !isLoading && <p>Ничего нет</p>}
            </Box>
            {<Button>
                Загрузть еще
            </Button>}
        </Box>
    );
}
