// import React from 'react'

import { useState } from "react"

// rafce
const ChangeNumber = () => {

    //! Function Component thì sẽ không được tạo lại (render lại UI) theo cách thông thường 
    //! => Giá trị thay đổi không hiển thị lên UI
    //? hook (chứa các hàm của function component) : useState()  => chứa giá trị thay đổi và render lại UI khi giá trị đó đổi
    //? useState(giá trị mặc định) => return mảng chứa 2 phần tử [biến chứa giá trị đổi,hàm giúp gán giá trị mới và render lại UI ] => [number, setNumber] / [number, setState]
    // ?
    //ES6: Destructuring array
    const [number, setNumber] = useState(1);


    return (
        <div className="container">
            <h2>ChangeNumber</h2>
            <p className="fs-4">Count: {number}</p>
            <button className="btn btn-success" onClick={(e) => { 
                // number++
                // console.log(number)
                setNumber(number + 1)
             }} >+</button> 
            <button className="btn btn-danger" onClick={(e) => {
                setNumber(number - 1)
            }}>-</button>
        </div>
    )
}

export default ChangeNumber