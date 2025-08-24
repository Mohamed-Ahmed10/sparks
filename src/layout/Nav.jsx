import Link from "next/link";

export default function Nav() {
    return (
        <div className="w-5/6 m-auto flex gap-4">
            <Link href='/'>Home</Link>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/our-services'>Our Services</Link>
            <Link href='/about-us'>About us</Link>
            <Link href='/contact-us'>Contact us</Link>
        </div>
    )
}
