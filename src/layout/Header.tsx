"use client";
import { Button } from '@/components/ui/button';
import { antonClass } from '@/lib/fonts';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Nav from './Nav';

export default function Header() {
    const pathname = usePathname();
    const t = useTranslations('header');

    useEffect(() => {
        console.log('Header : ' + pathname);
    }, [pathname]);

    return (
        <header className={`${pathname === '/our-team' ? "bg-[#3D0404]" : "bg-[linear-gradient(135deg,rgba(232,48,48,0.45)_0%,rgba(232,48,48,0)_100%),url('/videos/header-bg.gif')]"} bg-no-repeat bg-cover w-full p-4 max-h-[100vh] lg:pt-24`}>
            <Nav />
            {
                pathname === '/' &&
                <div className='my-20'>
                    <div className='container mx-auto lg:p-6 mt-32'>
                        <h1 className={`text-7xl font-black flex flex-col uppercase ${antonClass}`}>
                            <span className='text-gradient'>{t('sparks')}</span>
                            <span className='text-white ps-10'>{t('motion')}</span>
                        </h1>
                        <p className='text-white font-bold w-1/2 mt-4'>{t('description')}</p>
                        <Button href="/test" variant="link" className='mt-6'>{t('btn')}</Button>
                    </div>
                </div>

            }
            {pathname == '/our-team' &&
                <Image src="images/about/our_team_intro.webp" alt='About intro' height={700} width={1000} className='w-full -mb-24 lg:p-6 mt-32' />}
        </header>
    );
}
