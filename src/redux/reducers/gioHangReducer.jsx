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
    gioHang:[
        {
            maSP: 1,
            tenSP: "VinSmart Live",
            giaBan: 5700000,
            hinhAnh: "./phone/vsphone.jpg",
            soLuong:1
        }
    ]
}

export const gioHangReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_CART_ACTION": {
            ////code xử lý hành động thêm sản phẩm giỏ hàng

            //?B1: tạo sản phẩm giỏ hàng. 
            // // {copy thuộc tính từ sản phẩm gốc, thuộc tính mới thêm vào}
            let sanPhamGHNew = { ...action.payload, soLuong:1 }
            
            //?B2: kiểm tra giỏ hàng và thêm xử lý đối tương sp giỏ hàng theo 2 tình huống
            let spFind = state.gioHang.find(spGH => spGH.maSP === sanPhamGHNew.maSP)
            if (spFind){
                // TH2:  mã SP đã tồn tại trong giỏ hàng => tăng số lượng sản phẩm lên +1
                spFind.soLuong +=1;
            }else{
                //TH1: mã SP chưa tồn tại trong giỏ hàng => thêm 1 hàng mới vào bảng giỏ hàng.
                state.gioHang.push(sanPhamGHNew)
            }
            console.log(state.gioHang)

            return state
            
        };break;

        default:
            return state
    }
}

