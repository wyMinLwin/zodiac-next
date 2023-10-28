"use client"
import Image from 'next/image'
import Link from 'next/link'
import {motion} from 'framer-motion'
const signs = ['aries','taurus','gemini','cancer','leo','virgo','libra','scorpio','sagittarius','capricorn','aquarius','pisces']
const ZodiacCircle = () => {
    const variants = {
        hidden: (index:number) =>({ 
          opacity: 0, 
          x: 0, y: 0,
          translateX:150,
          translateY:150, 
          rotate: -30*index
        }),
        visible: (index:number) => ({
          opacity: 1,
          x: Math.cos((2 * Math.PI * (9 - index)) / 12) * 140,
          y: Math.sin((2 * Math.PI * (9 - index)) / 12) * 140,
        }),
      };
  return (
    <motion.div className='w-96 h-96'
      animate={{rotate:360}} transition={{duration:13,repeat:Infinity}}>
        {
          signs.map((sign,i) => (
              <motion.div 
                  custom={i}
                  initial="hidden"
                  animate={"visible"}
                  variants={variants}
                  className='p-3 absolute flex justify-center items-center'  key={sign} style={{width:'52px',height:'52px'}}>
                  <Link href={`signs/${sign}`}>
                      <Image src={`/images/ZodiacSVGs/h${i+1}.svg`} className='aspect-square absolute top-0 ' width={52} height={52} alt='zodiac-svg' />
                  </Link>
              </motion.div>
          ))
        } 
    </motion.div>
  )
}
export default ZodiacCircle