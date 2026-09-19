import React from 'react'

const CardDemo = (props) => {

    const { product } = props

  return (
      <div className="col-4" key={product?.id}>
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

export default CardDemo