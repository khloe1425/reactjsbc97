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
import Detail from "./pages/Detail";
import GetAllProduct from "./pages/DemoAPI/GetAllProduct";
import CreateProduct from "./pages/AdminPages/CreateProduct";
import EditProduct from "./pages/AdminPages/EditProduct";
import CreateAndEditProduct from "./pages/AdminPages/CreateAndEditProduct";
// Import Provider, store: kết nối store, redux với ứng dụng
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChangeNumberRedux from "./pages/DemoRedux/ChangeNumberRedux";
import BTXemChiTietRedux from "./pages/DemoRedux/BTXemChiTietRedux";
import BTGioHang from "./pages/DemoRedux/BTGioHang";
import HookToiUu from "./pages/HookToiUu/HookToiUu";
import DemoCustomHook from "./pages/HookToiUu/DemoCustomHook";
import HOCDemo from "./pages/HOCDemo/HOCDemo";

createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <Provider store={store}>


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
          <Route path="detail/:id" element={<Detail />} />
          <Route path="get-all-product" element={<GetAllProduct />} />

          <Route path="change-number-redux" element={<ChangeNumberRedux />} />
          <Route path="bt-chi-tiet-redux" element={<BTXemChiTietRedux />} />
          <Route path="bt-gio-hang-redux" element={<BTGioHang />} />

          <Route path="hook-toi-uu" element={<HookToiUu />} />
          <Route path="custom-hook" element={<DemoCustomHook />} />
          <Route path="hoc-demo" element={<HOCDemo />} />

        </Route>
      </Routes>

      {/* admin/dashboard */}
      <Routes>
        <Route path="admin" element={<AdminTemplate />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<ProductManagement />} />
          <Route path="products/create" element={<CreateProduct />} />
          <Route path="products/edit/:id" element={<EditProduct />} />
          <Route path="product/:id?" element={<CreateAndEditProduct />} />

        </Route>

      </Routes>

    </Provider>

  </BrowserRouter>
);


