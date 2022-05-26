import { colors, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { IBook } from '../api/types'

export const BookCard: FC<Props> = ({ book }) => {
    return (
        <Link
            to={`/${book.id}`}
            style={{ textDecoration: 'none' }}
        >
            <Box
                minHeight='300px'
                width='200px'
                bgcolor={colors.grey[100]}
                borderRadius='5px'
                padding='10px'
                display='flex'
                flexDirection='column'
                justifyContent='space-around'
                sx={{ boxShadow:'5px 5px 10px rgba(70,70,70,0.12)' }}
            >

                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Box
                        component='img'
                        maxWidth='100px'
                        boxShadow={2}
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                    />
                </Box>
                <Box>
                    <Typography
                        component='p'
                        color='gray'
                        fontSize='12px'
                        sx={{ textDecoration: 'underline', mb: '10px' }}
                    >
                        {book.volumeInfo.categories}
                    </Typography>
                    <Typography
                        component='strong'
                        fontWeight='900'
                        color='black'
                    >
                        {book.volumeInfo.title}
                    </Typography>
                    <Typography
                        component='p'
                        color='gray'
                        fontSize='12px'
                    >
                        {book.volumeInfo.authors}
                    </Typography>
                </Box>
            </Box>
        </Link>
    )
}

interface Props {
    book: IBook
}
