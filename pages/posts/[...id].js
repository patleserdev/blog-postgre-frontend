import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/legacy/image.js";
import Navbar from "@/components/Navbar.js";
export default function Post() {
  const router = useRouter();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (router.query.id != undefined && !isNaN(router.query.id)) {
      (async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${router.query.id}`
        );

        console.log(response);

        const result = await response.json();

        if (result.result) {
          console.log(result.result);
          setArticle(result.data[0]);
        }
      })();
    }
  }, [router]);


  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start justify-center relative">
        {article == null && <div className="h-[80vh] w-full flex items-center justify-center text-3xl">Aucun article</div>}
        {article && 
          <article className="w-full h-full p-4">
            <h1 className="text-3xl mb-2 px-4 text-wrap">
              {decodeURI(article.title)}
            </h1>
            <h2 className="text-xl mb-2 px-4 capitalize">
              Catégorie : {decodeURI(article.categorie)}
            </h2>
            <div className="flex">
              <div className="w-1/2 h-full px-2">
                
                <p className="text-justify p-2 pr-5"  dangerouslySetInnerHTML={{__html: decodeURI(article.content)}}></p>
                
              </div>
              <div className="w-1/2 h-full flex flex-row items-center justify-center my-2">
                <Image
                  src={article.picture_url}
                  height={500}
                  width={800}
                />
              </div>
            </div>
          </article>
        }
      </main>
    </div>
  );
}
