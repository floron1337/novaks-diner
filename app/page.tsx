import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import { Mail, Map, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  description: "Novak's Seaside Diner is a charming and inviting restaurant situated along the coastline, offering diners picturesque views of the sea. Renowned for its fresh seafood, the diner has become a beloved spot for both locals and tourists seeking a delightful dining experience by the water.",
  openGraph: {
    type: 'website'
  }
};


function HeroSection() {
  return (
    <div className='w-full bg-white flex flex-row justify-between max-md:flex-col'>
      <div className='flex flex-col w-1/2 items-center justify-center max-md:w-full'>
        <div className='mt-auto max-lg:m-4'>
          <div className='flex flex-row items-center gap-4 mt-auto'>
            <Image src='/img/logo.JPG' alt="" width={100} height={100}/>
            <h1 className='text-6xl font-bold max-2xl:text-4xl text-black'>Experience seaside <br/>dining at its finest</h1>
          </div>
          <h3 className='mt-4 text-base text-black'>Indulge in fresh seafood accompanied by the music of the waves.</h3>
          <div className='mt-4 flex flex-row gap-4'>
            <Link href='/search' className='primary-button px-12'>
              Menu
            </Link>
            <Link href='/contact' className='secondary-button'>
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className='flex flex-row justify-center gap-6 mt-auto max-lg:my-8'>
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
      <div className='w-1/2 drop-shadow max-md:w-full flex items-center'>
        <Image src="/img/hero.jpg" width="2560" height="1920" alt="" />
      </div>
    </div>
  )
}

function SpecialtiesSection(){
  return(
    <>
      <div className='w-full bg-white flex flex-col items-center mt-20 max-md:mt-4 max-md:w-full'>
          <div className='flex flex-col items-center justify-center ml-4'>
            <h1 className='text-3xl font-bold w-full'>Today's Specialties</h1>
            <h3 className='w-full'>Prepared with great care and cooked to perfection.</h3>
          </div>
      </div>
      <div className='mt-4'>
        <ThreeItemGrid/>
      </div>

      <Carousel />
    </>
  )
}

function ReadyToPick(){
  return(
    <div className='flex flex-col items-center mt-16 bg-white'>
      <h1 className='text-3xl font-bold'>Ready to pick?</h1>
      <h3>Just a few more clicks!</h3>
      <div className='flex flex-row gap-4 mt-4 items-center'>
        <Link href='/search' className='primary-button'>
          Menu
        </Link>
        <Link href='/contact' className='outline-button'>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

function FreshSection(){
  return(
    <div className='w-full flex flex-row mt-16 items-center justify-center gap-24 max-md:flex-col bg-white'>
      <div className='w-1/2 flex flex-col ml-48 max-md:w-5/6 max-md:ml-0 max-lg:ml-16'>
        <h3 className='text-sm'>Fresh</h3>
        <h1 className='text-3xl font-bold'>Indulge in our exquisite seafood delights</h1>
        <p className='mt-4'>
        At Novak's Seaside Diner, we pride ourselves on serving the freshest seafood dishes. 
        From succulent lobster tails to mouth-watering grilled fish, our menu is a seafood lover's dream come true.
        </p>
        <div className='mt-4'>
          <Link href='/about' className='outline-button'>
            Read more
          </Link>
        </div>
      </div>
      
      <div className='w-1/2 mr-48 max-md:w-5/6 max-md:mr-0 max-lg:mr-16'>
        <Image src="/img/food.jpg" alt="" width="1440" height="1152"/>
      </div>
    </div>
  )
}

function GallerySection(){
  return(
    <div className='w-full mt-24 flex flex-col items-center bg-white'>
      <div className="flex flex-row gap-4 ml-4 mr-4 max-md:ml-0 max-md:mr-0">
          <div className="w-1/3 hover:scale-105 ease">
            <Image src="/img/outside1.jpg" alt="" width="2016" height="3024"/>
          </div>
          <div className="w-1/3 hover:scale-105 ease">
            <Image src="/img/outside2.jpg" alt="" width="700" height="1050"/>
          </div>
          <div className="w-1/3 hover:scale-105 ease">
            <Image src="/img/outside3.jpg" alt="" width="933" height="1400"/>
          </div>
      </div>
      <div className='flex flex-row gap-4 mt-8'>
        <Link href='/about' className='secondary-button'>
          About Us
        </Link>
        <Link href='/gallery' className='outline-button'>
          Gallery
        </Link>
      </div>
    </div>
  )
}

function ContactSection(){
  return(
    <>
      <div className='mt-24 bg-white'>
          <div className='flex flex-row gap-4 ml-32 items-center max-md:ml-8 max-lg:ml-8'>
            <div className='bg-black w-16 h-16'></div>
            <div className='flex flex-col'>
              <h1 className='text-3xl font-semibold'>Contact us</h1>
              <h3 className='text-xl'>We'd love to hear from you!</h3>
            </div>
          </div>
        </div>
        <div className='mt-4 w-full flex flex-row gap-24 mb-24 max-md:flex-col items-center max-md:items-start bg-white'>
          <div className='w-1/2 ml-32 max-md:w-5/6 max-lg:ml-8'>
            <form className='flex flex-col'>
              <label>Name</label>
              <input type="text" name="name" className='border-black border h-8 mb-4'/>
              <label>Email</label>
              <input type="email" name="email" className='border-black border h-8 mb-4'/>
              <label>Message</label>
              <textarea name="message" className='border-black border h-60 mb-4'/>
              <div>
                <button type='submit' className='primary-button'>Submit</button>
              </div>
            </form>
          </div>
          <div className='w-1/2 mr-32 max-md:w-5/6 items-center max-lg:mx-8'>
            <h2 className='flex flex-row items-center gap-1 font-semibold'>Email <Mail className='size-5'/> </h2>
            <h3>florinvenis.dev.business@gmail.com</h3>
            <h2 className='flex flex-row items-center gap-1 font-semibold mt-2'>Phone <Phone className='size-5'/> </h2>
            <h3>+40 072 123 123</h3>
            <h2 className='flex flex-row items-center gap-1 font-semibold mt-2'>Location <Map className='size-5'/> </h2>
            <h3>1337 Example St., Bucharest, Romania</h3>
            <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152171.60432508012!2d25.92982652303471!3d44.43795241281017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucure%C8%99ti!5e1!3m2!1sro!2sro!4v1722892739560!5m2!1sro!2sro" width="600" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
            </div>
          </div>
        </div>
      </>
  )
}

export default function HomePage() {
  return (
    <div className='bg-white text-black'>
      <HeroSection/>
      <SpecialtiesSection/>
      <ReadyToPick/>
      <FreshSection/>
      <GallerySection/>
      <ContactSection/>
    </div>
  );
}
