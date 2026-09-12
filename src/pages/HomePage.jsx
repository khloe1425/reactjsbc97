// rafce
// import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content'

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Header />
                </div>
                <div className="col-4">
                    <Sidebar />
                </div>
                <div className="col-8">
                    <Content />
                </div>

                <div className="col-12">
                    <Footer />
                </div>
            </div>
           
        </div>
    )
}

export default HomePage