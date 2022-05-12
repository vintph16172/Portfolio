import React from 'react'
import Header from '../compoments/Header'
import { Outlet } from 'react-router-dom'

const WebsiteLayout = () => {
  return (
    <div>
        <header>
            <Header />
        </header>

        <main>
            <Outlet />
        </main>

        <footer>

        </footer>

    </div>
  )
}

export default WebsiteLayout