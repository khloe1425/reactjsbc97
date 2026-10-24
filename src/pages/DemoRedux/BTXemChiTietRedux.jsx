import React from 'react'
import SanPhamRedux from './SanPhamRedux';
import SanPhamChiTietRedux from './SanPhamChiTietRedux';

/**
 * B1: Xây dựng UI
 * B2: Binding data không liên quan đến state
 *   + dựa vào kiểu dữ liệu xử lý binding data => array obj : dùng map/loop 
 *   + Xử lý truyền dữ liệu từ cha xuống con (1 cấp) => props
 * B3: Xác định state => tạo reducer trên state => data chi tiết sản phẩm
 *  + Khai báo reducer => kéo dữ liệu từ reducer xuống component  
 *  + Đẩy dữ liêu đổi từ component lên store => dispatch action
 */

const dataPhone = [
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

const BTXemChiTietRedux = () => {

    const renderSanPham = () => {
        return dataPhone.map((phone) => {
            return (
                <div className="col-4" key={phone.maSP}>
                    <SanPhamRedux phone={phone} />
                    
                </div>
            );
        });
    };


  return (
      <div className="container">

          <h3 className="text-center">Danh sách sản phẩm</h3>
          <div className="row">{renderSanPham()}</div>
          <SanPhamChiTietRedux />
      </div>
  )
}

export default BTXemChiTietRedux