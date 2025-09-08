import { antonClass, spaceClass } from "@/lib/fonts";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Page = () => {
    const members = Array.from({ length: 12 })
    const t = useTranslations('about')
    return (
        <>
            <div className="container mx-auto lg:p-6 text-center">
                <h1 className={`text-5xl font-black my-16 capitalize ${antonClass}`}>
                    <span className="mx-2">{t('meet')}</span>
                    <span className="text-[var(--main)]">{t('the_sparks')} </span>
                    <span className="mx-2">{t('behind')} </span>
                    <span className="text-[var(--main)]">{t('the_magic')}</span>
                </h1>
                <p className={`mt-6 mb-20 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl ${spaceClass}`}>
                    {t('our_team_desc')}
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4">
                    {members.map((member, index) =>
                        <div key={index} className=" flex flex-col justify-center items-center mb-4">
                            <Image src="images/about/test_member.webp" width={300} height={300} alt="Team member" className="rounded-full w-48" />
                            <h4 className={`text-lg sm:text-xl md:text-2xl font-semibold text-[var(--main)] my-3 ${antonClass}`}>Mohamed El Haty</h4>
                            <h5 className="font-semibold">3D Animator</h5>
                        </div>
                    )}
                </div>
            </div>
            <Image src="images/about/team_scenes.webp" width={300} height={300} alt="Team member" className="w-full" />
            <p className={`my-20 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-center ${spaceClass}`}>
                {t('our_team_p')}
            </p>
        </>
    );
}

export default Page;
