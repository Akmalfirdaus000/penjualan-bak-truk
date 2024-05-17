import React from 'react'

const Popular = () => {
    return (
        <section className=' bg-[#F59E0B] mt-5 lg:mt-10 lg:px-16'>
            <div className=' text-center p-5 lg:p-10'>
                <i className='text-xs text-red-600'>Jasa Kami</i>
                <h2 className=' font-bold lg:text-xl'>Custom Bak Truk Anda Sekarang
                    Rasakan Kekokohan Bak Truk kami</h2>
                <hr className='border text-black border-black mt-5' />
            </div>
            <div className='flex lg:flex-row flex-col gap-10 px-7 lg:px-0'>
                <div className=' bg-slate-300 h-96 w-full '>
                </div>
                <div className=' bg-slate-300 h-96 w-full '>
                </div>
                <div className=' bg-slate-300 h-96 w-full '>
                </div>
            </div>
            <div>
                <div className='bg-[#C63030] w-52 text-center mx-auto mt-10 rounded-lg'>
                    <button className=' text-white font-semibold text-xs text-[16px] p-2 lg:p-4'>Temukan Sekarang</button>
                </div>
                <p className=' text-center px-5 lg:px-24 pt-5 font-bold'>
                    Temukan kenyamanan dan kehandalan dalam setiap perjalanan bisnis
                    Anda dengan bak truk kami yang dilengkapi dengan fitur-fitur terkini untuk
                    memastikan efisiensi dan produktivitas maksimal
                </p>
            </div>
        </section>
    )
}

export default Popular