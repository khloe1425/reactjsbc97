import React from 'react'
import { useDispatch } from 'react-redux'

const SanPhamRedux = (props) => {

    const dispatch = useDispatch()

    let { phone } = props

  return (
      <div className="card">
          <img className="w-50" src={phone.hinhAnh} alt={phone.tenSP} />
          <div className="card-body">
              <h3>{phone.tenSP}</h3>
              <p>Giá: {phone.giaBan.toLocaleString()} VND</p>
              <button className="btn btn-dark" onClick={(e) => { 
                    // B1: tạo action
                    const action ={
                        type:"CHANGE_PRODUCT_DETAIL_ACTION",
                        payload: phone
                    }

                    //B2: đấy data cần đổi lên store
                    dispatch(action)

               }}>
                  Xem chi tiết
              </button>
          </div>
      </div>
  )
}

export default SanPhamRedux