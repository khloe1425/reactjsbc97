import React, { useState } from "react";

const SanPhamChiTiet = (props) => {
  const { sanPham } = props;

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4 text-center">
          <h3>{sanPham.tenSP}</h3>
          <img className="w-100" src={sanPham.hinhAnh} alt={sanPham.tenSP} />
        </div>
        <div className="col-8">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <th>Màn hình</th>
                <td>{sanPham.manHinh}</td>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <td>{sanPham.heDieuHanh}</td>
              </tr>
              <tr>
                <th>Camera trước</th>
                <td>{sanPham.cameraTruoc}</td>
              </tr>
              <tr>
                <th>Camera sau</th>
                <td>{sanPham.cameraSau}</td>
              </tr>
              <tr>
                <th>RAM</th>
                <td>{sanPham.ram}</td>
              </tr>
              <tr>
                <th>ROM</th>
                <td>{sanPham.rom}</td>
              </tr>
              <tr>
                <th>Giá bán</th>
                <td>{sanPham.giaBan.toLocaleString()} VND</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SanPhamChiTiet;
