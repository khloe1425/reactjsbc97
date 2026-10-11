import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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

    //JS thuần: window.onload => gọi hàm bình thường ko đặt vào event (click, keypress)
    //Reactjs => vòng đời (lifecycle) của function component: mount, update, unmount
    /**
     * mount: Khởi tạo component 
     * update: khi dữ liệu state hoặc props thay đổi
     * unmount: rời khỏi component
     * 
     * //vào website => call API => load liền ds sản phẩm
     * API : sau khi tạo component => call API thành công => báo cho component biết để render lại UI
     * hook: useEffect (4 trường hợp sử dụng)
     * + useEffect(code cần xử lý, mảng tham số - dependency )
     *  1. dependency mảng rỗng: useEffect({code xử lý}, [])
     * 2. dependency có giá trị: useEffect({code xử lý}, [giá trị 1, giá trị 2])
     * 3. cleanup 
     * 4. không khai báo tham số dependency => ít dùng
     */
    //? càn xử lý call api và load lại UI tự động => gần giống onload
    const getAllProductAPI = () => {
        // chaining function
        axios({
            method: 'get',
            url: 'https://apistore.cybersoft.edu.vn/api/Product'
        }).then((result) => {
            //call API => dữ liệu mới => set vào state
            console.log(result.data.content)
            setArrProduct(result.data.content)

        }).catch((error) => {
            console.log(error)
        })

    }
    // useEffect(() => { 
    //!     //TH 4: khi component được khởi tạo/ render lại thì code bên trong chạy lại
    //     getAllProductAPI();
    //  })

    useEffect(() => { 
        //chỉ chạy 1 lần duy nhất khi component được khởi tạo (mount)
        getAllProductAPI();
     }, [])
     







    

     
     

     
     


    return (
        <div className='container'>
            <h2>Get all product</h2>
            <button className='btn btn-success' onClick={() => { 
                getAllProductAPI()
             }}>Load Sản phẩm</button>

            <div className="row mt-3">
                {
                    arrProduct.map((product) => { 
                        return <div className="col-3" key={product.id}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.price}</p>
                                    
                                    <NavLink to={`/detail/${product.id}`} className="btn btn-primary">Xem chi tiết</NavLink>
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