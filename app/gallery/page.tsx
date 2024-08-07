import Image from "next/image"

function Gallery() {
    return (
        <div className='my-16 flex flex-col mx-32 gap-4 max-md:mx-4'>
            <div className='flex flex-row gap-4 max-md:flex-col'>
                <div className='w-1/2 max-md:w-full'>
                    <Image src='/img/gallery1.jpg' alt="" width={1920} height={1280}/>
                </div>
                <div className='w-1/2 max-md:w-full'>
                    <Image src='/img/gallery2.jpg' alt="" width={1920} height={1280}/>
                </div>
            </div>
            <div className='w-full'>
                <Image src='/img/gallery3.jpg' alt="" width={1920} height={720}/>
            </div>
            <div className='flex flex-row gap-4 max-md:flex-col'>
                <div className='w-1/3 max-md:w-full'>
                    <Image src='/img/gallery4.jpg' alt="" width={1992} height={1992}/>
                </div>
                <div className='w-1/3 max-md:w-full'>
                    <Image src='/img/gallery5.jpg' alt="" width={2240} height={2240}/>
                </div>
                <div className='w-1/3 max-md:w-full'>
                    <Image src='/img/gallery6.jpg' alt="" width={960} height={960}/>
                </div>
            </div>
            <div className='w-full'>
                <Image src='/img/gallery7.jpg' alt="" width={2560} height={1440}/>
            </div>
            <div className='flex flex-row gap-4 max-md:flex-col'>
                <div className='w-1/2 max-md:w-full'>
                    <Image src='/img/gallery8.jpg' alt="" width={2725} height={1363}/>
                </div>
                <div className='w-1/2 max-md:w-full'>
                    <Image src='/img/gallery9.jpg' alt="" width={5376} height={2688}/>
                </div>
            </div>
        </div>
    )
}

export default Gallery
