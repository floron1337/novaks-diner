import { Mail, Map, Phone } from "lucide-react"

function Contact() {
    return (
        <div className='bg-white text-black w-full'>
            <div className='mt-16 bg-white'>
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
      </div>
    )
}

export default Contact
