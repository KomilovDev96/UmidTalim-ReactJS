import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCustoms from './navbar'
import HeaderCustoms from './header'

export default function LayoutCustoms() {
    return (
        <>
            <NavbarCustoms />
            <HeaderCustoms />
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                <Outlet />
            </div>
        </>
    )
}
