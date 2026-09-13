// import React from 'react'
//css dùng riêng cho component
import objStyleModule from './StyleComponentDemo.module.css'

const StyleComponentDemo = () => {
    /**
     * React Style
     * CSS inline => thuộc tính style của object jsx
     * => style={object} nhận vào kiểu object
     * 
     * CSS external
     * - dùng chung: gắn file css vào main.jsx
     * - dùng riêng: import object từ module css
     */

    // thuộc tính css nhiều
    let objStyle = {
        color:'red',
        backgroundColor: 'yellow',
        fontSize: '16px',
        fontWeight: 'bold'
    }
    return (
        <div>
            <h1>StyleComponentDemo</h1>
            <p style={objStyle}>Lorem ipsum dolor sit amet.</p>
            {/* thuộc tính CSS ít (1-2 thuộc) */}
            <p style={{color: 'red', backgroundColor: 'yellow'}}>Lorem, ipsum dolor.</p>
            <p className="style-heading fs-5">Lorem, ipsum dolor.</p>
            {/* binding chuỗi các tên class CSS  */}
            <p className={`${objStyleModule.bgColor} fs-4 ${objStyleModule['text-pink']}`}>Lorem, ipsum dolor.</p>
            {/* <p className='bgColor'></p> */}
        </div>
    )
}

export default StyleComponentDemo


/**
 * 
 * CSS external
 * CSS inline
 * <p style="color: red; background-color: yellow;">Lorem, ipsum dolor.</p>
 */