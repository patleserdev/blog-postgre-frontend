import Image from "next/legacy/image.js";

export default function HoveredCardWithLink({ post, list, title,little,full }) {
  return (
    <article
      key={list}
      className={little ? 
        "w-full h-[15rem] md:w-[12rem] lg:w-[12rem] 2xl:w-[15rem] h-[20rem] sm:h-[15rem] md:h-[10rem] lg:h-[10rem] 2xl:h-[12rem]  border relative m-2" : 
        "w-full h-[20rem] sm:h-[15rem] md:h-[18rem] lg:h-[13rem] xl:w-[20rem] xl:h-[15rem] border relative m-2"}
    >
      <div className="w-full h-full relative">
   
        <div className="h-full relative z-0">
          {post.picture_url && <Image src={post.picture_url} layout="fill" alt={decodeURI(title)}/>}
          {!full &&
          <h2 className={"h-[15%] bg-white text-slate-500 absolute top-0 left-0 z-5 px-2 uppercase flex items-center justify-center"}>
            {decodeURI(title)}
          </h2>
          }
        </div>
      </div>

      <div className="absolute top-0 left-0 hover:bg-black opacity-0 hover:opacity-80 h-full w-full flex flex-col items-center justify-around p-2 transition-all">
        <h3 className={little ? "text-md mx-3 mb-2 min-h-[20%]" : "text-lg mx-3 mb-2 min-h-[20%]"}>
          {little ? decodeURI(post.title).slice(0,40)+'...' : decodeURI(post.title)}
        </h3>
        {/* <p
                  className="text-md mx-3 mb-2 min-h-[20%] text-justify"
                  dangerouslySetInnerHTML={{
                    __html: decodeURI(post.content).slice(0, 100) + "...",
                  }}
                ></p> */}
        <div className="w-full flex items-center justify-center h-[10%] ">
          <a
            className="text-lg mb-2 border p-2 justify-center items-center bg-white hover:bg-slate-500 hover:text-white text-slate-500 cursor-pointer transition-all"
            href={`/posts/${post.post_id}`}
          >
            Voir plus
          </a>
        </div>
      </div>
    </article>
  );
}
