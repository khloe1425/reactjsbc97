import React from 'react'

const SanPhamGH = (props) => {
    let { phone } = props

  return (
      <div className="card">
          <img className="w-50" src={phone.hinhAnh} alt={phone.tenSP} />
          <div className="card-body">
              <h3>{phone.tenSP}</h3>
              <p>Giá: {phone.giaBan.toLocaleString()} VND</p>
              <button className="btn btn-dark">
                  Thêm giỏ hàng
              </button>
          </div>
      </div>
  )
}

export default SanPhamGH