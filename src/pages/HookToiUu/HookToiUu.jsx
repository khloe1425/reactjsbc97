import React, { useCallback } from 'react'
import { useState } from "react"
import ChildComponent from './ChildComponent';

const HookToiUu = () => {
    /**
     * Mặc định component cha render lại => render lại các component con
     * Hook tối ưu
     * + build-in react.js (usememo, usecallback)
     *     + usememo: giúp xác định dữ liệu đổi có truyền xuống để dùng cho component con không 
     *          - Chỉ dùng với type: number, string...
     *         Th1: cha cần render lại khi number thay đổi , con không cần render lại
     *         Th2: cha render lại khi giá trị number thay đổi, con render lại khi giá trị like thay đổi
     *          - Hàm : không nhận diện được sự thay đổi
     *      + usecallback: xử lý nhận điện khi truyền hàm
     * => bản dưới 19 thì phải dùng usememo, usecallback xét thủ công cho từng component
     * => 19+ react compiler : tự tối ưu y như tính năng usememo, usecallback mà không cần sửa dụng 2 hook này
     * 
     * 
     * + custom hook tự tạo
     * + custom hook của thư viện bên ngoài
     */
    const [number, setNumber] = useState(1); //giá trị của cha
    const [like, setLike] = useState(1); // giá trị của con

    const renderLike = () => {
        return <p className='text-danger'>Like: {like}</p>
    }
    // const callbackRenderLike = useCallback(renderLike, [like])

    return (
        <div className="container">
            <h2>Hook tối ưu (usememo, usecallback) </h2>
            <h2>ChangeNumber</h2>
            <p className="fs-4">Count: {number}</p>
            <button className="btn btn-success" onClick={(e) => {
                setNumber(number + 1)
            }} >+</button>

            {/* <ChildComponent like={like} /> */}
            {/* <ChildComponent renderLike={callbackRenderLike} />
            <button className="btn btn-success" onClick={(e) => {
                setLike(like + 1)
            }} >Like</button> */}

            <ChildComponent renderLike={renderLike} />
            <button className="btn btn-success" onClick={(e) => {
                setLike(like + 1)
            }} >Like</button>

        </div>
    )
}

export default HookToiUu