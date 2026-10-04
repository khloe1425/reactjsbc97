import { createRoot } from "react-dom/client";
//css dùng cho cả dự án
import "./assets/css/main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DanhSachSanPham from "./pages/LiftingStateUp/DanhSachSanPham";
import HeaderHomeRoutes from "./components/HeaderHomeRoutes";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminTemplate from "./templates/AdminTemplate";
import Dashboard from "./pages/AdminPages/Dashboard";
import ProductManagement from "./pages/AdminPages/ProductManagement";
import HomeTemplate from "./templates/HomeTemplate";
import Profile from "./pages/Profile";
import ForgotPass from "./pages/ForgotPass";

createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    {/* Thêm header dùng chung cho tất cả các trang */}
    {/* <HeaderHomeRoutes /> */}
    {/*Routes: Nhóm các trang liên quan, dùng chung 1 template */}
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<HomePage />} />
        <Route path="index" element={<HomePage />} />
        <Route path="danh-sach-san-pham" element={<DanhSachSanPham />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="forgot-password" element={<ForgotPass />} />
      </Route>
    </Routes>

    {/* admin/dashboard */}
    <Routes>
      <Route path="admin" element={<AdminTemplate />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product-management" element={<ProductManagement />} />
      </Route>

    </Routes>


  </BrowserRouter>
);


