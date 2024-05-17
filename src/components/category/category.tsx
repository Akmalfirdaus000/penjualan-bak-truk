import React from 'react'


const Category = () => {
    type categorytype = {
        title: string;
    }
    const CategoryWeb: categorytype[] = [
        {
            title: 'Hino'
        },
        {
            title: 'Cols Deasel'
        },
        {
            title: 'Tronton'
        },
        {
            title: 'L300'
        },
        {
            title: 'Hino'
        },
        {
            title: 'Hino'
        },
    ]
    return (
        <section>
            <h2 className=' lg:px-32 px-7 font-bold text-3xl lg:pt-10 pt-5 pb-5'>Category</h2>
            <div>
                <ul className=' grid grid-cols-3 gap-6 px-10 lg:gap-10 lg:px-32  '>
                    {CategoryWeb.map((item, i) => (
                        <li key={i} className='bg-[#C63030] lg:px-16 rounded-lg shadow-lg border-slate-600'>
                            <span className='mx-auto flex justify-center items-center text-center p-3 lg:p-5   font-semibold text-white text-xs lg:text-[16px]'>
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Category