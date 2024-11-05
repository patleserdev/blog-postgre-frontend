import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Head from "next/head.js";
import Getposts from "@/components/Getposts";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer.js";

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
  // const BACKEND_URL='http://localhost:3000'
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetch(`${BACKEND_URL}/postcategories`,{
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (result) {
      setCategories(result.data);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Head>
        <title>Blogger - Accueil</title>
      </Head>
      {/* <div className="grid grid-rows-[0px_1fr_0px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]"> */}
      <div className="font-[family-name:var(--font-geist-sans)]">
        <Navbar />
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative bg-gradient-to-b from-slate-800 from-1% to-slate-500">
          {/* <div className="w-[99vw] min-h-[100vh] absolute top-0 left-0 z-1 opacity-25 bg-[url('/assets/header_bg.jpg')] bg-repeat-y bg-cover		">
            <Image
              alt="bg"
              src={"/assets/header_bg.jpg"}
              layout="fill"
            
              priority
            />
          </div> */}

          <div className="w-full min-h-[100vh] z-10 my-5">
            {categories != undefined &&
              categories.map((e, i) => (
                <div key={i}>
                  <Getposts
                    incrementer={e.categorie_id + i}
                    categorie={e.categorie_id}
                    title={e.title}
                  />
                </div>
              ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
