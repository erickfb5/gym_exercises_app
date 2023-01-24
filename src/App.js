import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import { ExerciseDetail, Home } from "./pages";
import { Navbar, Footer } from "./components/";

const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
