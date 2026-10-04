import React from 'react'
import HeaderHomeRoutes from '../components/HeaderHomeRoutes'
import { Outlet } from 'react-router-dom'

const HomeTemplate = () => {
  return (
    <>
        <HeaderHomeRoutes />
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default HomeTemplate