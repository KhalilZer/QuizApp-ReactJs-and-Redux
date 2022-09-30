import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from 'react-router-dom'
import Questions from './pages/Questions';
import FinalScreen from './pages/FinalScreen';
import { Box, Container } from "@mui/system";

import Header from "./Layouts/Header";

function App() {
  return (
    <Router>
      <Container  maxWidth="sm" p="20">
        <Box p="10"  sx={{  boxShadow: 4, borderRadius:'40px'}} mt="10">
         
        <Header></Header>
          <Routes>
             
              <Route path='/' element={<Questions/>}></Route>
              <Route path='/finalScreen' element={<FinalScreen/>}></Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}


export default App;
