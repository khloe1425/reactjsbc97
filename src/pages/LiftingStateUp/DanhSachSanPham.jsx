import React, { useState } from "react";
import SanPham from "./SanPham";
import SanPhamChiTiet from "./SanPhamChiTiet";
import GioHang from "./GioHang";

const data = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./phone/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./phone/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./phone/applephone.jpg",
  },
];
const DanhSachSanPham = () => {
  const [sanPham, setSanPham] = useState({
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./phone/vsphone.jpg",
  });

  let [gioHang, setGioHang] = useState([]);
  //state nằm ở đâu, hàm xử lý setState nằm ở component đó
  const themGioHang = (spClick) => {
    //tạo ra 1 sp mới có trường số lượng
    const spThem = { ...spClick, soLuong: 1 };
    //khi click vào themgiohang -> xử lý 2 trường hợp
    //1. sảm phẩm đã có trong giỏ hàng
    //2. sảm phẩm chưa có trong giỏ hàng

    const sp = gioHang.find((item) => item.maSP === spThem.maSP);
    if (sp) {
      sp.soLuong += 1;
      const newGioHang = [...gioHang];
      setGioHang(newGioHang);
    } else {
      const newGioHang = [...gioHang, spThem];
      setGioHang(newGioHang);
    }
    //tạo ra giò hàng mới và xử lý setState cho giỏ hàng
    // let newGioHang = [...gioHang];
    // setGioHang(newGioHang);
  };

  const xoaGioHang = (maSP) => {
    let gioHangUpdate = [...gioHang.filter((item) => item.maSP !== maSP)];

    setGioHang(gioHangUpdate);
  };

  const renderSanPham = () => {
    const sanPham = data.map((item) => {
      return (
        <div className="col-4" key={item.maSP}>
          <SanPham
            item={item}
            setSanPham={setSanPham}
            themGioHang={themGioHang}
          />
        </div>
      );
    });
    return sanPham;
  };

  return (
    <div className="container">
      <h3 className="text-center">Danh sách sản phẩm</h3>
      <div className="row">{renderSanPham()}</div>
      <GioHang gioHang={gioHang} xoaGioHang={xoaGioHang} />
      <SanPhamChiTiet sanPham={sanPham} />
    </div>
  );
};

export default DanhSachSanPham;
