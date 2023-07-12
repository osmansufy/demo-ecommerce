import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div
            className='flex flex-col h-screen justify-between'
        >
            <Header />
            <main

            >  {children}

            </main>
            <Footer />
        </div>
    )
}

export default Layout