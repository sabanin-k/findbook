import { Box, Button, Input } from '@mui/material'
import { FC } from 'react'
import { useAppSelector } from '../store/hooks'
import { selectSearchValue } from '../store/reducers/appReducer'

export const SearchInput: FC<Props> = ({ fetchBooks }) => {
    const value = useAppSelector(selectSearchValue)
    return (
        <Box
            onSubmit={(e: React.SyntheticEvent) => {
                e.preventDefault()
                fetchBooks()
            }}
            width='100wv'
            component="form"
            noValidate
            autoComplete="off"
            sx={{ diplay: 'flex', justifyContent: 'space-evenly' }}
        >
            <Input
                defaultValue={value}
                placeholder='Чего ищем?' />
            <Button
                type='submit'
                variant='text'
                sx={{ ml: '20px' }}
            >
                Поиск
            </Button>
        </Box>
    )
}


interface Props{
    fetchBooks: any
}