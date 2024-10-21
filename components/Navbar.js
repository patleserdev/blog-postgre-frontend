"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar() {

    const pathname = usePathname()
    const active="bg-slate-500 text-white px-6 p-4" 
    const inactive= "text-slate-500 px-6 p-4"

  return (

          <header className="p-2">
          <ul className="flex flex-row w-full items-center justify-around border p-2">
          <li><Link href="/" passHref legacyBehavior><a className={ pathname === "/" ? active: inactive}>Home</a></Link></li>
          <li><Link href="/postcategories" passHref legacyBehavior><a className={ pathname === "/postcategories" ? active: inactive}>Catégories de posts</a></Link></li>
          <li><Link href="/posts" passHref legacyBehavior><a className={ pathname === "/posts" ? active: inactive}>Posts</a></Link></li>
          <li><Link href="/comments" passHref legacyBehavior><a className={ pathname === "/comments" ? active: inactive}>Commentaires</a></Link></li>
          <li><Link href="/users" passHref legacyBehavior><a className={ pathname === "/users" ? active: inactive}>Utilisateurs</a></Link></li>

          </ul>
          </header>

  );
}
