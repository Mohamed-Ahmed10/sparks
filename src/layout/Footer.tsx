"use client";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaLinkedinIn, FaVimeoV, FaYoutube } from "react-icons/fa";

const randomPosition = () => ({
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
});

export default function Footer() {
    const t = useTranslations("footer");
    const pathname = usePathname()

    return (
        <footer className="relative bg-[var(--dark-red)] text-white px-8 py-12 overflow-hidden font-medium">
            {pathname != '/contact-us'
                && (<ContactForm />)
            }
            <motion.div
                className="absolute w-72 h-72 rounded-full bg-red-400/20 blur-3xl"
                animate={randomPosition()}
                transition={{
                    duration: .4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute right-0 bottom-0 w-72 h-72 rounded-full bg-red-400/20 blur-3xl"
                animate={randomPosition()}
                transition={{
                    duration: .4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-10 z-10">
                <div className="col-span-2">
                    <Image src="/logo-2.png" width={250} height={100} alt={t("logoAlt")} />
                    <p className="mt-4 text-lg font-semibold text-white leading-relaxed">
                        {t("description")}
                    </p>
                </div>
                <div>
                    <h5 className="font-bold text-2xl mb-3">{t("services.title")}</h5>
                    <ul className="space-y-2 text-sm text-white">
                        <li><Link href="/services/2d-animation">{t("services.items.2d")}</Link></li>
                        <li><Link href="/services/3d-animation">{t("services.items.3d")}</Link></li>
                        <li><Link href="/services/media-production">{t("services.items.media")}</Link></li>
                        <li><Link href="/services/creative-solutions">{t("services.items.creative")}</Link></li>
                        <li><Link href="/services/film-making-production">{t("services.items.film")}</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-2xl mb-3">{t("company.title")}</h5>
                    <ul className="space-y-2 text-sm text-white">
                        <li><Link href="/">{t("company.items.home")}</Link></li>
                        <li><Link href="/about-us">{t("company.items.about")}</Link></li>
                        <li><Link href="/our-services">{t("company.items.services")}</Link></li>
                        <li><Link href="/portfolio">{t("company.items.portfolio")}</Link></li>
                        <li><Link href="/contact-us">{t("company.items.contact")}</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-2xl mb-3">{t("follow.title")}</h5>
                    <div className="flex space-x-4 mb-6">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaVimeoV className="hover:text-white cursor-pointer" />
                        <FaYoutube className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                    </div>
                    <div className="text-sm space-y-1">
                        <p>
                            <strong className="font-semibold">{t("follow.phoneLabel")}</strong>
                            <a rel="noopener noreferrer" className="block mt-2 mb-3" href="tel:+971504329234">+971 50 4329234</a>
                        </p>
                        <p>
                            <strong className="font-semibold">{t("follow.emailLabel")}</strong>
                            <Link className="block mt-2 mb-3 cursor-pointer" href="mailto:info@sparks.studio">info@sparks.studio</Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative border-t border-white/20 mt-10 pt-4 text-center text-[#C2BFBF] text-xl">
                {t("copyright")}
            </div>
        </footer>
    );
}
