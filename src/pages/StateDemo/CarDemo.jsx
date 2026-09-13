import React, { useState } from 'react'

const CarDemo = () => {
    /**
     * B1: Xây dựng layout
     * B2: Xác định state
     *  - Giá trị nào cần lưu vào state (useState)
     *  - link hình => tên của hình (string)
     * B3: Binding Data từ state lên UI
     * B4: Gắn hàm setState vào button cần tương tác với người dùng
     */


    const [urlIMG, setIMG]= useState("/car/black-car.jpg")

    const changeIMG = (color) => { 
        setIMG(`/car/${color}-car.jpg`)
     }

    return (
        <div className='container'>
            <h1>CarDemo</h1>
            <div className="row">
                <div className="col-6">
                    <img className='w-100' src={urlIMG} alt="Car" />
                </div>
                <div className="col-6">
                    <button className='btn btn-dark' onClick={() => {
                        //user nhấn button => truyền giá trị tên màu "black"
                        changeIMG("black")
                    }}>Black Color</button>

                    <button className='btn btn-danger' onClick={() => { 
                        //user nhấn button => truyền giá trị tên màu "red"
                        changeIMG("red")
                     }}>Red Color</button>
                     
                    <button className='btn btn-light' onClick={() => {
                        //user nhấn button => truyền giá trị tên màu "silver"
                        changeIMG("silver")
                    }}>Silver Color</button>
                </div>
            </div>
        </div>
    )
}

export default CarDemo