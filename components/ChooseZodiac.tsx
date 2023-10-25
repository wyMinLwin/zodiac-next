"use client"
import React, { useState } from 'react'
import { Variants, motion } from 'framer-motion'
import data from '@/public/data/zodiac.json';
import Image from 'next/image';
import Link from 'next/link';
const ChooseZodiac = () => {
    const itemVariants: Variants = {
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
      };
      const [monthDialog, setMonthDialog] = useState(false);
      const [dateDialog, setDateDialog] = useState(false);


  return (
    <div className='my-3'>
        <div className='flex justify-center items-center gap-x-5'>
            <motion.nav
                initial={false}
                animate={monthDialog ? "open" : "closed"}
                className="w-fit relative"
            >
                <motion.button 
                    onClick={() => setMonthDialog(!monthDialog)}
                    whileHover={{scale:1.06}}
                    whileTap={{scale: 0.9}}
                    className='bg-amber-50 ml-auto rounded-lg w-fit px-3 py-2 flex items-center gap-3'>
                    <span>Choose Birth Month</span>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.button>
                <motion.ul
                    className='absolute w-full mt-2 py-2 px-3 bg-amber-50 rounded-lg'
                    variants={{
                    open: {
                        clipPath: "inset(0% 0% 0% 0% round 10px)",
                        transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                        }
                    },
                    closed: {
                        clipPath: "inset(10% 50% 90% 50% round 10px)",
                        transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3
                        }
                    }
                    }}
                    style={{ pointerEvents: monthDialog ? "auto" : "none" }}
                >
                    <motion.li className='py-2' variants={itemVariants}>Item 1 </motion.li>
                    <motion.li className='py-2' variants={itemVariants}>Item 2 </motion.li>
                    <motion.li className='py-2' variants={itemVariants}>Item 3 </motion.li>
                    <motion.li className='py-2' variants={itemVariants}>Item 4 </motion.li>
                    <motion.li className='py-2' variants={itemVariants}>Item 5 </motion.li>
                </motion.ul>
            </motion.nav>
            <motion.nav
                initial={false}
                animate={monthDialog ? "open" : "closed"}
                className="w-fit relative"
            >
                <motion.button 
                    whileHover={{scale:1.06}}
                    whileTap={{scale: 0.9}}
                    className='bg-amber-50 mr-auto rounded-lg w-fit px-3 py-2 flex items-center gap-3'>
                    <span>Choose Birth Date</span>
                    <svg width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.button>
            </motion.nav>       
        </div>
        <div className='grid grid-cols-3 gap-3 px-40 mt-3'>
            {
                data.ZodiacSignsDetail.map((zodiac) => (
                    <Link href={`/signs/${zodiac.Name.toLowerCase()}`} key={zodiac.Id}>
                        <div className='col-span-1 flex justify-start items-start gap-x-2 bg-amber-50 rounded-md overflow-hidden'>
                            <Image src={`/${zodiac.ZodiacSignImageUrl}`} width={100} height={100} alt={zodiac.Name} />
                            <div className='p-3 flex flex-col'>
                                <span className='font-important text-xl'>{zodiac.Name}</span>
                                <span className='font-light text-lg'>{zodiac.Dates}</span>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}

export default ChooseZodiac