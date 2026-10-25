import React from 'react'
import SanPhamGH from './SanPhamGH';
import GioHangRedux from './GioHangRedux';
import { useSelector } from 'react-redux';

const BTGioHang = () => {

    // const { mangSanPham } = useSelector(rootReducer => rootReducer.gioHangReducer)
    const { mangSanPham } = useSelector(rootReducer => rootReducer.btGioHangReducer)


    const renderSanPham = () => {
        return mangSanPham.map((phone) => {
            return (
                <div className="col-4" key={phone.maSP}>
                    
                    <SanPhamGH phone={phone} />

                </div>
            );
        });
    };


  return (
      <div className="container">

          <h3 className="text-center">Danh sách sản phẩm</h3>
          <div className="row">{renderSanPham()}</div>
          <GioHangRedux />
      </div>
  )
}

export default BTGioHang