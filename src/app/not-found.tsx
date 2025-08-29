import { MotionDiv } from '@/components/animated';
import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';

export default function NotFound() {
    const t = useTranslations();

    return (
        <>
            <Head>
                <title>{t('not_found') || 'Page Not Found'}</title>
                <meta property="og:type" content="website" />
            </Head>
            <div className="flex flex-col items-center bg-gradient-to-tr p-6">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className='w-full text-center flex justify-center'
                >
                    <Image src="/images/error.webp" height={500} width={500} className='w-1/2' alt="Error " />
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <Button href="/" variant="link" className='mt-6' size="lg">
                        {t('back_to_home')}
                    </Button>
                </MotionDiv>
            </div >
        </>
    );
}
