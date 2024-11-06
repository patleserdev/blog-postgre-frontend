"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image.js";
import { Container } from "postcss";
export default function Navbar() {
  const pathname = usePathname();
  const active = "bg-slate-500 text-white px-10 p-4";
  const inactive = "text-slate-500 px-10 p-4";

  const adminLinks="flex items-center justify-center text-center h-full px-2"

  return (
    <header className="p-2 relative 
    w-full 
    h-24 sm:h-48 md:h-36 flex flex-row justify-between items-center border-b-2 border-slate-600 pb-2 mb-2">
      <div>
        <Image
          alt="logo"
          src="/assets/logo-light.png"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className="md:w-9/10 h-full">
        <ul className="relative flex flex-col lg:flex-row h-full items-center justify-around p-2">
          <li className="px-5">
            <Link href="/" passHref legacyBehavior>
              <a className={pathname === "/" ? active : inactive}>Home</a>
            </Link>
          </li>
          <ul className="md:flex border items-center justify-center hidden">
            <li className={adminLinks}>ADMIN</li>
            <li className={adminLinks}>
              <Link href="/postcategories" passHref legacyBehavior>
                <a
                  className={pathname === "/postcategories" ? active : inactive}
                >
                  Catégories de posts
                </a>
              </Link>
            </li>
            <li className={adminLinks}>
              <Link href="/posts" passHref legacyBehavior>
                <a className={pathname === "/posts" ? active : inactive}>
                  Posts
                </a>
              </Link>
            </li>
            <li className={adminLinks}>
              <Link href="/comments" passHref legacyBehavior>
                <a className={pathname === "/comments" ? active : inactive}>
                  Commentaires
                </a>
              </Link>
            </li>
            <li className={adminLinks}>
              <Link href="/users" passHref legacyBehavior>
                <a className={pathname === "/users" ? active : inactive}>
                  Utilisateurs
                </a>
              </Link>
            </li>
          </ul>
        </ul>
      </div>
    </header>
  );
}
