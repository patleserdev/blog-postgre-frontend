import Image from "next/legacy/image";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Head from "next/head.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight} from '@fortawesome/free-solid-svg-icons';

import Getposts from "@/components/Getposts";

import { useEffect, useState } from "react";
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
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await fetch("http://localhost:3000/postcategories");

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
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start relative">
          <div className="w-[99vw] min-h-[100vh] absolute top-0 left-0 z-1 opacity-25">
            <Image
              alt="bg"
              src={"/assets/header_bg.jpg"}
              layout="fill"
            
              priority
            />
          </div>

          <div className="w-full min-h-[100vh] z-10">
            {categories.map((e,i) => (
              <div key={i}>
              <div  className="shadow-sm shadow-slate-500 text-3xl bg-slate-800 p-2  w-1/4 m-2 flex flex-row items-center justify-start">
                 <FontAwesomeIcon className="w-8" icon={faSquareCaretRight} size='lg'/>
                <h3 className="capitalize w-1/4 mx-4">
                 {decodeURI(e.title)}
                 </h3>
              </div>
           
              <Getposts categorie={e.categorie_id}/>
    
              </div>
            ))}
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p>Test PostgreSQL</p>
        </footer>
      </div>
    </>
  );
}
