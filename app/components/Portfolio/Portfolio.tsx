import { ArrowBigRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Portfolio = () => {
  return (
    <>
        <p id="portfolio" className='text-center text-4xl my-5 lg:text-5xl'>Previous Works</p>
    <div className='flex justify-center'>
        <div className="grid grid-flow-col lg:grid-cols-3 space-x-4 gap-2 grid-cols-2 w-3/4">
            <div className='space-y-3'>
            
            <img className="h-auto max-w-full rounded-xl" src="/pictures/1.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/2.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/3.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/4.jpg" alt="" />

            </div>
            <div className='space-y-3'>

            <img className="h-auto max-w-full rounded-xl" src="/pictures/5.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/6.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/7.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/8.jpg" alt="" />

            </div>
            <div className='space-y-3'>

            <img className="h-auto max-w-full rounded-xl" src="/pictures/9.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/13.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/11.jpg" alt="" />
            <img className="h-auto max-w-full rounded-xl" src="/pictures/12.jpg" alt="" />

            </div>
        </div>
    </div>
<div className='flex justify-center my-3 hover:text-blue-500 duration-200'>
<Link className='text-lg flex' href='/gallery'>See More </Link>
<ArrowRight className='mt-0.5 text-sm'/>
</div>
    </>
  )
}

export default Portfolio;