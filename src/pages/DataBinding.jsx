// import React from 'react'

const DataBinding = () => {
    // DataBinding: phương pháp giúp đưa dữ liệu từ lên UI (Component)

    //Cách của JS:  document.querySelector("#ID").innerHTML = 'Hello CyberSoft'

    //Cách của ReactJS: sử dụng cú pháp {tên biến} interpolation để đưa dữ liệu từ lên UI (Component)
    // DataBinding: có thể hiển thị dữ liệu từ biến, hàm (phải có return)
    //  Hiển thị data , gọi hàm khi load trang (render component)
    let name = 'CyberSoft'

    // tạo hàm trong reactjs
    const renderName = (param) => {


        // trả về object JSX 
        // <div></div> không phải thẻ HTML là object div (object JSX)
        //! cú pháp: đối tượng thẻ mở <div> phải nằm chung hàng với lệnh return
        return <div>
            <p>Hello {param}</p>
        </div>
    }

    /**
     * JS thuần
     * 
     * hàm (){
     * 
     *  return biến (number, string, object, array)
     *  return <div></div> => return "<div></div>""
     * }
     */


    return (
        <div className="container">
            <h1>DataBinding</h1>
            <h2>Hiển thị dữ liệu từ biến khi render component</h2>
            <p>Hello {name}</p>
            <h2>Gọi hàm khi render component</h2>
            {renderName(name)}
        </div>
    )
}

export default DataBinding