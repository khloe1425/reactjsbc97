import { createSlice } from '@reduxjs/toolkit'
//Cách 2: createSlice: kiến trúc pattern giúp tự clone state 
//action.creator & reducer
const initialState = {
    mangSanPham: [
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            manHinh: "AMOLED, 6.2, Full HD+",
            heDieuHanh: "Android 9.0 (Pie)",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 5700000,
            hinhAnh: "./phone/vsphone.jpg",
        },
        {
            maSP: 2,
            tenSP: "Meizu 16Xs",
            manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
            heDieuHanh: "Android 9.0 (Pie); Flyme",
            cameraTruoc: "20 MP",
            cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 7600000,
            hinhAnh: "./phone/meizuphone.jpg",
        },
        {
            maSP: 3,
            tenSP: "Iphone XS Max",
            manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
            heDieuHanh: "iOS 12",
            cameraSau: "Chính 12 MP & Phụ 12 MP",
            cameraTruoc: "7 MP",
            ram: "4 GB",
            rom: "64 GB",
            giaBan: 27000000,
            hinhAnh: "./phone/applephone.jpg",
        },
    ],
    gioHang: [
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            giaBan: 5700000,
            hinhAnh: "./phone/vsphone.jpg",
            soLuong: 1
        }
    ]
}

const btGioHangReducer = createSlice({
    name: "btGioHangReducer", // tạo tên action của nghiệp vụ giỏ hàng
    initialState, //gán giá trị mặc định của state
    reducers: {
        //các phương thức action liên quan về nghiệp vụ giỏ hàng
        // tên phương thức sẽ gần giống ý nghĩa action.type
        addCartAction: (state, action) => { 
            ////code xử lý hành động thêm sản phẩm giỏ hàng
            //?B1: tạo sản phẩm giỏ hàng. 
            let sanPhamGHNew = { ...action.payload, soLuong: 1 }
            //?B2: kiểm tra giỏ hàng và thêm xử lý đối tương sp giỏ hàng theo 2 tình huống
            let spFind = state.gioHang.find(spGH => spGH.maSP === sanPhamGHNew.maSP)
            if (spFind) {
                spFind.soLuong += 1;
            } else {
               
                state.gioHang.push(sanPhamGHNew)
            }
         }
      
    }
});

export const { addCartAction } = btGioHangReducer.actions

export default btGioHangReducer.reducer // hàm trả về state