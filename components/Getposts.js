import { useEffect, useState } from "react";
import Image from "next/legacy/image.js";
export default function Getposts({ categorie }) {
  const [posts, setPosts] = useState([]);
  const getposts = async () => {
    const response = await fetch(
      `http://localhost:3000/posts/bycategory/${categorie}`
    );

    const result = await response.json();
    // console.log(result)
    if (result) {
        
      setPosts(result.data);
    }
  };

  useEffect(()=>{
        getposts()
  },[])

  return (
    <div className="px-5 my-5 flex flex-row flex-wrap">
      {posts && posts.map((post,i) => (
        <article key={i} className="w-[20rem] min-h-[55vh] shadow-sm shadow-white p-3 bg-slate-700 m-2 pb-5">
       
          <Image src={post.picture_url} width={400} height={250} style={{objectFit:'contain'}}/>
          <h3 className="text-lg mb-2 min-h-[20%]">{decodeURI(post.title)}</h3>
          <p className="text-md mb-2 min-h-[20%] " dangerouslySetInnerHTML={{__html: decodeURI(post.content).slice(0,100)+'...'}}></p>
          <div className="w-full flex items-center justify-center h-[10%] ">
          <a className="text-lg mb-2 border p-2 justify-center items-center bg-white hover:bg-slate-500 hover:text-white text-slate-500 cursor-pointer transition-all" href={`/posts/${post.post_id}`}>Voir plus</a>
          </div>
       
        </article>
      ))}

      {!posts && <div>Pas d'articles</div>}

    
    </div>
  );
}
