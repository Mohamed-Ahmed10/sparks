import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PAge() {
  const t = useTranslations('home')
  const common = useTranslations()

  const hashTagsRed = [
    "#WeCreate",
    "#WeAnimate",
    "#BoldIdeas",
    "#MotionDesign",
    "#MadeBySparks",
    "#IgniteWithSparks"
  ];

  const hashTagsGray = [
    "#SmartVisuals",
    "#DesignedToImpress",
    "#ThinkBeyond",
    "#AnimationForBrands",
    "#VisualImpact",
    "#SparksInEveryFrame"
  ];


  return (
    <>
      <div className="text-[var(--black-color)] container mx-auto lg:p-6">
        <div className="grid grid-cols-2 my-8">
          <Image src="/images/home/at_sparks.webp" alt="At sparks" width={600} height={600} className="w-full" />
          <div className="flex justify-center flex-col">
            <h3 className="text-[3rem] font-bold">
              {t('at')}
              <span className="text-[var(--main)]"> {common('sparks')}</span>
            </h3>
            <p className="mt-6 font-semibold text-[1.5rem] text-center">{t('at_sparks_desc')}</p>
            <Button href="/about-us" className="mt-8" variant="foldable">{t('learn_more')}</Button>
          </div>
        </div>
      </div>
      <h2 className="text-center mx-auto w-3/4 text-[4rem] font-black">
        <span className="text-[var(--main)]">{t('our_services')} </span>
        {t('where_meet')}
      </h2>
      {/* 2D Video production */}
      <div className="grid grid-cols-3 my-10 gap-8">
        <Image src="/images/home/2d.webp" alt="2D" width={600} height={500} className="w-3/4" />
        <div className="flex justify-center flex-col col-span-2">
          <h3 className="text-[3rem] font-bold">
            <span className="text-[var(--main)]">{t('2d_video')} </span>
            {t('production')}
          </h3>
          <p className="mt-6 font-semibold text-[1.5rem] text-center">{t('2d_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/2d-animation" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
      </div>
      {/* 3D Video production */}
      <div className="grid grid-cols-3 my-10 gap-8 ps-10 lg:ps-24">
        <div className="flex justify-center flex-col col-span-2 container mx-auto lg:p-6">
          <h3 className="text-[3rem] font-bold">
            <span className="text-[var(--main)]">{t('3d_video')} </span>
            {t('production')}
          </h3>
          <p className="mt-6 font-semibold text-[1.5rem] text-center">{t('3d_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/3d-animation" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src="/images/home/3d.webp" alt="2D" width={600} height={600} className="w-3/4" />
        </div>
      </div>
      {/* Media production */}
      <div className="grid grid-cols-3 my-10 gap-8">
        <Image src="/images/home/media.webp" alt="2D" width={600} height={600} className="w-3/4" />
        <div className="flex justify-center flex-col col-span-2">
          <h3 className="text-[3rem] font-bold">
            <span className="text-[var(--main)]">{t('media')} </span>
            {t('production')}
          </h3>
          <p className="mt-6 font-semibold text-[1.5rem] text-center">{t('media_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/media-production" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
      </div>
      {/* Creative solution */}
      <div className="grid grid-cols-3 my-10 gap-8">
        <div className="flex justify-center flex-col col-span-2">
          <h3 className="text-[3rem] font-bold">
            <span className="text-[var(--main)]">{t('creative')} </span>
            {t('solutions')}
          </h3>
          <p className="mt-6 font-semibold text-[1.5rem] text-center">{t('at_sparks_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/creative-solutions" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
        <div className="flex justify-end">
          <Image src="/images/home/creative_solutions.webp" alt="2D" width={600} height={600} className="w-3/4" />
        </div>
      </div>
      {/* File making */}
      <div className="grid grid-cols-3 my-10 gap-8">
        <Image src="/images/home/film_making.webp" alt="2D" width={600} height={600} className="w-3/4" />
        <div className="flex justify-center flex-col col-span-2">
          <h3 className="text-[3rem] font-bold">
            <span className="text-[var(--main)]">{t('film')} </span>
            {t('making')}
          </h3>
          <p className="mt-6 font-semibold text-[1.5rem] text-center">{t('media_desc')}</p>
          <div className="flex justify-center">
            <Button href="/services/media-production" className="mt-8" variant="foldable">{common('show_more')}</Button>
          </div>
        </div>
      </div>
      <div className="text-2xl text-center font-semibold">
        <h4>{t('frames_of_our')}
          <span className="text-[var(--main)]">{t('work')}</span>
        </h4>
        <p className="w-3/4 mx-auto">{t('our_work_desc')}</p>
        <Button href="/portfolio" variant="foldable" className="my-10">{t('view_full_portfolio')}</Button>
        <h3 className="text-8xl font-bold w-3/5 mx-auto flex justify-center items-center flex-wrap">
          <span className="text-[var(--main)]">{t("we're")}</span>
          {t('crafting')}
          <span className="inline-block h-14 w-14 mx-2 rounded-sm bg-[radial-gradient(50%_50%_at_50%_50%,#0D0D0D_0%,#3D0404_100%)] mt-4 relative group">
            <Image src="/images/samples/1.webp" width={500} height={500} alt="Sample" className="absolute -top-1/2 -left-1/2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-52" />
          </span>
          {t('visual_sparks')}
          <span className="inline-block h-14 w-14 mx-2 rounded-sm bg-[radial-gradient(50%_50%_at_50%_50%,#0D0D0D_0%,#3D0404_100%)] mt-4 relative group">
            <Image src="/images/samples/2.webp" width={500} height={500} alt="Sample" className="absolute -top-1/2 -left-1/2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-52" />
          </span>
          {t('that_bring')}
          <span className="inline-block h-14 w-14 mx-2 rounded-sm bg-[radial-gradient(50%_50%_at_50%_50%,#0D0D0D_0%,#3D0404_100%)] mt-4 relative group">
            <Image src="/images/samples/3.webp" width={500} height={500} alt="Sample" className="absolute -top-1/2 -left-1/2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-52" />
          </span>
          <span className="text-[var(--main)]">{t("stories")}</span>
          {t('to_life')}
        </h3>
      </div>
      <div className="h-40 my-16 relative">
        <div className="flex items-center overflow-hidden whitespace-nowrap bg-[var(--main)] h-12 rotate-2 absolute top-0 start-0 w-full">
          <div className="inline-block animate-marquee">
            {hashTagsRed.map((item, i) =>
              <span key={i} className="text-white font-bold text-2xl px-10">{item}</span>
            )}
          </div>
        </div>
        <div className="flex items-center overflow-hidden whitespace-nowrap bg-[#EEEAEA] h-12 -rotate-2 absolute top-0 start-0 w-full mt-10">
          <div className="inline-block animate-marquee-reverse">
            {hashTagsGray.map((item, i) =>
              <span key={i} className="text-[var(--main)] font-bold text-2xl px-10">{item}</span>
            )}
          </div>
        </div>
      </div>
      <h3 className="text-8xl font-bold w-4/5 mx-auto flex justify-center items-center flex-wrap my-10">{t('we_driven_by_creative')}
        <span className="text-[var(--main)]">{t('partners')}</span>
      </h3>
      <ContactForm />
    </>
  );
}
