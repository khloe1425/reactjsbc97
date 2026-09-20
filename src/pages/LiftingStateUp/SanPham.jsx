import React from "react";

const SanPham = (props) => {
  const { item, setSanPham, themGioHang } = props;
  return (
    <div className="card">
      <img className="w-50" src={item.hinhAnh} alt={item.tenSP} />
      <div className="card-body">
        <h3>{item.tenSP}</h3>
        <p>Giá: {item.giaBan.toLocaleString()} VND</p>
        <button
          className="btn btn-dark"
          onClick={() => {
            setSanPham(item);
          }}
        >
          Xem chi tiết
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => {
            themGioHang(item);
          }}
        >
          Thêm giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default SanPham;
