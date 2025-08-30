import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function PAge() {
  const t = useTranslations('home')
  const common = useTranslations()
  return (
    <div className="text-[var(--black-color)] container mx-auto lg:p-6 grid grid-cols-2 my-8">
      <Image src="/images/home/at_sparks.webp" alt="At sparks" width={400} height={400} className="w-fit" />
      <div className="flex justify-center-safe flex-col">
        <h3 className="text-8xl font-black">
          {t('at')}
          <span className="text-[var(--main)]"> {common('sparks')}</span>
        </h3>
        <p className="mt-6 font-semibold text-3xl text-center">{t('at_sparks_desc')}</p>
        <Button href="/about-us" variant="foldable">{t('learn_more')}</Button>
      </div>
    </div>
  );
}
