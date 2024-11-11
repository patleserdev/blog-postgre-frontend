import Link from "next/link.js"
export default function Footer(){


    return (

        <footer className="row-start-3 flex gap-6 p-5 flex-wrap items-center justify-center">
          <p>Copyright 2024 - P.Leservoisier</p> - 
          <Link href="/legal" passhref legacyBehavior><a>Mentions légales</a></Link> -
          <Link href="/sitemap" passhref legacyBehavior><a>Plan du site</a></Link> - 
          <Link href="/contact" passhref legacyBehavior><a>Contact</a></Link>
        </footer>
    )
}