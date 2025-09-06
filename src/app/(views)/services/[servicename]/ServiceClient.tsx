"use client"

import { Button } from "@/components/ui/button";
import { antonClass, spaceClass } from "@/lib/fonts";
import { kebabToSnake } from "@/lib/kebebToSnake";
import { useTranslations } from "next-intl";
import Image from "next/image";

type ServiceItem = {
    title: string;
    description: string;
};

export default function ServiceClient({ servicename }: { servicename: string }) {
    const t = useTranslations();
    const serviceTranslation = t.raw('services.' + kebabToSnake(servicename))

    return (
        <div className="container mx-auto lg:p-6 my-10">
            <div className="grid lg:grid-cols-5 my-8 gap-10 lg:gap-16">
                <div className="col-span-3">
                    <h1 className={`text-5xl font-black flex capitalize ${antonClass}`}>
                        <span className="text-[var(--main)] me-1">{serviceTranslation.red_title}</span>
                        <span>{serviceTranslation.black_title}</span>
                    </h1>
                    <p className={`mt-10 text-3xl font-semibold ${spaceClass}`}>{serviceTranslation.description}</p>
                    <Button href="/contact-us" variant="foldable" className="mt-20 -ms-10">{t('send_request')}</Button>
                </div>
                <div className="col-span-2">
                    <Image src={`/images/services/${kebabToSnake(servicename)}.webp`} height={700} width={700} alt={servicename} className="object-contain" />
                </div>
            </div>
            <div className="text-center">
                <h2 className={`text-center mx-auto w-11/12 lg:w-3/4 text-3xl sm:text-2xl md:text-3xl lg:text-4xl flex gap-1 font-bold flex-wrap justify-center ${antonClass}`}>
                    <span>{t('services.how')}</span>
                    <span className="text-[var(--main)]">{t('services.we')}</span>
                    <span>{t('services.bring')}</span>
                    <span className="text-[var(--main)]">{t('services.life')}</span>
                </h2>
                <p className={`font-semibold ${spaceClass}`}>{t('services.benefits_desc')}</p>
            </div>
            <ul className="my-6">
                {serviceTranslation.items.map((item: ServiceItem, index: number) =>
                    <li key={index} className="flex items-center mb-10 gap-6">
                        <div>
                            <Image src={`/icons/services/${index + 1}.svg`} height={70} width={70} alt={servicename} className="object-contain" />
                        </div>
                        <div>
                            <h4 className={`text-lg sm:text-xl md:text-2xl font-semibold ${antonClass}`}>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    </li>
                )}
            </ul>
            <div className="text-center font-semibold">
                <h4 className={`text-xl ${antonClass}`}>
                    {t('services.frames_of_our')}
                    <span className="text-[var(--main)]">{t('services.work')}</span>
                </h4>
                <p>{t('services.frames_desc')}</p>
                <Button href="/portfolio" variant="foldable" className="mt-20 -ms-10">{t('view_full_portfolio')}</Button>
                <p className={`mt-16 text-3xl ${spaceClass}`}>{t('services.last_desc')}</p>
            </div>
        </div >
    )
}
