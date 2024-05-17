'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Navbar } from "flowbite-react";
import { Bersaudara, LogoWA } from '../../../public/img/logo';

const Bavbar = () => {
    return (
        <section className='fixed w-full z-10' >
            <Navbar
                fluid={true}
                rounded={true}
            >
                    <Navbar.Brand>
                        {/* <h1 className='text-3xl font-bold uppercase'>Bersaudara</h1> */}
                        <Image
                            src={Bersaudara}
                            className="lg:w-56 w-36 lg:pl-5 pl-1"
                            alt=""
                            />
                        {/* <span className="text-xl font-semibold dark:text-white pl-24p md:hidden lg:hidden">
                            Akmal <b className='text-[#FD6F00]'>Firdaus</b>
                        </span> */}
                    </Navbar.Brand>
                <Navbar.Toggle className='' />


                <Navbar.Collapse className=' text-red-300'>
                    <Navbar.Link
                        href="/"
                        // active={true}
                        className='font-bold items-center flex text-[18px]'
                    >
                        Halaman Utama
                    </Navbar.Link>
                    <Navbar.Link href="/bak-truk" className='font-bold items-center flex text-[18px]'>
                        Bak Truk
                    </Navbar.Link>
                    <Navbar.Link href="/" className='font-bold items-center flex text-[18px]'>
                        Foto
                    </Navbar.Link>
                    <Navbar.Link href="/" className='font-bold items-center flex text-[18px]'>
                        Tentang
                    </Navbar.Link>
                    <Navbar.Link href="/" className='font-bold items-center flex text-[18px]'>
                        Kontak
                    </Navbar.Link>
                   

                </Navbar.Collapse>
                    <Navbar.Collapse>
                        <Link href={'/'} className=''>
                        <Image  src={LogoWA} alt='kontak' width={200}/>
                        </Link>
                    </Navbar.Collapse>

            </Navbar>
        </section>
    );
};

export default Bavbar;