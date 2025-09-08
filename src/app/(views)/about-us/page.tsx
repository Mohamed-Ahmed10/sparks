import { Button } from "@/components/ui/button";
import { antonClass, spaceClass } from "@/lib/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
    const t = useTranslations('about')
    const common = useTranslations()
    return (
        <>
            <div className="container mx-auto lg:p-6">
                <div className="grid lg:grid-cols-2 gap-20 max-lg:justify-items-center">
                    <Image src="/images/about/about.webp" width={400} height={600} alt="About sparks" />
                    <div className="text-center">
                        <h1 className={`text-5xl font-black my-16 capitalize ${antonClass}`}>
                            <span className="mx-2">{t('we')}</span>
                            <span className="text-[var(--main)]">{t('animate')} </span>,
                            <span className="mx-2">{t('we')}</span>
                            <span className="text-[var(--main)]">{t('spark')} </span>,
                            <span className="mx-2">{t('we')}</span>
                            <span className="text-[var(--main)]">{t('create')}</span>
                        </h1>
                        <p className={`mt-6 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl ${spaceClass}`}>
                            {t('description')}</p>
                        <Button href="/contact-us" variant="foldable" className="mt-20 -ms-10">{common('send_request')}</Button>
                    </div>
                </div >
                <hr className="my-10 h-2" />
                <h2 className={`text-center mx-auto w-11/12 lg:w-3/4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[var(--main)] ${antonClass}`}>
                    {t('our_story')}</h2>
                <div className="grid lg:grid-cols-5 gap-20 my-20">
                    <Image src="/images/about/our_story.webp" width={400} height={600} className="w-full lg:col-span-2" alt="About sparks" />
                    <div className="text-center lg:col-span-3">
                        <p className={`mt-6 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl ${spaceClass}`}>
                            {t('our_story_desc')}</p>
                        <Button
                            href="/portfolio"
                            variant="foldable"
                            className="my-10 hover:w-40"
                        >
                            {common("view_full_portfolio")}
                        </Button>
                    </div>
                </div >
            </div >
            <Image src="/images/test_partners.png" width={400} height={600} className="w-full col-span-2" alt="About sparks" />

        </>
    )
}
