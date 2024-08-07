"use client"
import { Menu, SquareArrowRight, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const HomeNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [windowWidth, setWindowWidth] = useState(0)
    const hasWindow = typeof window !== 'undefined'

    useEffect(() => {
        if(hasWindow){
            setWindowWidth(window.innerWidth)
            
            function handleResize(){
                setWindowWidth(window.innerWidth)
            }

            window.addEventListener('resize', handleResize)
            return () => window.removeEventListener('resize', handleResize)
        }
    }, [hasWindow])

    return (
        <nav className='w-full bg-navy flex flex-row justify-between items-center max-md:flex-col'>
            <Link href="/" className='flex flex-row items-center'>
                <Image src='/img/logo.JPG' alt='' width={60} height={60}/>
                <h1 className='text-white ml-4 font-bold'>Novak's Seaside Diner</h1>
            </Link>

            { menuOpen || windowWidth >= 768 ?  (
                <>
                    <div className="text-white items-center flex flex-row gap-8 max-md:flex-col max-md:gap-0">
                        <Link href="/" className='hover:underline hover:scale-110 underline-offset-4 ease max-md:p-4'>Home</Link>
                        <Link href="/about" className='hover:underline hover:scale-110 underline-offset-4 ease max-md:p-4'>About Us</Link>
                        <Link href="/contact" className='hover:underline hover:scale-110 underline-offset-4 ease max-md:p-4'>Contact</Link>
                        <Link href="/gallery" className='hover:underline hover:scale-110 underline-offset-4 ease max-md:p-4'>Gallery</Link>
                        <Link href="/search" className='hover:underline hidden max-md:flex hover:scale-110 underline-offset-4 ease max-md:p-4'>Menu</Link>
                    </div>
                    <Link href="/search" className='primary-button flex flex-row items-center justify-center gap-2 h-10 mr-4 max-md:hidden'>
                        Menu
                        <SquareArrowRight className='size-5'/>
                    </Link>
                    <button className='hidden max-md:flex bg-black w-full items-center justify-center py-2' onClick={() =>setMenuOpen(false)}>
                        <X className='text-white'/>
                    </button>
                </>
            ) : (
                <button className='primary-button hidden max-md:flex justify-center w-full' onClick={() => setMenuOpen(true)}>
                    <Menu/>
                </button>
            )
            }   
            
        </nav>
    )
}

export default HomeNavbar
