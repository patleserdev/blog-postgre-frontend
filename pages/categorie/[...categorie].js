import { useRouter } from "next/router";
import Head from "next/head.js";
import Getposts from "@/components/Getposts";
import { useEffect, useState } from "react";

import Layout from "@/components/Layout.js";
import { PuffLoader } from "react-spinners";

export default function Home() {
  // const BACKEND_URL='http://localhost:3000'
  const router = useRouter();
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
      // console.log(response);

      const result = await response.json();

    

      if (result) {
        setCategories(result.data);
        setIsLoading(false);
      }
    } catch (error) {
      setErrors("Impossible de récupérer le contenu de la base de données.");
      // console.error(error);
      setIsLoading(false);
    }
  };
  // console.log(errors);
  useEffect(() => {
    getCategories();
  }, []);

  // console.log(categories)
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
              <h1 className="text-2xl md:px-5 md:mb-2 bg-slate-500 p-5">Bienvenue sur Blogin : Votre dose quotidienne de réflexion : Actu et Analyses</h1>

              <h2 className="text-lg md:px-10 p-5">Les articles dans <span className="capitalize">{router.query.categorie}</span> :</h2>
              {
              categories.map((e, i) => (
                router.query.categorie == decodeURI(e.title) ?
                <div className="" key={i}>
                  <Getposts
                    incrementer={e.categorie_id + i}
                    categorie={e.categorie_id}
                    title={e.title}
                    full
                  />
                </div> : null
              ))
              }

              

            </>
          )}

          {/* {categories == undefined && <div className="md:px-10 p-5"><p>Aucun article dans cette catégorie</p></div>} */}

        </div>
      </Layout>
    </>
  );
}
