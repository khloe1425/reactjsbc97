// import React from 'react'

const HandleEvent = () => {

    // nfn: tạo hàm arrow function
    //Hàm tạo trong component là hàm riêng chỉ dùng trong component , component khác không xài được
    // Phạm vi cục bộ
    //So sánh giữa function component & function thường
    const handleClick = () => {
        console.log("handleClick")
    }

    /**
     * JS thuần:
     * 1. gán vào sự kiện click của button
     *  document.querySelector('#btn').onclick = tenHam;
     *!  document.querySelector('#btn').onclick = tenHam(); // chạy khi load
     * 2. gắn vào thuộc tính onclick của HTML
     *   <button class="btn btn-info" onclick="tenHam('id')" >Xem</button>
     * 
     * React JSX => có các thuộc tính của object
     * - className
     * - onClick
     *! onClick={handleClick()} //chạy khi load trang
     Hàm có tham số => gọi như thê nao trong reactjs
     => gọi thông qua hàm ẩn danh => callback function
     */

    const renderName = (name) => {

        console.log(name)
    }

    return (
        <div className="container">
            <h1>HandleEvent</h1>
            <button className="btn btn-success" onClick={handleClick} >Click Me</button>
            <button className="btn btn-success" onClick={(e) => { 
                // tham số e (event) => có sẵn của JS , reactjs chứa toàn bộ thuộc tính của đối tượng thẻ hiện tại
                console.log(e)
                console.log("hàm anonymous function gắn vào onclick")
                //gọi các hàm khác
                renderName('CyberSoft')
             }} >Call Name</button>
        </div>
    )
}

export default HandleEvent

// document.querySelector('#btn').onclick = tenHam('CyberSoft'); // chạy khi load
// document.querySelector('#btn').onclick = function (){
//     tenHam('CyberSoft');
// } 