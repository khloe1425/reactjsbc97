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
    //? tạo ra 1 đối tượng sp mới có thêm thuộc tính số lượng (đối tượng riêng của Giỏ hàng) => copy từng thuộc tính từ object cũ sang object mới
    //! const spThem = spClick => bị tham chiếu (chung ô nhớ) => cơ chế setState của react sẽ nhận diện là chưa đổi giá trị => không render lại UI

    // const spThem = {
    //   maSP: spClick.maSP,
    //   tenSP: spClick.tenSP,
    //   // tạo tượng tự với các thuộc tính còn lại
    //   //thuộc tính mới chỉ có sản phẩm của giỏ hàng mới có
    //   soLuong: 1
    // }
    //? Spread Operator
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

  const xoaGioHang = (maSPXoa) => {
    //? splice => cú pháp dài
    //? filter [sp1 001,sp2 002,sp3 003] => xóa sp1 001=> [sp2 002,sp3 003]
    //? => lọc ra các sản phầm cần giữ lại trong giỏ hàng => maSP !== mã cần xóa
    // let gioHangUpdate = [...gioHang]
    // gioHangUpdate = gioHangUpdate.filter((item) => {
    //   return item.maSP !== maSPXoa
    // })
    // let gioHangUpdate = [...gioHang.filter((item) => item.maSP !== maSPXoa)];

    //? hàm filter() khi return sẽ trả về 1 mảng mới với địa chỉ ô nhớ mới => có thể không cần copy mảng
    let gioHangUpdate = gioHang.filter((item) => item.maSP !== maSPXoa);

    setGioHang(gioHangUpdate);

  };

  // hàm xử lý tăng giảm số lượng của giỏ hàng => đặt ở component nào ?
  // input: mã sản phẩm cần đổi số lượng, số lượng (+1, -1)
  const tangGiamSL = (maSPTangGiam,soLuong ) => { 
    console.log(maSPTangGiam, soLuong)
    //? B1: copy mảng giỏ hàng 
    let gioHangUpdate = [...gioHang]
    //? B2 : tìm sản phẩm cần cập nhật trong giỏ hàng
    // find() => duyệt mảng và so sánh từng phần tử của mảng với đk tìm kiếm => tìn được phần tử thỏa đk => trả về phần tử tìm đc
    let spTangGiam = gioHangUpdate.find(spGioHang => spGioHang.maSP == maSPTangGiam)
    if (spTangGiam){
      // tìm thấy => thay đổi số lượng
      //? B3:  tăng : spTangGiam.soLuong += 1 ;  giảm: spTangGiam.soLuong += (-1)
      spTangGiam.soLuong += soLuong

      if (spTangGiam.soLuong <1 ){
        alert("số lượng không được dưới 1")
        spTangGiam.soLuong = 1
      }
      //? B4: truyền giỏ hàng đã thay đổi số lượng vào setState => react cập nhật giá trị đổi và render lại UI
      setGioHang(gioHangUpdate);

    }

   }



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
      <GioHang gioHang={gioHang} xoaGioHang={xoaGioHang} tangGiamSL={tangGiamSL}  />
      <SanPhamChiTiet sanPham={sanPham} />
    </div>
  );
};

export default DanhSachSanPham;
