import { configureStore } from "@reduxjs/toolkit";
import {numberReducer} from "./reducers/numberReducer.jsx";
import { phoneDetailReducer } from "./reducers/phoneDetailReducer.jsx";
// import { gioHangReducer } from "./reducers/gioHangReducer.jsx";
import  btGioHangReducer  from "./reducers/btGioHangReducer.jsx";

/**
 * reducer: hàm trả về state, khi state thay đổi sẽ tự động kiểm tra và render lại component
 * hàm kích hoạt khi ứng dụng được khởi tạo, và mỗi lần đưa dữ liệu lên reducer
 * 
 * B1: thiết lập store (thiết lập 1 lần khi mới cài redux)
 *  B1-1: kết nối store, redux vào ứng dụng
 * B2: tạo state tập trung (reducer)
 * B3: kết nối component với reducer để lấy dữ liệu state xuống component
 * B4: Đẩy data cần đổi lên trên reducer (store)
 * 
 * 
 * Nếu store có quá nhiều reducer thì tách nhỏ reducer
 */



export const store = configureStore({
    reducer: {
        //Nơi quản lý state tập trung cho toàn bộ ứng dụng
        numberReducer,
        stringReducer: (stateString = "abc") => {

            return stateString
        },
        // phoneDetailReducer: phoneDetailReducer,
        phoneDetailReducer,
        // gioHangReducer,
        btGioHangReducer: btGioHangReducer
        
    }
})


// object literal: tên thuộc tính/ tên phương thức trùng với tên biến được gán vào thì chỉ cần ghi 1 tên của thuộc tính/ phương thức
/**
 * function tinhDTB ={
 *  console.log("tính diem")
 * }
 * 
 * let sv = {
 *      tinhDTB:()=> {
 *    } //gán hàm ẩn danh
 * }
 * 
 * => let sv = {
 *      tinhDTB: tinhDTB
 * }
 * => rút gọn let sv = {
 *      tinhDTB,
 * }
 */