import localFont from "next/font/local";
import Head from "next/head.js";
import Getposts from "@/components/Getposts";
import { useEffect, useState } from "react";

import Layout from "@/components/Layout.js";
import { PuffLoader } from "react-spinners";

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
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const getCategories = async () => {
    setIsLoading(true);

    try {
      setErrors([]);
      const response = await fetch(`${BACKEND_URL}/postcategories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      const result = await response.json();

      if (result) {
        setCategories(result.data);
        setIsLoading(false);
      }
    } catch (error) {
      setErrors("Impossible de récupérer le contenu de la base de données.");
      console.error(error);
      setIsLoading(false);
    }
  };
  console.log(errors);
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      <Head>
        <title>Blogger - Accueil</title>
      </Head>
      {/* <div className="grid grid-rows-[0px_1fr_0px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)]"> */}

      <Layout>
        <div className="w-full min-h-[70vh] my-5">
          {isLoading && (
            <div className="flex h-[65vh] items-center justify-center my-5">
              <PuffLoader
                color={"white"}
                cssOverride={{ textAlign: "center" }}
              />
            </div>
          )}

          {errors && !isLoading && !categories && (
            <div className="flex h-[65vh] items-center justify-center my-5 ">
              <p className="text-3xl">{errors}</p>
            </div>
          )}

          {categories != undefined && !isLoading && (
            <>
              <h1 className="text-2xl md:px-5 md:mb-2 bg-slate-500 p-5 mb-5">Bienvenue sur Blogin : Votre dose quotidienne de réflexion : Actu et Analyses</h1>

              <h2 className="text-lg px-5 md:px-10">Les dernières actus :</h2>
              <div className="">
                  <Getposts
                    incrementer={0}
                                      
                  />
              </div>
              <h2 className="text-lg px-5 md:px-10">Les actualités classées :</h2>
              {
              categories.map((e, i) => (
                <div className="" key={i}>
                  <Getposts
                    incrementer={e.categorie_id + i}
                    categorie={e.categorie_id}
                    title={e.title}
                  />
                </div>
              ))
              }

            </>
          )}
        </div>
      </Layout>
    </>
  );
}
