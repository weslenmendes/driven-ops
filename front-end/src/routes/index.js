import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./../pages/Home";
import AllStudents from "../pages/AllStudents";

export default function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<AllStudents />} />
      </Routes>
    </BrowserRouter>
  );
}
