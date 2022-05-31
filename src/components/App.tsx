import { Box, colors } from "@mui/material";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Book } from "../pages/Book";
import { Home } from "../pages/Home";

const App: FC = () => {
    return (
        <Box
            component='main'
            display='flex'
            justifyContent='center'
            alignItems='center'
            bgcolor={colors.grey[100]}
        >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/:bookId' element={<Book />} />
            </Routes>
            
        </Box>
    )
}

export default App;
