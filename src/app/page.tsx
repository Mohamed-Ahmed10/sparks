import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PAge() {
  const t = useTranslations('home')
  const common = useTranslations()
  return (
    <>
      <div className="text-[var(--black-color)] container mx-auto">
        <div className="grid grid-cols-2 my-8">
          <Image src="/images/home/at_sparks.webp" alt="At sparks" width={600} height={600} className="w-full" />
          <div className="flex justify-center flex-col">
            <h3>
              {t('at')}
              <span className="text-[var(--main)]"> {common('sparks')}</span>
            </h3>
            <p className="mt-6 font-semibold text-3xl text-center">{t('at_sparks_desc')}</p>
            <Button href="/about-us" className="mt-8" variant="foldable">{t('learn_more')}</Button>
          </div>
        </div>
      </div>
      <h2 className="text-center mx-auto w-1/2">
        <span className="text-[var(--main)]">{t('our_services')} </span>
        {t('where_meet')}
      </h2>
      {/* 2D Video production */}
      <div className="grid grid-cols-3 gap-8 my-8">
        <Image src="/images/home/2d.webp" alt="2D" width={600} height={600} className="w-full" />
        <div className="flex justify-center flex-col col-span-2">
          <h3>
            <span className="text-[var(--main)]">2{t('d_video')} </span>
            {t('production')}
          </h3>
          <p className="mt-6 font-semibold text-3xl text-center">{t('2d_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/2d-animation" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
      </div>
      {/* 3D Video production */}
      <div className="grid grid-cols-3 gap-8">
        <div className="flex justify-center flex-col col-span-2">
          <h3>
            <span className="text-[var(--main)]">3{t('d_video')} </span>
            {t('production')}
          </h3>
          <p className="mt-6 font-semibold text-3xl text-center">{t('3d_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/3d-animation" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
        <Image src="/images/home/3d.webp" alt="2D" width={600} height={600} className="w-full" />
      </div>
      {/* Media production */}
      <div className="grid grid-cols-3 gap-8 my-8">
        <Image src="/images/home/media.webp" alt="2D" width={600} height={600} className="w-full" />
        <div className="flex justify-center flex-col col-span-2">
          <h3>
            <span className="text-[var(--main)]">{t('media')} </span>
            {t('production')}
          </h3>
          <p className="mt-6 font-semibold text-3xl text-center">{t('media_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/media-production" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
      </div>
      {/* Creative solution */}
      <div className="grid grid-cols-3 gap-8">
        <div className="flex justify-center flex-col col-span-2">
          <h3>
            <span className="text-[var(--main)]">{t('creative')} </span>
            {t('solutions')}
          </h3>
          <p className="mt-6 font-semibold text-3xl text-center">{t('at_sparks_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/creative-solutions" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
        <Image src="/images/home/creative_solutions.webp" alt="2D" width={600} height={600} className="w-full" />
      </div>
      {/* File making */}
      <div className="grid grid-cols-3 gap-8 my-8">
        <Image src="/images/home/film_making.webp" alt="2D" width={600} height={600} className="w-full" />
        <div className="flex justify-center flex-col col-span-2">
          <h3>
            <span className="text-[var(--main)]">{t('film')} </span>
            {t('making')}
          </h3>
          <p className="mt-6 font-semibold text-3xl text-center">{t('media_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/media-production" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
      </div>
    </>
  );
}
