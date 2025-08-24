"use client"
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import Nav from './Nav'

export default function Header() {
    const pathname = usePathname()

    useEffect(() => {
        console.log(pathname)
    }, [pathname])
    return (
        <header className="bg-[linear-gradient(135deg,rgba(232,48,48,0.45)_0%,rgba(232,48,48,0)_100%),url('/videos/header-bg.gif')] bg-no-repeat bg-cover w-full p-4">
            <Nav />
            <div className='mt-16'>
                {pathname === '/' && 'This is extra content'}
            </div>
        </header>
    )
}
