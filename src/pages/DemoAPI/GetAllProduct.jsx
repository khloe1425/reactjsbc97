import React, { useState } from 'react'

const GetAllProduct = () => {

    //? Khai báo state (mảng sản phẩm)
    // kiểu dữ liệu của state: API thường cung cấp mảng object => dữ liệu lưu ở state là mảng object
    const [arrProduct, setArrProduct] = useState([
        {
            sizes: [
                32,
                33,
                34,
                35
            ],
            id: 2,
            name: "vans old school",
            alias: "vans-old-school",
            price: 200,
            description: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
            size: [32,33,34,35],
            shortDescription: "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            quantity: 200,
            deleted: false,
            categories: [{ id: "VANS_CONVERSE", category: "VANS_CONVERSE" }],
            relatedProducts: [3, 2, 1],
            feature: true,
            image: "https://apistore.cybersoft.edu.vn/images/van-old-school.png",
            imgLink: "https://apistore.cybersoft.edu.vn/images/van-old-school.png"
        }
    ])







    return (
        <div className='container'>
            <h2>Get all product</h2>
            <button className='btn btn-success'>Load Sản phẩm</button>
            <div className="row">
                {
                    arrProduct.map((product) => { 
                        return <div className="col-3" key={product.id}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>
                     })
                }
            </div>
        </div>
    )
}

export default GetAllProduct