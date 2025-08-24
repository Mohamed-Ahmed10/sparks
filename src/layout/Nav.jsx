"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {

    const navItems = [
        { href: '/', label: "Home" },
        { href: '/portfolio', label: "Portfolio" },
        { href: '/our-services', label: "Our services" },
        { href: '/about-us', label: "About us" },
        { href: '/contact-us', label: "Contact us" },
    ]

    const pathName = usePathname();
    return (
        <div className="w-5/6 m-auto flex gap-4 sticky top-[4.89%] bottom-[82.61%]
        bg-[rgba(252,252,252,0.25)] border border-[rgba(255,255,255,0.15)]
        shadow-[0px_10px_24px_rgba(255,255,255,0.25)]
        backdrop-blur-[17.5px] rounded-[70px] justify-between items-center px-2 py-4">
            <Image src='/logo-2.webp' width={120} height={30} alt="Site logo" />
            <ul className="flex gap-3">
                {
                    navItems.map((item, i) => {
                        const isActive = item.href === pathName
                        return (
                            <li key={i}>
                                <Link href={item.href} className={`px-3 py-2 rounded-full text-white font-semibold transition ${isActive
                                    && "bg-[var(--main)] text-white"
                                    }`}>{item.label}</Link>
                            </li>
                        )
                    }
                    )
                }
            </ul>
            <div className="flex items-center gap-4">
                <Image src='/icons/language.svg' className="cursor-pointer" width={30} height={30} alt="Language" />
                <Button variant='link' href="/df">Git in touch</Button>
            </div>
        </div>
    )
}
