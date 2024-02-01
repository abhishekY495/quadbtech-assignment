import React from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { HomePage } from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import { ShowDetailsPage } from "./pages/ShowDetailsPage";

export const App = () => {
  return (
    <div className="mb-56">
      <Toaster position="top-center" />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/show/:id" element={<ShowDetailsPage />} />
      </Routes>
    </div>
  );
};
