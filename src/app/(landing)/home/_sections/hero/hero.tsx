import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { ImgHero, LogoRAte1, LogoRAte2, LogoRAte3 } from '../../../../../../public/img/logo'

export function Hero() {
  type RatingType = {
    image: StaticImageData;
    title: string;
    rate: string
  }
  const RatingWeb: RatingType[] = [
    {
      image: LogoRAte1,
      title: 'Rating Client',
      rate: '1978'
    },
    {
      image: LogoRAte2,
      title: 'Rating Client',
      rate: '1978'
    },
    {
      image: LogoRAte3,
      title: 'Rating Client',
      rate: '1978'
    },
  ]
  return (
    <section className='pt-20'>
      <div className='flex items-center'>
        <Image src={ImgHero} alt='' className='h-56 lg:h-auto' />
        <span className='  lg:w-1/2  lg:pl-20 absolute lg:left-0 left-7 mt-3 pt-5 lg:font-bold lg:text-lg text-xs font-medium'><br />Bak truk inovatif kami dirancang untuk memenuhi <br />
          segala kebutuhan transportasi Anda
          usaha yang <br /> siap melayani  setiap dari  konsumen yang memesan <br /> bak truk dan komponen-komponen bak truk lainnya <br />
        </span>
        <button className='bg-black w-20 h-7 text-white text-xs lg:w-24 lg:h-10 lg:left-20 absolute lg:mt-64 mt-40 left-7 rounded-lg font-bold'>Temukan</button>
      </div>

      <div>
        <ul className='lg:flex lg:gap-16 lg:absolute justify-center lg:left-[115px] lg:top-[540px]'>
          {RatingWeb.map((item: RatingType, i) => (
              <li key={i} className='flex justify-center m-3 items-center gap-3 bg-[#C63030] lg:h-32 h-20 w-1/2 rounded-lg lg:w-72'>
                <Image src={LogoRAte1} alt='' className='w-16 rounded-lg'/>
                <div className=' text-white font-semibold'>
                <p>{item.title}</p>
                <i>{item.rate}</i>
                </div>
              </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
