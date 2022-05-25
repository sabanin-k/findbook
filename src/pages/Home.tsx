import { Box, Button, colors, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IBook } from "../api/types";
import { BookCard } from "../components/BookCard";
import { SearchInput } from "../components/SearchInput";
import { SelectCategories } from "../components/SelectCategories";
import { SelectSorting } from "../components/SelectSorting";
import { useGetBooksByParamsQuery, useLazyGetBooksByParamsQuery } from "../store/booksAPI";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { increaseStartIndex, selectCategory, selectSearchValue, selectOrder, selectStartIndex } from "../store/reducers/app";

export const Home: FC = () => {
    const dispatch = useAppDispatch()

    const category = useAppSelector(selectCategory)
    const orderBy = useAppSelector(selectOrder)
    const startIndex = useAppSelector(selectStartIndex)
    const value = useAppSelector(selectSearchValue)
    const [books, setBooks] = useState([])

    const { data, isLoading } = useGetBooksByParamsQuery({ category, orderBy, value, startIndex })
    useEffect(() => {
        if (data) {
            setBooks(data.items)
            dispatch(increaseStartIndex)
        }
    }, [data, dispatch])

    const [fetchBooks] = useLazyGetBooksByParamsQuery()

    const handleLoadMore = () => {
        // TODO add load more logic

    }

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
            <SearchInput />
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
                    ? books.map((book: IBook) => {
                        return (
                            <Box
                                display='flex'
                                flexDirection='row'
                                alignItems='baseline'
                                flexWrap='wrap'
                            >
                                <BookCard key={book.id} book={book} />
                            </Box>
                        )
                    })
                    : !isLoading && <p>Ничего нет</p>}
            </Box>
            <Button
                onClick={fetchBooks}
            >
                Загрузть еще
            </Button>
        </Box>
    );
}
