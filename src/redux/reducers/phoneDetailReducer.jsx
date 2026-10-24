
const phoneDetail = {
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
}

export const phoneDetailReducer = (state = phoneDetail, action) => {
    console.log(action)
    switch (action.type) {
        case "CHANGE_PRODUCT_DETAIL_ACTION":
            // gán giá trị mới cho state 
            state = action.payload;
            break;

        default:
            break;
    }

    return state
}