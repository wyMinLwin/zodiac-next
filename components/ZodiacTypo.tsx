"use client"
import React from 'react'
import {motion} from 'framer-motion'
const ZodiacTypo = () => {
    const strokeAnimation = {
        hidden: { strokeDashoffset: 650, strokeDasharray: 650 },
        visible: (i:number) => ({
            strokeDashoffset: 0,
            strokeDasharray: 660,
            transition: {
                delay: i * 0.2,
                duration: 3,
                ease: "easeOut",
            },
            
        }),
      }
  return (
    <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        initial={"hidden"}
        animate={"visible"}
        x={0}
        y={0}
        id="Layer_1"
        viewBox="0 0 350 65"
    >
        <g>

            <motion.text
                custom={0}
                className='stroke-1 fill-none stroke-amber-50 text-6xl font-header'
                variants={strokeAnimation}
                transform="translate(10 58)"
                >
            {"Z"}
            </motion.text>
            <motion.text
                custom={1}
                className='stroke-1 fill-none stroke-amber-50 text-6xl font-header'
                variants={strokeAnimation}
                transform="translate(44 58)"
                >
            {"o"}
            </motion.text>
            <motion.text
                custom={2}
                className='stroke-1 fill-none stroke-amber-50 text-6xl font-header'
                variants={strokeAnimation}
                transform="translate(76 58)"
                >
            {"d"}
            </motion.text>
            <motion.text
                custom={3}
                className='stroke-1 fill-none stroke-amber-50 text-6xl font-header'
                variants={strokeAnimation}
                transform="translate(107 58)"
                >
            {"i"}
            </motion.text>
            <motion.text
                custom={4}
                className='stroke-1 fill-none stroke-amber-50 text-6xl font-header'
                variants={strokeAnimation}
                transform="translate(120 58)"
                >
            {"a"}
            </motion.text><motion.text
                custom={5}
                className='stroke-1 fill-none stroke-amber-50 text-6xl font-header'
                variants={strokeAnimation}
                transform="translate(151 58)"
                >
            {"c"}
            </motion.text>
        </g>
        
    </motion.svg>
  )
}

export default ZodiacTypo