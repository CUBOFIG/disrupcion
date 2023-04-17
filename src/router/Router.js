import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "views/Home";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
