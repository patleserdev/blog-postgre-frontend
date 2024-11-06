import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/legacy/image.js";
import { useSelector, useDispatch } from "react-redux";
import Form from "@/components/Form.js";
import { addEntity } from "@/reducers/entity";
import CommentsListByPost from "@/components/CommentsListByPost.js";

import { PuffLoader } from "react-spinners";
import Layout from "@/components/Layout.js";

export default function Post() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const schema = "comments";
  const except = ["isarchived", "isdestroyed"];
  const hidden = ["user_id", "post_id"];
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (router.query.id != undefined && !isNaN(router.query.id)) {
      (async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/posts/${router.query.id}`
        );

        // console.log(response);

        const result = await response.json();

        if (result.result) {
          // console.log(result.result);
          setArticle(result.data[0]);
          const entity = { user_id: 2, post_id: Number(router.query.id[0]) };
          dispatch(addEntity(entity));
          setIsLoading(false);
        } else {
          router.push("/");
        }
      })();
    }
    return () => {
      dispatch(addEntity(null));
    };
  }, [router]);

  return (
    <Layout>
      <div className="flex flex-col w-full items-center justify-center mb-5">
        {isLoading && (
          <div className="flex h-[80vh] items-center justify-center my-5">
            <PuffLoader color={"white"} cssOverride={{ textAlign: "center" }} />
          </div>
        )}

        {!isLoading && article == null && (
          <div className="h-[80vh] w-full flex items-center justify-center text-3xl">
            Aucun article
          </div>
        )}
        {!isLoading && article && (
          <article className="w-full h-full p-4">
            <h1 className="text-3xl mb-2 px-4 text-wrap">
              {decodeURI(article.title)}
            </h1>
            <h2 className="text-xl mb-2 px-4 capitalize">
              Catégorie : {decodeURI(article.categorie)}
            </h2>
            <div className="flex">
              <div className="w-1/2 h-full px-2">
                <p
                  className="text-justify p-2 pr-5"
                  dangerouslySetInnerHTML={{
                    __html: decodeURI(article.content),
                  }}
                ></p>
              </div>
              <div className="w-1/2 h-full flex flex-row items-center justify-center my-2">
                <Image
                  src={article.picture_url}
                  height={500}
                  width={800}
                  priority
                  alt={article.title}
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-start">
              {/* <button className="border p-2 text-xl hover:bg-white hover:text-slate-500 transition-all">Commenter</button> */}
              <div className="w-1/2">
                <Form schema={schema} except={except} hidden={hidden} />
              </div>
            </div>
            <div className="w-full">
              <CommentsListByPost post={Number(router.query.id[0])} />
            </div>
          </article>
        )}
      </div>
    </Layout>
  );
}
