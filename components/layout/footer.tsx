import Image from "next/image";
import Link from 'next/link';

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');

  return (
    <footer className="w-full flex flex-col">
      <div className='flex flex-row ml-32 mr-32 justify-between max-md:mx-0 max-md:flex-col max-md:justify-center max-md:items-center'>
        <div className='flex flex-row items-center gap-4'>
          <Image src='/img/logo.JPG' alt="" width={65} height={65}/>
          <h1 className='text-black font-bold text-2xl'>Novak's Seaside Diner</h1>
        </div>

        <div className='flex flex-row justify-center gap-6 mt-auto'>
          <Link href="" className='hover:scale-125 ease'>
            <Image src="/img/facebook.svg" alt="" width={30} height={30}/>
          </Link>
          <Link href="" className='hover:scale-125 ease'>
            <Image src="/img/instagram.svg" alt="" width={30} height={30}/>
          </Link>
          <Link href="" className='hover:scale-125 ease'>   
            <Image src="/img/tiktok.svg" alt="" width={30} height={30}/>
          </Link>
        </div>
      </div>
      
      <div className='mx-32 bg-black mt-4 separator max-md:mx-4'>
      </div>

      <div className='flex flex-col items-center mt-4 pb-8 max-md:mx-4'>
        <h3>&copy; {copyrightDate} Novak's Seaside Diner. All rights reserved.</h3>
        <div className='flex flex-row gap-12 mt-2'>
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
          <h3>Cookie Settings</h3>
        </div>
      </div>

    </footer>
  );
}
