import { Box, Button, Input } from '@mui/material'
import { FC } from 'react'
import { useAppSelector } from '../store/hooks'
import { selectSearchValue } from '../store/reducers/app'

export const SearchInput: FC = () => {
    const value = useAppSelector(selectSearchValue)
    return (
        <Box
            width='100wv'
            component="form"
            noValidate
            autoComplete="off"
            sx={{ diplay: 'flex', justifyContent: 'space-evenly' }}
        >
            <Input defaultValue={value} placeholder='Чего ищем?' />
            <Button
                variant='text'
                sx={{ ml: '20px' }}
            >
                Поиск
            </Button>
        </Box>
    )
}
