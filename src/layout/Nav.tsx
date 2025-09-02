"use client";
import setLanguageAction from "@/actions/set-language-actions";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdGTranslate } from "react-icons/md";

export default function Nav() {
    const t = useTranslations('nav')
    const navItems = [
        { href: "/", label: "home" },
        { href: "/portfolio", label: "portfolio" },
        { href: "/our-services", label: "our_services" },
        { href: "/about-us", label: "about_us" },
        { href: "/contact-us", label: "contact_us" },
    ];
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const pathName = usePathname();
    const locale = useLocale();

    return (
        <>
            <nav
                className={`w-5/6 ms-[8%] gap-4 fixed top-[4.89%] border border-[rgba(255,255,255,0.15)] shadow-[0px_10px_24px_rgba(255,255,255,0.25)] backdrop-blur-[17.5px] rounded-[70px] justify-between items-center px-2 py-4 flex max-lg:hidden z-50 ${scrolled ? 'bg-[rgba(0,0,0,0.5)]' : 'bg-[rgba(252,252,252,0.25)]'}`}
            >
                <Image src="/logo-2.webp" width={120} height={30} alt="Site logo" />
                <ul className="flex gap-3 relative">
                    {navItems.map((item, i) => {
                        const isActive = item.href === pathName;
                        return (
                            <li key={i} className="relative">
                                <Link
                                    href={item.href}
                                    className={`px-3 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out ${isActive ? "bg-[var(--main)]/50 text-white shadow-md" : "text-white/70 hover:text-white"}
                                    `}
                                >
                                    {t(item.label)}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex items-center gap-4">
                    <MdGTranslate className="text-white w-8 h-8 cursor-pointer" onClick={() => setLanguageAction(locale === 'en' ? 'ar' : 'en')} />
                    <Button variant="link" href="/git-in-touch">
                        {t('git_in_touch')}
                    </Button>
                </div>
            </nav>
            <nav className="hidden max-lg:block z-50">
                <Sheet>
                    <SheetTrigger>
                        <FaBars className="w-8 h-8 text-white" />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Sparks studios</SheetTitle>
                            <SheetDescription className="pt-12">
                                <span className="flex justify-center">
                                    <Image src="/logo-2.webp" width={120} height={30} alt="Site logo" />
                                </span>
                                <ul className="flex flex-col items-center gap-5 my-8 relative">
                                    {navItems.map((item, i) => {
                                        const isActive = item.href === pathName;
                                        return (
                                            <li key={i} className="relative">
                                                <Link
                                                    href={item.href}
                                                    className={`px-3 py-2 rounded-full font-semibold transition-all duration-700 ease-in-out ${isActive ? "text-[var(--main)]" : ""}
                                    `}
                                                >
                                                    {t(item.label)}
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="flex justify-center gap-4">
                                    <MdGTranslate className="text-white w-8 h-8 cursor-pointer" onClick={() => setLanguageAction(locale === 'en' ? 'ar' : 'en')} />
                                    <Button variant="link" href="/git-in-touch">
                                        {t('git_in_touch')}
                                    </Button>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    );
}
