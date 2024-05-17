import Image from 'next/image'
import React from 'react'
import { Mobil } from '../../../../../../public/img/home'

export default function Announcement() {
  return (<section className=' lg:grid grid-cols-2 lg:pt-28 pt-10 lg:px-16 px-5 gap-10'>
    <div>
      <div>
        <h2 className=' font-bold text-5xl'>Bersaudara</h2>
        <p className=' pt-5 font-semibold space-y-6 leading-7'>adalah sebuah usaha pembuatan
          bak truk

          usaha yang siap melayani setiap dari
          konsumen yang memesan bak truk dan
          komponen-komponen bak truk
          lainnya
          Penjualan bak truk di perusahaan kami meningkat pesat berkat inovasi dalam desain dan kualitas material yang kami gunakan.
          Kami menawarkan berbagai jenis bak truk yang dapat disesuaikan dengan kebutuhan bisnis Anda, mulai dari bak terbuka hingga bak tertutup.
           </p>
      </div>
    </div>
    <div>
      <div className=' mt-5 border-2 border-black '>
        <Image src={Mobil} alt='mobil'/>
      </div>
    </div>

  </section>
  )
}
