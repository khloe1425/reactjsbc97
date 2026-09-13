import React, { useState } from 'react'

const ChangeFontSize = () => {
    // CSS trong Reactjs, State
    // CSS inline => khai báo biến object
    /**
     * B1: xây dựng UI 
     * B2: Xác định state: giá trị thay đổi khi có sự tác động từ user, cần hiển thị thay đổi lên UI
     *  - fSize: chứa giá trị font size (kiểu number)
     * B3: binding giá trị state lên UI
     * B4: Gắn sự kiện có hàm setState để thay đổi giá trị và render lại UI
     */

    const [fSize, setFSize]= useState(16)

    return (
        <div className='container'>
            <h2>ChangeFontSize</h2>
            <p style={{fontSize:`${fSize}px`}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, nemo?</p>
            <button className='btn btn-success' onClick={() => { 
                setFSize(fSize + 5)
             }}>Zoom in</button>
            <button className='btn btn-success' onClick={() => {
                setFSize(fSize - 5)
            }}>Zoom out</button>
        </div>
    )
}

export default ChangeFontSize