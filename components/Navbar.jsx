import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import {AiOutlineSearch} from "react-icons/ai"
const Navbar = () => {
    return (
        <div className='bg-[#04111d] w-screen px-[1.2rem] py-[0.8rem] flex'>
            <Link href="/">
                <div className='flex items-center cursor-pointer'>
                <Image src="/assets/opensea.png" height={40} width={40}/>
                <div className='text-white text-2xl ml-[13px] font-semibold'>
                    OpenSea
                </div>
                </div>
            </Link>
            <div className='flex flex-1 mx-[0.8rem] w-max-[520px] bg-[#363840] rounded-[0.8rem] items-center hover:bg-[#4c505c]'>
                 <div className='text-[#8a939b] mx-3 font-bold text-lg'>
                    <AiOutlineSearch/>
                    <input className='h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]' placeholder='Search items, collections, and accounts'/>
                 </div>
            </div>
        </div>
    )
}

export default Navbar