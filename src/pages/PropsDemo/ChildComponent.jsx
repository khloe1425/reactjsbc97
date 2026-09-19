import React from 'react'

/**
 * 
 * Ở component nhận giá trị (là component con)
 * + khai báo tham số props (đúng chính xác tên props)
 * + gọi tên thuộc tính của data từ props
 * + Nếu object không có dữ liệu cần truyền 
 * C1: sử dụng kiểm if else để render theo condition
 * C2: cú pháp code option chaining: kiểm tra object khi có thuộc tính khác null hoặc khác undefine thì in ra (có giá trị thì load data lên) => ngược lại thì không load null hoặc undefine => product?.price
 */
const ChildComponent = (props) => {
    console.log(props)
    //Kết quả: className="fa-solid fa-book"
    // ES5: "fa-solid fa-" + props.iconClass  => ES6: `fa-solid fa-${props.iconClass}`
    // Reactjs: className={} (dùng dấu data binding để gán dữ liệu lên UI) => className={`fa-solid fa-${props.iconClass}`}
    // let product = {
    //     name: "iphone 18"
    // }
    return (
        <li className="list-group-item">
            <i className={`fa-solid fa-${props.iconClass}`} ></i>{props.contentLI}
            {/* <p>{product.name} - {product?.price}</p> */}
        </li>
    )
}

export default ChildComponent