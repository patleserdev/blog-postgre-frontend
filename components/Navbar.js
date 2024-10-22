"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation'
import Image from "next/image.js";
import { Container } from "postcss";
export default function Navbar() {

    const pathname = usePathname()
    const active="bg-slate-500 text-white px-6 p-4" 
    const inactive= "text-slate-500 px-6 p-4"

  return (

          <header className=" p-2 relative w-full h-16">

          <div className="absolute top-0">
            <Image alt="header" src={'/assets/header_bg.jpg'} height={400} width={2000} style={{objectFit: "cover"}} priority className="h-16"/>
          </div>

          <div>
          <ul className="relative flex flex-row w-full items-center justify-around  p-2">
          <li><Link href="/" passHref legacyBehavior><a className={ pathname === "/" ? active: inactive}>Home</a></Link></li>
          <li><Link href="/postcategories" passHref legacyBehavior><a className={ pathname === "/postcategories" ? active: inactive}>Catégories de posts</a></Link></li>
          <li><Link href="/posts" passHref legacyBehavior><a className={ pathname === "/posts" ? active: inactive}>Posts</a></Link></li>
          <li><Link href="/comments" passHref legacyBehavior><a className={ pathname === "/comments" ? active: inactive}>Commentaires</a></Link></li>
          <li><Link href="/users" passHref legacyBehavior><a className={ pathname === "/users" ? active: inactive}>Utilisateurs</a></Link></li>

          </ul>
          </div>
        
         
          </header>

  );
}
