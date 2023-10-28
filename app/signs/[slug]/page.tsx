import React, { FC } from 'react'
import data from '@/public/data/zodiac.json';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ProgressCircle from '@/components/ProgressCircle';

export const  generateStaticParams = () => 
    data.ZodiacSignsDetail.map(zodiac => ({slug: zodiac.Name.toLocaleLowerCase()}));

type ZodiacDetailPageProps = {
    params : {
        slug: string
    }
}

const getZodiacDetailsByParams = (slug:string) => {
    const foundData =  data.ZodiacSignsDetail.find(z => z.Name.toLocaleLowerCase() === slug);
    if ( !foundData ) {
        notFound();
    }
    return foundData;
}

const ZodiacDetailPage: FC<ZodiacDetailPageProps> = ({
    params: {slug}
}) => {
    const zodiacToRender = getZodiacDetailsByParams(slug);
return (
    <div className='w-full h-full grid grid-cols-8 text-amber-50'>
        <div className='col-span-2 px-4 flex justify-center items-center'>
            <Image className='border-2 border-amber-50 rounded-lg' src={`/${zodiacToRender.ZodiacSign2ImageUrl}`} width={460} height={565} alt={zodiacToRender.Name} />
        </div>
        <div className='col-span-6 h-full flex flex-col gap-y-5 py-5 px-8 overflow-y-scroll'>
            <div className='flex justify-start items-end gap-3 '>
                <h1 className='font-important text-4xl'>{zodiacToRender.Name}</h1><span className='text-lg font-light'>{zodiacToRender.Dates}</span>
            </div>
            <div className='text-lg'>
                Nautre - {zodiacToRender.Element}
            </div>
            <div className='flex'>
                {
                    zodiacToRender.Traits.map((trait,index) => (
                        <ProgressCircle key={index} name={trait.name} percentage={trait.percentage} />
                    ))
                }
            </div>
            <p className='font-mm leading-7 tracking-wider'>
                {zodiacToRender.Character}
            </p>
            
            <p className='font-mm leading-7 tracking-wider'>✨ Life Purpose - {zodiacToRender.LifePurpose}</p>
        </div>
    </div>
)}

export default ZodiacDetailPage