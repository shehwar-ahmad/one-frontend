import { Routes, Route } from "react-router";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </>
  );
};
