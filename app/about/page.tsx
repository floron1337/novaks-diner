import Image from "next/image"
import Link from "next/link"

function TopGallery(){
    return(
        <div className='flex flex-col my-16'>
            <div className='flex flex-row gap-4 ml-32 max-md:ml-4'>
                <div>
                    <Image src='/img/logo.jpg' alt='' width={64} height={64}/>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold'>About Us</h1>
                    <h3 className='text-xl'>Take a peek inside our world!</h3>
                </div>
            </div>
            <div className='mt-8'>
                <div className="mx-32 grid grid-cols-3 grid-rows-2 gap-4 max-md:mx-4">
                    <div className="row-span-2 h-full hover:scale-105 ease flex">
                        <Image src='/img/about1.jpg' className='' alt="" width={2736} height={3648}/>
                    </div>
                    <div>
                        <div className='w-full hover:scale-105 ease'>
                            <Image src='/img/about2.jpg' className='' alt="" width={2045} height={1363}/>
                        </div>
                    </div>
                    <div className="col-start-2 row-start-2">
                        <div className='w-full flex hover:scale-105 ease'>
                            <Image src='/img/about3.jpg' className='' alt="" width={1440} height={960}/>
                        </div>
                    </div>
                    <div className="row-span-2 col-start-3 row-start-1 h-full">
                        <div className='hover:scale-105 ease h-full flex'>
                            <Image src='/img/about4.jpg' className='' alt="" width={768} height={1024}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function WelcomeSection(){
    return(
        <>
            <div className='flex flex-row gap-4 ml-32 mt-16 max-md:ml-4 items-center'>
                <div className='h-16 w-16 bg-navy'></div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl max-md:text-base font-semibold'>Welcome to Novak's Seaside Diner</h1>
                    <h3 className='text-xl max-md:text-sm'>Get to know us!</h3>
                </div>
            </div>
            <div className='flex flex-row ml-32 w-1/2 mt-4 gap-4 max-md:ml-4 max-md:w-5/6'>
                <div className='h-auto w-12 bg-navy text-sm'></div>
                <p>
                    Nestled along the stunning coastline, Novak's Seaside Diner offers more than just a meal;
                     it provides an experience. With breathtaking ocean views and a warm, inviting atmosphere,
                      our diner is the perfect place to savor the freshest seafood and enjoy the serenity of the sea.
                </p>
            </div>
            <div className='mx-32 mt-16 hover:scale-105 ease max-md:mx-4'>
                <Image src='/img/about5.jpg' alt="" width={5374} height={1735}/>
            </div>
        </>
    )
}

function StorySection(){
    return(
        <>
            <div className='flex flex-row gap-4 ml-32 mt-16 max-md:ml-4'>
                <div className='h-16 w-16 bg-orange'></div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold'>Our Story</h1>
                    <h3 className='text-xl'>From the ground up.</h3>
                </div>
            </div>
            <div className='flex flex-row ml-32 w-1/2 mt-4 gap-4 max-md:ml-4 max-md:w-5/6'>
                <div className='h-auto w-12 bg-orange text-sm'></div>
                <p>
                Founded with a passion for culinary excellence and a love for the ocean,
                 Novak's Seaside Diner has become a beloved destination for both locals and visitors.
                  Our journey began with a simple idea: to create a place where people could enjoy the
                   best seafood in a relaxed, beautiful setting. Today, we are proud to be known for our
                    commitment to quality, sustainability, and exceptional service.
                </p>
            </div>
            <div className='flex flex-row gap-12 mt-12 mx-32 max-md:mx-4 max-md:gap-2'>
                <div className='w-1/2 hover:scale-105 ease'>
                    <Image src='/img/about6.jpg' alt='' width={1344} height={896}/>
                </div>

                <div className='w-1/2 hover:scale-105 ease'>
                    <Image src='/img/about7.jpg' alt='' width={5657} height={3771}/>
                </div>
            </div>
        </>
    )
}

function ChefsSection(){
    return(
        <>
        <div className='w-full mt-16'>
            <div className='flex flex-row gap-4 ml-32 items-center max-md:ml-4'>
                <div className='bg-black w-16 h-16'></div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-semibold'>Meet the team</h1>
                    <h3 className='text-xl'>The best in town at your service.</h3>
                </div>
            </div>
            </div>
            <div className='w-full mt-4'>
            <div className='flex flex-row gap-4 ml-32 mr-32 max-lg:flex-col max-md:mx-0'>
                <div className='w-1/3 border-4 p-4 max-lg:w-full'>
                <Image src="/img/adnan.jpg" alt="" width={3840} height={5760}/>
                <h3 className='mt-2 text-lg'>Adnan Bentley, 29</h3>
                <p className='text-sm mt-4'>
                Chef Adnan Bentley brings over two decades of culinary expertise to the table, specializing in seafood cuisine.
                    Hailing from a coastal town in Italy, Adnan grew up with a deep appreciation for fresh seafood and traditional Mediterranean cooking.
                    His culinary journey has taken him through some of the finest kitchens in Europe and North America.
                </p>
                </div>
                <div className='w-1/3 border-4 p-4 max-lg:w-full'>
                <Image src="/img/ferdin.jpg" alt="" width={5462} height={8192}/>
                <h3 className='mt-2 text-lg'>Ferdin Huang Lee, 54</h3>
                <p className='text-sm mt-4'>
                Chef Ferdin Huang Lee is a renowned chef known for his mastery in seafood cuisine and his creative approach to culinary arts.
                    With a background in marine biology, Ferdin has a unique understanding of seafood sustainability, which he integrates into his cooking philosophy.
                </p>
                </div>
                <div className='w-1/3 border-4 p-4 max-lg:w-full'>
                <Image src="/img/matthew.jpg" alt="" width={3712} height={5566}/>
                <h3 className='mt-2 text-lg'>Matthew Vladislaw, 46</h3>
                <p className='text-sm mt-4'>
                Chef Matthew Vladislaw is a celebrated culinary director with a rich background in seafood gastronomy.
                    Growing up on the Pacific Northwest coast, Matthew developed a love for the ocean and its bounty from an early age.
                    His professional journey has been marked by stints at some of the top seafood restaurants in the world.
                </p>
                </div>
            </div>
            </div>
        </>
    )
}

function ContactSection(){
    return(
        <>
            <div className='flex flex-col items-center justify-center mt-16'>
                <h1 className='text-3xl font-semibold'>Made up your mind?</h1>
                <h3 className='text-lg'>Feel free to contact us.</h3>
                <div className='flex flex-row gap-4 mt-4'>
                    <Link href='/contact' className='primary-button'>
                        Contact us
                    </Link>
                    
                    <Link href='/gallery' className='outline-button'>
                        Gallery
                    </Link>
                </div>
            </div>
            <div className='mx-32 my-16 max-md:mx-4'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152171.60432508012!2d25.92982652303471!3d44.43795241281017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBucure%C8%99ti!5e1!3m2!1sro!2sro!4v1722892739560!5m2!1sro!2sro" width="600" height="300" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
            </div>
        </>
    )
}

function About() {
    return (
        <div className='w-full bg-white'>
            <TopGallery/>
            <WelcomeSection/>    
            <StorySection/>
            <ChefsSection/>
            <ContactSection/>
        </div>
    )
}

export default About
