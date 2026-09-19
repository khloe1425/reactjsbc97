import React from 'react'

const PropsCard = (props) => {
    // props.product => props.product.img, props.product.name
    //! nếu truyền vào props kiểu object và không có data truyền vào thì sẽ bị lỗi null & undefine => lỗi biên dịch => optional chaining
    const { product } = props
    return (
        <div className="col-4">
            <div className="card" style={{ width: '18rem' }}>
                <img src={product?.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <p className="card-text">{product?.price}</p>
                </div>
            </div>
        </div>
    )
}

export default PropsCard