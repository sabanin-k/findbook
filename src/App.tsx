import { Box } from "@mui/material";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { BookModal } from "./pages/BookModal";
import { Home } from "./pages/Home";

const App: FC = () => {
    return (
        <Box
        component='main'
        display='flex'
        justifyContent='center'
        alignItems='center'
        >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path=':bookId' element={<BookModal />} />
            </Routes>
            
        </Box>
    )
}

export default App;
