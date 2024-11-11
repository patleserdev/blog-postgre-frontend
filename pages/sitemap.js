import Layout from "@/components/Layout.js";
import Link from "next/link.js";
import getSitemap from "./api/getsitemap";
import { useEffect, useState } from "react";
export const metadata = {
  title: "Blog - Plan du site",
  description: "...",
};

export default function Sitemap() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    (async () => {
      let getdatas = await getSitemap();

      if (getdatas) {
        setDatas(getdatas);
      }
    })();
  }, []);

  console.log(datas);

  return (
    <Layout>
      <div className="min-h-[85vh] w-full flex flex-col items-start justify-start p-5 mb-5">
        <h1 className="text-2xl">Plan du site</h1>
        <div className="flex flex-col p-2">
          {datas.map((link) => {
            return (
                <div key={link.identifier}>{link.type == 'posts' ? 'Article' : 'Catégorie'} : 
               <Link
               className="mx-2 normal-case"
                href={`/${link.entity}/${link.identifier}`}
              >
                {link.title}
              </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
