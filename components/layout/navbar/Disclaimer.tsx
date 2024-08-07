import { ChevronRight } from "lucide-react"
import Link from "next/link"

const Disclaimer = () => {
    return (
        <div className='w-full bg-black text-white flex flex-col justify-center items-center'>
            <h4 className='text-center'>THIS WEBSITE IS AN EXAMPLE TO SERVE THE PERSONAL PORTFOLIO OF FLORIN VENIS. ALL BUSINESS DETAILS ARE FICTIONAL.</h4>
            <Link href="https://www.florinvenis.com/" target="_blank" className='flex flex-row gap-2 py-4 items-center hover:gap-8 ease'>
                <div className='flex flex-row gap-2'>
                    <img src='/img/logo_nobg.png' alt="" width={60} height={60} />
                    <div className='flex flex-col text-white justify-center'>
                        <h3 className='text-2xl'>FLORIN VENIS</h3>
                        <h4 className="text-sm">PROFESSIONAL DEVELOPER</h4>
                    </div>
                </div>
                <ChevronRight className='size-12'/>
            </Link>
        </div>
    )
}

export default Disclaimer
