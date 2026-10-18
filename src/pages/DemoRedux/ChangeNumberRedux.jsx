import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ChangeNumberRedux = () => {
    //B1: kết nối và lấy dữ liệu (state) từ reducer về component => dùng useSelector
    // B2: binding dữ liệu lên UI
    // B3: đưa dữ liệu đổi lên reducer  (useDispatch)
    //thay đổi giá trị của numberReducer (state)
    // Đẩy dữ liệu lên store reducer (Dispatch)
    /**
     * Dispatch(action)
     * + truyền đối tượng action
     * + action ={
     *      type: Không đặt tên trùng , giúp định nghĩa loai hành động,
     *      payload: dữ liệu thay đổi cần gửi lên store reducer
     * }
     */
    
    // const numberReducer = useSelector(rootReducer => rootReducer.numberReducer)
    // const stringReducer = useSelector(rootReducer => rootReducer.stringReducer)

    const { numberReducer, stringReducer } = useSelector(rootReducer => rootReducer)

    const dispatch =  useDispatch()

    return (
        <div className='container'>
            <h2>ChangeNumberRedux</h2>
            <p className='text-danger' style={{ fontSize: "30px" }}>{numberReducer} - {stringReducer}</p>
            <button className='btn btn-success' onClick={() => { 
                const action = {
                    type: 'CHANGE_NUMBER_ACTION',
                    payload: 1
                }
                dispatch(action)
              
             }}>+</button>
            <button className='btn btn-danger'>-</button>
        </div>
    )
}

export default ChangeNumberRedux