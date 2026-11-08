import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import http from "../../middlewares/interceptors";
import useRedux from '../../customhooks/useRedux';
import { getAllProductThunk } from "../../redux/reducers/productReducer";
import { useDispatch, useSelector } from "react-redux";


const ProductMiddleware = () => {
    // const [arrProduct, setArrProduct] = useState([]);
    // const { rootState, dispatch } = useRedux();

    const { arrProduct } = useSelector((state) => state.productReducer)
    const dispatch = useDispatch()

    const getAllProduct = async () => {
        //cách 2
        // try {
        //     const result = await axios.get("https://apistore.cybersoft.edu.vn/api/Product");
        //     console.log("danh sách sản phẩm", result.data.content);
        //     setArrProduct(result.data.content);
        // } catch (error) {
        //     console.log(error);
        // }

        //?dispatch 1: đẩy hàm gọi API lên middleware
        dispatch(getAllProductThunk()) // nhận vào 1 hàm trả về kết quả call API
    };
    useEffect(() => {
        getAllProduct(); //-> có sử dụng interceptor
    }, []);



    return (
        <div className="container">
            <h2>Get all product</h2>

            <div className="row mt-3">
                {arrProduct.map((product) => {
                    return (
                        <div className="col-3" key={product.id}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>

                                    <NavLink
                                        to={`/detail-middleware/${product.id}`}
                                        className="btn btn-primary"
                                    >
                                        Xem chi tiết
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ProductMiddleware