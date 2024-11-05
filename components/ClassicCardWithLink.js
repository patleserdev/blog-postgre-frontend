import Image from "next/legacy/image.js"

export default function ClassicCardWithLink ({post,key})
{

    return (
<article
              key={key}
              className="w-[20rem] min-h-[55vh] shadow-sm shadow-white p-3 bg-slate-700 m-2 pb-5"
            >
              <Image
                src={post.picture_url}
                width={400}
                height={250}
                style={{ objectFit: "contain" }}
              />
              <h3 className="text-lg mb-2 min-h-[20%]">
                {decodeURI(post.title)}
              </h3>
              <p
                className="text-md mb-2 min-h-[20%] "
                dangerouslySetInnerHTML={{
                  __html: decodeURI(post.content).slice(0, 100) + "...",
                }}
              ></p>
              <div className="w-full flex items-center justify-center h-[10%] ">
                <a
                  className="text-lg mb-2 border p-2 justify-center items-center bg-white hover:bg-slate-500 hover:text-white text-slate-500 cursor-pointer transition-all"
                  href={`/posts/${post.post_id}`}
                >
                  Voir plus
                </a>
              </div>
            </article>
    )
}