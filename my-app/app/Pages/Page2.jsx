
//this is my-app/app/components/Page2.jsx
import React from 'react'
import Image from 'next/image'
import { skills , certificates } from '@/public/Assets/assets'
import { div } from 'three/src/nodes/TSL.js'

const Page2 = () => {
  const mySkills = () => {
    return (
      <>
      {Object.values(skills).map((logo, index)=>(
        <Image loading='lazy' key={index} src={logo} alt='skills' className='max-w-none h-16 w-auto object-contain'/>
      ))}
      </>
    )
  }

  return (
    <div className='bg-black'>
      
      <div className="relative top-0 sm:top-3  w-full overflow-hidden py-6 z-10 bg-black -rotate-3 ">
        {/* My Skills */}
        <div className='flex space-x-16 overflow-hidden'>
          <div className="flex space-x-16 animate-loop-scroll bg-black">
            {mySkills()}
          </div>
          <div className="flex space-x-16 animate-loop-scroll bg-black" aria-hidden="true">
            {mySkills()}
          </div>
        </div>
             
        {/* Bento box */}
        <div className="flex space-x-16 overflow-hidden my-10 w-750">
          <div className="flex space-x-10 overflow-hidden animate-loop-scroll2">
            {[certificates.sertif1, certificates.sertif2, certificates.sertif4].map((img, i) => (
              <div key={i} className="w-200 rounded-xl overflow-hidden flex items-center justify-center bg-noe">
                <Image
                  loading="lazy"
                  src={img}
                  alt="sertif"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex space-x-10 overflow-hidden animate-loop-scroll2">
            {[certificates.sertif5, certificates.sertif6, certificates.sertif7].map((img, i) => (
              <div key={i} className="w-200 rounded-xl overflow-hidden flex items-center justify-center bg-noe">
                <Image
                  loading="lazy"
                  src={img}
                  alt="sertif"
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Page2
