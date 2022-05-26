import { Box, ThemeProvider } from '@mui/material';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { useGetBookByIdQuery } from '../store/booksAPI';
import { theme } from '../theme';

export const Book: FC = () => {
    const location = useLocation()
    const bookID = location.pathname.slice(1)
    const { data: book } = useGetBookByIdQuery(bookID)

    return (
        <ThemeProvider theme={theme}>
            {book
                && <Box
                    sx={{
                        display: 'flex',
                        flexDirection: {
                            mobile: 'column',
                            tablet: 'row'
                        }
                    }}
                >
                    <Box>
                        <Box
                            component='img'
                            boxShadow={2}
                            sx={{
                                maxWidth: {
                                    mobile: '200px',
                                    tablet: '400px'
                                }
                            }}
                            src={book.volumeInfo.imageLinks.thumbnail}
                        />
                    </Box>
                    <Box>
                        {book.volumeInfo.description}
                    </Box>
                </Box>}
        </ThemeProvider>
    )
}
