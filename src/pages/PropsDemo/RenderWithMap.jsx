import React from "react";
import CardDemo from "./CardDemo";

const RenderWithMap = () => {
  const arrProduct = [
    {
      id: 1,
      name: "iphone 18",
      price: 40000,
      img: "https://dummyimage.com/600x400/000/fff?text=iphone",
    },
    {
      id: 2,
      name: "Xiaomi",
      price: 40000,
      img: "https://dummyimage.com/600x400/000/fff?text=xiaomi",
    },
    {
      id: 3,
      name: "Sam sung",
      price: 40000,
      img: "https://dummyimage.com/600x400/000/fff?text=samsung",
    },
  ];

  const renderProduct = () => {
    // input: arrProduct:
    // output: [<div key={arrProduct[0].id}>sanpham 1</div>, <div key={arrProduct[1].id}>sanpham 2</div>, <div key={arrProduct[2].id}>sanpham 3</div>]
    let arrJSX = [];
    for (let product of arrProduct) {
      let tagCol = (
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={product?.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product?.name}</h5>
              <p className="card-text">{product?.price}</p>
            </div>
          </div>
        </div>
      );
      arrJSX.push(tagCol);
    }

    return arrJSX; //[<div className="col-4"></div>, <div className="col-4"></div>, <div className="col-4"></div>]
  };

  const renderProductMap = () => {
    //map(): duyệt mảng và lấy giá trị phần tử . Nếu có lệnh return trong map() => trả về 1 mảng mới
    // let arrJSX = []
    //? return ở ngoài giúp tra kết quả mảng mới ra khỏi hàm renderProductMap để binding lên UI
    return arrProduct.map((product, index) => {
      //? lệnh return của map trả ra ngoài hàm map 1 mảng mới
      return (
        <div className="col-4">
          <div className="card" style={{ width: "18rem" }}>
            <img src={product?.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product?.name}</h5>
              <p className="card-text">{product?.price}</p>
            </div>
          </div>
        </div>
      );
      // arrJSX.push(tagCol)
    });

    // return arrJSX //[<div className="col-4"></div>, <div className="col-4"></div>, <div className="col-4"></div>]
  };

  const renderComponentMap = () => {
    return arrProduct.map((product, index) => {
      return <CardDemo product={product} />;
    });
  };
  //Muốn render các thẻ đồng cấp trong function component thì bắt buộc phải để trong mảng và 1 prop tên key chứa value là id của đối tượng dữ liệu
  //   return (
  //       [<div key={arrProduct[0].id}>sanpham 1</div>, <div key={arrProduct[1].id}>sanpham 2</div>, <div key={arrProduct[2].id}>sanpham 3</div>]
  //   )

  return (
    <div className="container">
      <div className="row">
        {renderProduct()}
        {renderProductMap()}
        {renderComponentMap()}
        {/* <CardDemo product={arrProduct[0]} />
                <CardDemo product={arrProduct[1]} />
                <CardDemo product={arrProduct[2]} /> */}
      </div>
    </div>
  );
};

export default RenderWithMap;

/**
 * reactjs
 *  <div>sanpham 1</div>, <div>sanpham 2</div>, <div>sanpham 3</div>
 * lẹnh trả về của function component => mảng các object thẻ đồng cấp
 * return [<div>sanpham 1</div>, <div>sanpham 2</div>, <div>sanpham 3</div>]
 */
