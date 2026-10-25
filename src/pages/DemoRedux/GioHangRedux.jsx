import React from 'react'
import { useSelector } from 'react-redux';

const GioHangRedux = () => {

  // const { gioHang } = useSelector(rootReducer => rootReducer.gioHangReducer)
  const { gioHang } = useSelector(rootReducer => rootReducer.btGioHangReducer)


  const renderGioHang = () => {
    return gioHang.map((item) => {
      return (
        <tr key={item.maSP}>
          <th>{item.maSP}</th>
          <th>{item.tenSP}</th>
          <th>{item.giaBan} VND</th>
          <th>
            <button className="btn btn-primary">-</button> {item.soLuong}{" "}
            <button className="btn btn-primary">+</button>
          </th>
          <th>{(item.giaBan * item.soLuong)} VND</th>
          <th>
            <button
              className="btn btn-danger"
            >
              Xóa
            </button>
          </th>
        </tr>
      );
    });

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
  )
}

export default GioHangRedux