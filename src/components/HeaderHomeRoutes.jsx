import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderHomeRoutes = () => {
    // có thể dùng thẻ <a></a> để điều hướng trang nhưng không khuyến kích do sẽ load lại toàn bộ trang
    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* className="nav-link text-danger" */}
                                <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} aria-current="page" to="/index">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => isActive ? "nav-link text-danger" : "nav-link"} to="/danh-sach-san-pham">Danh Sách Sản Phẩm</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" style={({ isActive }) => isActive ? { color: "yellow" } : {}} to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/register">Register</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Demo useParam
                                </a>
                                <ul className="dropdown-menu">
                                    <li>

                                        <NavLink className="nav-link" to="/get-all-product">Get All Product</NavLink>
                                    </li>


                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Demo Redux
                                </a>
                                <ul className="dropdown-menu">
                                    <li>

                                        <NavLink className="nav-link" to="/change-number-redux">Change Number</NavLink>
                                    </li>
                                    <li>

                                        <NavLink className="nav-link" to="/bt-chi-tiet-redux">BT Chi Tiết</NavLink>
                                    </li>
                                    <li>

                                        <NavLink className="nav-link" to="/bt-gio-hang-redux">BT Giỏ Hàng</NavLink>
                                    </li>


                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Demo Hook tối ưu
                                </a>
                                <ul className="dropdown-menu">
                                    <li>

                                        <NavLink className="nav-link" to="/hook-toi-uu">Hook tối ưu</NavLink>
                                    </li>
                                    <li>

                                        <NavLink className="nav-link" to="/custom-hook">Custom Hook</NavLink>
                                    </li>
                                    <li>

                                        <NavLink className="nav-link" to="/hoc-demo">HOC Demo</NavLink>
                                    </li>


                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default HeaderHomeRoutes