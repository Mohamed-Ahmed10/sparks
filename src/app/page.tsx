import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations("home");
  const common = useTranslations();

  const hashTagsRed = [
    "#WeCreate",
    "#WeAnimate",
    "#BoldIdeas",
    "#MotionDesign",
    "#MadeBySparks",
    "#IgniteWithSparks",
  ];

  const hashTagsGray = [
    "#SmartVisuals",
    "#DesignedToImpress",
    "#ThinkBeyond",
    "#AnimationForBrands",
    "#VisualImpact",
    "#SparksInEveryFrame",
  ];

  return (
    <>
      <div className="text-[var(--black-color)] container mx-auto lg:p-6">
        {/* About Sparks */}
        <div className="grid lg:grid-cols-2 my-8 gap-10 lg:gap-16">
          <Image
            src="/images/home/at_sparks.webp"
            alt="At sparks"
            width={600}
            height={600}
            className="w-full"
          />
          <div className="flex justify-center flex-col text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {t("at")}
              <span className="text-[var(--main)]"> {common("sparks")}</span>
            </h3>
            <p className="mt-6 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
              {t("at_sparks_desc")}
            </p>
            <Button
              href="/about-us"
              className="mt-8 hover:w-40 mx-auto lg:mx-0"
              variant="foldable"
            >
              {t("learn_more")}
            </Button>
          </div>
        </div>

        {/* Services Title */}
        <h2 className="text-center mx-auto w-11/12 lg:w-3/4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
          <span className="text-[var(--main)]">{t("our_services")} </span>
          {t("where_meet")}
        </h2>

        {/* 2D Video production */}
        <div className="grid grid-cols-3 my-10 gap-8">
          <Image
            src="/images/home/2d.webp"
            alt="2D"
            width={600}
            height={500}
          />
          <div className="flex justify-center flex-col col-span-2 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[var(--main)]">{t("2d_video")} </span>
              {t("production")}
            </h3>
            <p className="mt-6 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
              {t("2d_desc")}
            </p>
            <div className="flex justify-center">
              <Button
                href="/services/2d-animation"
                className="mt-8 hover:w-32"
                variant="foldable"
              >
                {common("show_more")}
              </Button>
            </div>
          </div>
        </div>

        {/* 3D Video production */}
        <div className="grid grid-cols-3 my-10 gap-8 ps-0 lg:ps-24">
          <div className="flex justify-center flex-col col-span-2 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[var(--main)]">{t("3d_video")} </span>
              {t("production")}
            </h3>
            <p className="mt-6 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
              {t("3d_desc")}
            </p>
            <div className="flex justify-center">
              <Button
                href="/services/3d-animation"
                className="mt-8"
                variant="foldable"
              >
                {common("show_more")}
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/images/home/3d.webp"
              alt="3D"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Media production */}
        <div className="grid grid-cols-3 my-10 gap-8">
          <Image
            src="/images/home/media.webp"
            alt="Media"
            width={600}
            height={600}
          />
          <div className="flex justify-center flex-col col-span-2 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[var(--main)]">{t("media")} </span>
              {t("production")}
            </h3>
            <p className="mt-6 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
              {t("media_desc")}
            </p>
            <div className="flex justify-center">
              <Button
                href="/services/media-production"
                className="mt-8"
                variant="foldable"
              >
                {common("show_more")}
              </Button>
            </div>
          </div>
        </div>

        {/* Creative solution */}
        <div className="grid grid-cols-3 my-10 gap-8 ps-0 lg:ps-24">
          <div className="flex justify-center flex-col col-span-2 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[var(--main)]">{t("creative")} </span>
              {t("solutions")}
            </h3>
            <p className="mt-6 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
              {t("at_sparks_desc")}
            </p>
            <div className="flex justify-center">
              <Button
                href="/services/creative-solutions"
                className="mt-8"
                variant="foldable"
              >
                {common("show_more")}
              </Button>
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/images/home/creative_solutions.webp"
              alt="Creative solutions"
              width={600}
              height={600}
            />
          </div>
        </div>

        {/* Film making */}
        <div className="grid grid-cols-3 my-10 gap-8">
          <Image
            src="/images/home/film_making.webp"
            alt="Film making"
            width={600}
            height={600}
          />
          <div className="flex justify-center flex-col col-span-2 text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="text-[var(--main)]">{t("film")} </span>
              {t("making")}
            </h3>
            <p className="mt-6 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl">
              {t("media_desc")}
            </p>
            <div className="flex justify-center">
              <Button
                href="/services/media-production"
                className="mt-8"
                variant="foldable"
              >
                {common("show_more")}
              </Button>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className="text-center font-semibold">
          <h4 className="text-xl sm:text-2xl md:text-3xl">
            {t("frames_of_our")}
            <span className="text-[var(--main)]">{t("work")}</span>
          </h4>
          <p className="w-11/12 lg:w-3/4 mx-auto text-base sm:text-lg md:text-xl">
            {t("our_work_desc")}
          </p>
          <Button
            href="/portfolio"
            variant="foldable"
            className="my-10 hover:w-40"
          >
            {t("view_full_portfolio")}
          </Button>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-11/12 lg:w-3/5 mx-auto flex justify-center items-center flex-wrap">
            <span className="text-[var(--main)]">{t("we're")}</span>
            {t("crafting")}
            {t("visual_sparks")}
            {t("that_bring")}
            <span className="text-[var(--main)]">{t("stories")}</span>
            {t("to_life")}
          </h3>
        </div>
      </div>

      {/* Marquee */}
      <div className="h-40 my-16 relative">
        <div className="flex items-center overflow-hidden whitespace-nowrap bg-[var(--main)] h-12 rotate-2 absolute top-0 start-0 w-full">
          <div className="inline-block animate-marquee">
            {hashTagsRed.map((item, i) => (
              <span
                key={i}
                className="text-white font-bold text-lg sm:text-xl md:text-2xl px-6 sm:px-10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center overflow-hidden whitespace-nowrap bg-[#EEEAEA] h-12 -rotate-2 absolute top-0 start-0 w-full mt-10">
          <div className="inline-block animate-marquee-reverse">
            {hashTagsGray.map((item, i) => (
              <span
                key={i}
                className="text-[var(--main)] font-bold text-lg sm:text-xl md:text-2xl px-6 sm:px-10"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Creative Partners */}
      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold w-11/12 lg:w-4/5 mx-auto flex justify-center items-center flex-wrap my-10 text-center">
        {t("we_driven_by_creative")}
        <span className="text-[var(--main)] ms-2">{t("partners")}</span>
      </h3>
    </>
  );
}
