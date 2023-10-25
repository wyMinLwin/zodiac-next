import ChooseZodiac from '@/components/ChooseZodiac'
import ZodiacCircle from '@/components/ZodiacCircle'
import ZodiacTypo from '@/components/ZodiacTypo'
import React from 'react'

const page = () => {
  
  return (
    <div className='w-full h-full overflow-y-scroll'>
      <div className='grid grid-cols-2'>
        <div className='col-span-1'>
          <ZodiacTypo />
          <p className='px-5 py-5 space-x-1 text-2xl font-light text-amber-50'>is a belt of the heavens within about 8° either side of the ecliptic, including all apparent positions of the sun, moon, and most familiar planets. It is divided into twelve equal divisions or signs (Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces).</p>
        </div>
        <div className='col-span-1'>
          <ZodiacCircle />
        </div>
      </div>
      <p className='text-center mt-3 text-2xl font-extralight text-amber-50'>Check your zodiac sign</p>
      <ChooseZodiac />
    </div>
  )
}

export default page