import React from 'react'
import { useDispatch } from 'react-redux'
import { addCartAction } from '../../redux/reducers/btGioHangReducer'

const SanPhamGH = (props) => {

    const dispatch = useDispatch()

    let { phone } = props

  return (
      <div className="card">
          <img className="w-50" src={phone.hinhAnh} alt={phone.tenSP} />
          <div className="card-body">
              <h3>{phone.tenSP}</h3>
              <p>Giá: {phone.giaBan.toLocaleString()} VND</p>
              <button className="btn btn-dark" onClick={() => { 
                // B1: tạo action
                // const action ={
                //     type:"ADD_CART_ACTION",
                //     payload: phone
                // }
                // const action = {
                //     type: "btGioHangReducer/addCartAction",
                //     payload: phone

                // }
                  const action = addCartAction(phone)

                //B2: đẩy dữ liệu lên reducer
                  dispatch(action)
                  
               }}>
                  Thêm giỏ hàng
              </button>
          </div>
      </div>
  )
}

export default SanPhamGH