// rxslice
import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";

const initialState = {
    arrProduct: [],
    productDetail:{}
}

// action creator
const productReducer = createSlice({
    name: "productReducer",
    initialState,
    reducers: {
        // các phương thức action
        setArrProductRedux: (state, action) => {
            state.arrProduct = action.payload
        },
        setProductDetailRedux: (state, action) => {
            state.productDetail = action.payload
        }
    }
});

export const { setArrProductRedux, setProductDetailRedux } = productReducer.actions

export default productReducer.reducer


// Middleware : redux-thunk, redux saga, custom middleware

//custom middleware (hàm liên quan API)
export const getAllProductThunk = () => {
    // closure function

    //return 1 hàm
    return async (dispatch) => {
        //return kết quả từ API
        console.log("gọi middleware call API lấy danh sách sản phẩm")
        try {
            const result = await axios.get("https://apistore.cybersoft.edu.vn/api/Product");
            console.log("danh sách sản phẩm", result.data.content);
            //?dispatch 2: đẩy data lên reducer
            const actionPayload = setArrProductRedux(result.data.content);
            dispatch(actionPayload)


        } catch (error) {
            console.log(error);
        }
    }

}


export const getProductDetailThunk = (id) => {
    console.log("Id product", id)
    return async (dispatch) => {
        try {

            const res = await axios.get(`https://apistore.cybersoft.edu.vn/api/Product/getbyid?id=${id}`)
            console.log(res.data.content)
            const actionPayload = setProductDetailRedux(res.data.content)
            dispatch(actionPayload)

        } catch (error) {

            console.log(error)
        }
    }
}