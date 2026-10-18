import { configureStore } from "@reduxjs/toolkit";

/**
 * reducer: hàm trả về state, khi state thay đổi sẽ tự động kiểm tra và render lại component
 * hàm kích hoạt khi ứng dụng được khởi tạo, và mỗi lần đưa dữ liệu lên reducer
 * 
 * B1: thiết lập store (thiết lập 1 lần khi mới cài redux)
 *  B1-1: kết nối store, redux vào ứng dụng
 * B2: tạo state tập trung (reducer)
 * B3: kết nối component với reducer đẻ lấy dữ liệu state xuống component
 *
 */
export const store = configureStore({
    reducer:{
        //Nơi quản lý state tập trung cho toàn bộ ứng dụng
        numberReducer: (stateNumber = 10,action) => { 
            console.log('numberReducer', action)

            if (action.type == 'CHANGE_NUMBER_ACTION'){
                stateNumber = stateNumber + action.payload
            }

            //reducer tự kiểm tra giá trị state có đổi không => có đổi thì render lại UI, ngược lại thfi ko render lại
            // reducer so sánh địa chỉ ô nhớ
            return stateNumber
         },
        stringReducer: (stateString = "abc") =>{

            return stateString
        }

    }
})