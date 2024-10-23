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
    <div className="px-5 my-5">
      {posts && posts.map((post,i) => (
        <div key={i} className="w-1/5 border p-3 bg-slate-700">
          <Image src={post.picture_url} width={400} height={300} style={{objectFit:'contain'}}/>
          <h3 className="text-lg mb-2">{decodeURI(post.title)}</h3>
          <p className="text-md mb-2">{decodeURI(post.content).slice(0,100)}...</p>
          <div className="w-full flex items-center justify-center">
          <a className="text-lg mb-2 border p-2 justify-center items-center">Voir plus</a>
          </div>
          
        </div>
      ))}

      {!posts && <div>Pas d'articles</div>}
    </div>
  );
}
