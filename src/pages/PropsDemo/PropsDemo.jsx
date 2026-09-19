import React from 'react'
import ChildComponent from './ChildComponent'
import PropsCard from './PropsCard'

const PropsDemo = () => {


    /**
     * props là thuộc tính của thẻ của reactjs (component)
     * + Giúp truyền dữ liệu từ component cha xuống component con
     * + Khai báo giá trị cần truyền vào props: tenthuộctinhProps="value"
     * + chỉ được truyền 1 cấp từ cha xuống con
     * + Trong props truyền được các dạng dữ liệu: number, string, array, object...
     *  */


    /**
     * B1: Xây dựng UI hoàn chỉnh
     * B2: Binding data mẫu lên UI
     * B3: Chia component cha con
     * B4: kiểm tra dữ liệu của con để truyền dữ liệu cần thiết từ component cha xuống con thông qua props
     * 
     */
    const arrProduct = [
        { id: 1, name: "iphone 18", price: 40000, img: "https://dummyimage.com/600x400/000/fff?text=iphone" },
        { id: 2, name: "Xiaomi", price: 40000, img: "https://dummyimage.com/600x400/000/fff?text=xiaomi" },
        { id: 3, name: "Sam sung", price: 40000, img: "https://dummyimage.com/600x400/000/fff?text=samsung" },
    ]


    return (
        <div className='container'>
            <h1>PropsDemo</h1>
            <input type="text" value={1} />
            <input type="text" value={2} />
            <input type="text" value={3} />
            <ol className="list-group list-group-numbered">
                <ChildComponent contentLI="Nhà sách - Tiki" iconClass="book" />
                <ChildComponent contentLI="Nhà cửa - Đời sống" iconClass="home" />
                <ChildComponent contentLI="Điện thoại - Máy tính bảng" />
                <ChildComponent />
                {/* 
                <li className="list-group-item">Nhà sách - Tiki</li>
                <li className="list-group-item">Nhà cửa - Đời sống</li>
                <li className="list-group-item">Điện thoại - Máy tính bảng</li> */}
            </ol>
            <div className="row">
                <PropsCard product={arrProduct[0]}/>
                <PropsCard product={arrProduct[1]} />
                <PropsCard />
            </div>

        </div>

    )
}

export default PropsDemo


    // < div className = "col-4" >
    //     <div className="card" style={{ width: '18rem' }}>
    //         <img src={arrProduct[0].img} className="card-img-top" alt="..." />
    //         <div className="card-body">
    //             <h5 className="card-title">{arrProduct[0].name}</h5>
    //             <p className="card-text">{arrProduct[0].price}</p>
    //         </div>
    //     </div>
    //     </ >