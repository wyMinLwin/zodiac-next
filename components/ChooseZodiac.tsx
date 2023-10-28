"use client"
import React, { useCallback, useMemo, useState } from 'react'
import { Variants, motion } from 'framer-motion'
import data from '@/public/data/zodiac.json';
import Image from 'next/image';
import Link from 'next/link';
import { easeInOut } from 'framer-motion/dom';
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
const datePeriods = [[21,19],[20,20],[21,20],[21,22],[23,22],[23,22],[23,22],[23,21],[22,21],[22,19],[20,18],[19,20]]

const ChooseZodiac = () => {
    const itemVariants: Variants = {
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 }
        },
        closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
    };

      const zodiacBox: Variants = {
        hidden: {
            opacity: 0,
            scale: 0.5
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.4,
                ease: easeInOut,
                type: "spring", stiffness: 500, damping: 34, bounce:20
            }
        },
    };
    
    const [monthDialog, setMonthDialog] = useState(false);
    const [monthValue, setMonthValue] = useState<number>();
    const [dateDialog, setDateDialog] = useState(false);
    const [dateValue, setDateValue] = useState<number>();
    const getTotalNumberOfDatesByMonth = useCallback((month:number) => {
      return new Date(new Date().getFullYear(), month+1, 0).getDate();
    },[]);
    const zodiacDataToRender = useMemo(() => {
      if (typeof monthValue === 'number') {
          let arr = [];
          arr = data.ZodiacSignsDetail.filter( z => z.Dates.includes(months[monthValue]));
          if (dateValue) {
              const filteredByDate = arr.filter(z =>  {
                  if (z.Dates.startsWith(months[monthValue])) {
                      if (datePeriods[z.Id-1][0] <= dateValue) return z;
                  } else if (datePeriods[z.Id-1][1] >= dateValue) return z;
              });
              return filteredByDate;
          }
          return arr;
      }
      return data.ZodiacSignsDetail;
    },[monthValue,dateValue]);

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
                    className='bg-amber-50 ml-auto rounded-lg px-3 py-2 flex items-center gap-3 w-52'>
                    <span>{ typeof monthValue !== 'number' ? 'Choose Birth Month' : months[monthValue]}</span>
                    <svg className='ml-auto' width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.button>
                <motion.ul
                    className='absolute w-52 mt-2 py-2 px-3 bg-amber-50 rounded-lg h-60 overflow-y-scroll shadow-effect'
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
                    style={{ pointerEvents: monthDialog ? "auto" : "none", }}
                >
                    {
                        months.map((month,index) => (
                            <motion.li onClick={() => {setMonthValue(index);setMonthDialog(false)}} key={month} className='py-2 px-3' variants={itemVariants}> {month} </motion.li>
                        ))
                    }
                </motion.ul>
            </motion.nav>
            <motion.nav
                initial={false}
                animate={dateDialog ? "open" : "closed"}
                className="w-fit relative"
            >
                <motion.button 
                    disabled={typeof monthValue != 'number'}
                    onClick={() => setDateDialog(!dateDialog)}
                    whileHover={{scale:1.06}}
                    whileTap={{scale: 0.9}}
                    className='bg-amber-50 mr-auto rounded-lg w-52 px-3 py-2 flex items-center gap-3'>
                    <span>{ typeof dateValue !== 'number' ? 'Choose Birth Date' : dateValue}</span>
                    <svg className='ml-auto' width="15" height="15" viewBox="0 0 20 20">
                        <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                </motion.button>
                <motion.ul
                    className='absolute w-52 mt-2 py-2 px-3 bg-amber-50 rounded-lg h-60 overflow-y-scroll shadow-effect'
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
                    style={{ pointerEvents: dateDialog ? "auto" : "none", }}
                >
                    {
                        (() => {
                            let daysToRender = [];
                            for (let i = 1; i <= getTotalNumberOfDatesByMonth(monthValue || 0); i++) {
                                daysToRender.push(
                                    <motion.li key={i} onClick={() => {setDateValue(i);setDateDialog(false);}} className='py-2 px-3' variants={itemVariants}> {i} </motion.li>
                                )
                            }
                            return daysToRender;
                        })()
                    }
                </motion.ul>
            </motion.nav>       
        </div>
        <div className={`grid grid-cols-3 gap-4 px-40 mt-3 ${ monthDialog || dateDialog ? 'pointer-events-none' : ''}`}>
            {
                zodiacDataToRender.map((zodiac) => (
                    <Link href={`/signs/${zodiac.Name.toLowerCase()}`} key={zodiac.Id}>
                        <motion.div 
                            initial={"hidden"}
                            animate={"visible"}
                            variants={zodiacBox}
                            whileHover={{scale:1.04}}
                            whileTap={{scale:0.95}}
                            className='col-span-1 flex justify-start items-start gap-x-2 bg-amber-50 rounded-md overflow-hidden'>
                            <Image src={`/${zodiac.ZodiacSignImageUrl}`} width={100} height={100} alt={zodiac.Name} />
                            <div className='p-3 flex flex-col'>
                                <span className='font-important text-xl'>{zodiac.Name}</span>
                                <span className='font-light text-lg'>{zodiac.Dates}</span>
                            </div>
                        </motion.div>
                    </Link>
                ))
            }
        </div>
    </div>
  )
}
export default ChooseZodiac