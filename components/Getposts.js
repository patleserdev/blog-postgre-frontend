import { useEffect, useState } from "react";

export default function Getposts({ categorie }) {
  const [posts, setPosts] = useState([]);
  const getposts = async () => {
    const response = await fetch(
      `http://localhost:3000/posts/bycategory/${categorie}`
    );

    const result = await response.json();
    console.log(result)
    if (result) {
        
      setPosts(result.data);
    }
  };

  useEffect(()=>{
        getposts()
  },[])

  return (
    <div className="px-3">
      {posts && posts.map((post) => (
        <div>{post.title}</div>
      ))}

      {!posts && <div>Pas d'articles</div>}
    </div>
  );
}
