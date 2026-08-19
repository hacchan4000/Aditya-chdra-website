import React, {useState} from 'react'
import Image from 'next/image'

const Project = ({no, title, desc, img, link}) => {
  const lihatProyek = ({link}) => {
    window.open(link, '_blank')
  }
  return (
    <>
    <div className="sticky top-30 h-150 w-[80%] md:w-[70%] bg-black rounded-3xl border-2 border-white p-5 shadow-lg shadow-white/10">
                
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-6 justify-between">
          <h1 className="font-bold text-[50px] sm:text-[70px] -mt-2 sm:-mt-4">{no}</h1>

          <div className="absolute ml-15 px-0 sm:px-5 mt-2 sm:mb-8 justify-start">
            <h2 className="text-xl sm:text-3xl font-bold max-w-[200px] whitespace-nowrap">{title}</h2>
            <p className="text-gray-300 text-sm sm:text-base">{desc}</p>
            
          </div>

          <button onClick={lihatProyek} className="bg-black border-2 my-2 border-white rounded-full py-2 px-6 text-sm sm:text-base cursor-pointer hover:bg-white hover:text-black transition-all duration-300 self-start sm:self-center">
                Live Project
          </button> 
        </div>

        
        <Image src={img} alt='idk' className='w-full h-[70%] sm:h-[80%] rounded-2xl overflow-hidden' width={1300} height={800}/>

          

               
    </div>
            {/* Spacer to allow scroll */}
    <div className="h-80"></div>
    </>
  )
}

export default Project
