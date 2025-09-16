/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { antonClass, soraClass, spaceClass } from "@/lib/fonts";
import { kebabToSnake } from "@/lib/kebebToSnake";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const items = [
    { id: 1, src: "/images/testProject.png", category: "creative-solutions" },
    { id: 2, src: "/images/testProject.png", category: "creative-solutions" },
    { id: 3, src: "/images/testProject.png", category: "two-d-animation" },
    { id: 4, src: "/images/testProject.png", category: "two-d-animation" },
    { id: 5, src: "/images/testProject.png", category: "three-d-animation" },
    { id: 6, src: "/images/testProject.png", category: "three-d-animation" },
    { id: 7, src: "/images/testProject.png", category: "creative-solutions" },
    { id: 8, src: "/images/testProject.png", category: "creative-solutions" },
    { id: 9, src: "/images/testProject.png", category: "film-making-production" },
];
const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati aspernatur explicabo pariatur veritatis officiis id quibusdam vel.",
        personName: "Mohamed",
        country: "Egypt",
    },
    {
        text: "Great experience working with the team. They delivered on time and exceeded expectations with their creativity and professionalism.",
        personName: "Sarah",
        country: "United Arab Emirates",
    },
    {
        text: "The communication was smooth and the results were outstanding. I would definitely recommend them for future projects.",
        personName: "John",
        country: "USA",
    },
    {
        text: "Professional, creative, and reliable. They understood our needs perfectly and provided tailored solutions.",
        personName: "Amina",
        country: "Morocco",
    },
    {
        text: "Their work brought our ideas to life in the best way possible. The whole process was seamless and enjoyable.",
        personName: "David",
        country: "UK",
    },
    {
        text: "Excellent service and attention to detail. They turned complex requirements into a simple, effective outcome.",
        personName: "Layla",
        country: "Saudi Arabia",
    },
];

function Counter({ from = 0, to }: { from?: number; to: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(from);
    const rounded = useTransform(count, (latest) => Math.floor(latest));

    useEffect(() => {
        if (inView) {
            animate(count, to, { duration: 2 });
        }
    }, [inView, count, to]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}
export default function Page() {
    const gridRef = useRef<HTMLDivElement>(null);
    const iso = useRef<any>(null);
    const [filterKey, setFilterKey] = useState("*");
    const t = useTranslations('portfolio')
    const projectTranslation = useTranslations('project_types')
    const stats = [
        { value: 12, suffix: "+", label: t("projects") },
        { value: 10, suffix: "+", label: t("industries") },
        { value: 20, suffix: "K+", label: t("hours") },
        { value: 80, suffix: "%", label: t("satisfaction") },
    ];
    // Initialize Isotope
    useEffect(() => {
        let Isotope: any;

        (async () => {
            const IsotopeModule = (await import("isotope-layout")).default;
            Isotope = IsotopeModule;

            if (gridRef.current) {
                iso.current = new Isotope(gridRef.current, {
                    itemSelector: ".gallery-item",

                });
            }
        })();

        return () => {
            iso.current?.destroy();
        };
    }, []);

    useEffect(() => {
        if (iso.current) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            filterKey === "*"
                ? iso.current.arrange({ filter: "*" })
                : iso.current.arrange({ filter: `.${filterKey}` });
        }
    }, [filterKey]);

    return (
        <>
            <div className="container mx-auto lg:p-6">
                <h1 className={`text-5xl font-black my-16 capitalize mx-auto lg:w-3/4 ${antonClass}`}>
                    <span className="mx-2">{t('title')}</span>
                    <span className="text-[var(--main)]">{t('visuals')} </span>
                </h1>
                {/* Filter Buttons */}
                <div className="flex gap-4 mb-6 justify-center flex-wrap">
                    {["show-all", "two-d-animation", "three-d-animation", "creative-solutions", "film-making-production"].map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setFilterKey(cat === "show-all" ? "*" : cat)}
                            className={`font-semibold cursor-pointer ${filterKey === (cat === "show-all" ? "*" : cat)
                                ? "text-[var(--main)]/50"
                                : "bg-[var(--black-color)]]"
                                }`}
                        >
                            {projectTranslation(kebabToSnake(cat))}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div
                    ref={gridRef}
                >
                    {items.map((item) => (
                        <Link
                            href={`/portfolio/${item.id}`}
                            key={item.id}
                        >
                            <div
                                className={`gallery-item ${item.category} lg:w-1/3 w-full h-72"`}
                            >
                                <div style={{ backgroundImage: `linear-gradient(var(--gradient-layer), var(--gradient-layer)), url('${item.src}')` }} className="w-[11/12] h-60 bg-no-repeat bg-cover bg-center flex justify-end flex-col p-4 text-white rounded-xl m-1">
                                    <h5 className={`text-2xl font-bold ${soraClass}`}>Project title</h5>
                                    <h6 className={`text-xl font-semibold ${soraClass}`}>{item.category}</h6>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                <h2 className={`text-center mx-auto w-11/12 lg:w-3/4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-10 ${antonClass}`}>
                    <span className="text-[var(--main)] leading-20">{t('voices')} </span>
                    <span className="mx-2">{t('that_matter')}</span> <br />
                    <span className="mx-2">{t('real')}</span>
                    <span className="text-[var(--main)]">{t('words')} </span>
                    <span className="mx-2">{t('real')}</span>
                    <span className="text-[var(--main)]">{t('impact')} </span>
                </h2>

                <Carousel className="my-28">
                    <CarouselContent>
                        {testimonials.map((opinion, index) =>
                            <CarouselItem key={index} className="lg:basis-1/3">
                                <div className="border-2 border-black rounded-lg p-6 h-full">
                                    <p className="font-medium">{opinion.text}</p>
                                    <div className="text-center font-bold mt-6">{opinion.personName}, {opinion.country}</div>
                                </div>
                            </CarouselItem>
                        )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <h2 className={`text-center mx-auto w-11/12 lg:w-3/4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-10 ${antonClass}`}>
                    <span className="mx-2">{t('let_the')}</span>
                    <span className="text-[var(--main)]">{t('numbers')} </span>
                    <span className="mx-2">{t('speak')}</span>
                </h2>
                <p className={`my-10 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-center ${spaceClass}`}>{t('desc')}</p>
            </div>
            <div className={`bg-[#f3f1f1] py-10 ${soraClass}`}>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    {stats.map((item, i) => (
                        <div key={i}>
                            <span className="block text-5xl font-extrabold text-[var(--main)]">
                                <Counter to={item.value} />
                                {item.suffix === "K+" ? "K" : item.suffix}
                            </span>
                            <p className="font-bold">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p className={`font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-center my-20 ${spaceClass}`}>{t('desc2')}</p>
        </>
    );
}
