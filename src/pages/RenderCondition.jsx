import React from 'react'

const RenderCondition = () => {
    /**
     * Khi load web
     * Nếu user chưa login => hiển thị button login
     * Ngược lại nếu đã đăng nhập => hiển thị tên người dùng
     */

    let isLogin = true;

    // C2: render bằng hàm => khi code điều kiện phức tạp và UI render phức tạp
    const renderLogin = () => { 
        if(isLogin){
            return <div>
                <ul>
                    <li>Name: CyberSoft</li>
                    <li>
                        <button className='btn btn-info'>Đăng xuất</button>
                    </li>
                </ul>
            </div>
        }

        return <button className='btn btn-success'>Login</button>
     }

    return (
        <div className='container'>
            <h1>RenderCondition</h1>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        
                        <div>
                            {/* C1 render trực tiếp bằng data binding => cú pháp ngắn */}
                            {isLogin ? <p>Hello CyberSoft</p> : <button className='btn btn-success'>Login</button>}

                            {/* Gọi hàm C2 */}
                            {renderLogin()}
                        </div>

                    </div>
                </div>
            </nav>




        </div>
    )
}

export default RenderCondition