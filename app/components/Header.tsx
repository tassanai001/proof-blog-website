"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="flex justify-between items-center p-4 border-b">
            <nav>
                <ul className="flex space-x-4">
                    <li><Link className={pathname === "/" ? "text-green-600" : ""} href="/">ARTICLES</Link></li>
                    <li><Link className={pathname === "/suggest" ? "text-green-600" : ""} href="/suggest">SUGGEST</Link></li>
                    <li><Link className={pathname === "/subscribe" ? "text-green-600" : ""} href="/subscribe">SUBSCRIBE</Link></li>
                    <li><Link className={pathname === "/about" ? "text-green-600" : ""} href="/about">ABOUT</Link></li>
                </ul>
            </nav>
        </header>
    );
}