import React from "react";

const GioHang = (props) => {
  const { gioHang, xoaGioHang } = props;

  const renderGioHang = () => {
    const render = gioHang.map((item) => {
      return (
        <tr key={item.maSP}>
          <th>{item.maSP}</th>
          <th>{item.tenSP}</th>
          <th>{item.giaBan.toLocaleString()} VND</th>
          <th>
            <button className="btn btn-primary">-</button> {item.soLuong}{" "}
            <button className="btn btn-primary">+</button>
          </th>
          <th>{(item.giaBan * item.soLuong).toLocaleString()} VND</th>
          <th>
            <button
              className="btn btn-danger"
              onClick={() => xoaGioHang(item.maSP)}
            >
              Xóa
            </button>
          </th>
        </tr>
      );
    });
    return render;
  };
  return (
    <div className="container">
      <h3 className="text-center">Giỏ hàng</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Mã SP</th>
            <th>Tên SP</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>{renderGioHang()}</tbody>
      </table>
    </div>
  );
};

export default GioHang;
