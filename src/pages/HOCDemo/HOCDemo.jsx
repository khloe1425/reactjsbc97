import React, { useState } from 'react'
import Login from '../Login'
import ModalHOC from './ModalHOC'
import CarDemo from '../StateDemo/CarDemo'

const HOCDemo = () => {

    //state: UI component cần load lên modal
    const [Component, setComponent] = useState(<Login />)

    const ModalComponent = ModalHOC(Component)
    return (
        <div className='container'>
            
            <h2>HOCDemo</h2>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-success' onClick={() => { 
                setComponent(<Login />)
             }} >Login Form</button>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-success' onClick={() => {
                setComponent(<CarDemo />)
            }}>Change car</button>

            {ModalComponent()}
            
        </div>
    )
}

export default HOCDemo

/**
 * HOC -  tái sử dụng logic của component
 *
 * hàm nhận vào tham số là 1 hàm và return cũng là dạng hàm
 *
*/

// function main(callback){
//     return function(){
//         callback();

//         return 1;
//     }
// }

// const res = main(() => { console.log("123") })
// res()