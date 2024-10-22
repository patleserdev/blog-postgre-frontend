import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Head from "next/head.js";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
    <Head>
    <title>Blogger - Accueil</title>

    </Head>
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start border-2">
       <div>
        <h2>TEST</h2>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       <p>Test PostgreSQL</p>
      </footer>
    </div>
    </>
  );
}
