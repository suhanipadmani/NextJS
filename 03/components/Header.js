"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation"; 
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const pathname = usePathname();
  const {isDark, toggleTheme } = useTheme();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname === "/about" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={
              pathname === "/services" ? "nav-link active" : "nav-link"
            }
          >
            Services
          </Link>
        </li>
      </ul>

      <button onClick={toggleTheme}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
}