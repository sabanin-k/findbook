import { Box, Button, ThemeProvider, Typography } from '@mui/material';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetBookByIdQuery } from '../store/booksAPI';
import { theme } from '../theme';

export const Book: FC = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const bookID = location.pathname.slice(1)
    const { data: book } = useGetBookByIdQuery(bookID)

    return (
        <>
            <Box
                sx={{
                    width: '70vw',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <ThemeProvider theme={theme}>
                    {book && <>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '50px',
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
                                    width='200px'
                                    src={book.volumeInfo.imageLinks.thumbnail}
                                />
                            </Box>
                            <Box>
                                <Typography
                                    component='h3'
                                    variant='h3'
                                >
                                    {book.volumeInfo.title}
                                </Typography>
                                <Typography
                                    component='p'
                                    fontFamily='Roboto, sans-serif'
                                >
                                    {book.volumeInfo.description}
                                </Typography>
                            </Box>
                        </Box>
                        <Button
                            onClick={() => navigate(-1)}
                            sx={{
                                position:'absolute',
                                top: '50px',
                                left: '50px',
                                display: {
                                    mobile: 'none',
                                    tablet: 'block'
                                }
                            }}
                        >
                            Назад
                        </Button>
                    </>}
                </ThemeProvider>
            </Box>
        </>
    )
}
