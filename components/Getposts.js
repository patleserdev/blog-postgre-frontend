import { useEffect, useState } from "react";
import HoveredCardWithLink from "./HoveredCardWithLink";
import ClassicCardWithLink from "./ClassicCardWithLink.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useScreenSize from '@/hooks/useScreenSize'

export default function Getposts({ categorie, incrementer, title,little,article = null }) {

  const screenSize = useScreenSize();

  // console.log(screenSize.width)

  // const BACKEND_URL = 'http://localhost:3000';
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [max,setMax]=useState(0)
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);
  const [posts, setPosts] = useState([]);


  const getposts = async () => {

   

    try
    {
      const response = await fetch(
        `${BACKEND_URL}/posts/bycategory/${categorie}`
      );
      console.log(response)

      const result = await response.json();
      console.log(result)
      if (result) 
      {
        setPosts(result.data.filter((post)=> post.post_id != article));
  
      }
    }
    catch(e){
      console.error(e)

    }

  };

  useEffect(() => {
    getposts();
        
  }, []);

console.log('post in getposts',posts)
  useEffect(() => {
    setPrev(0);
    if(little)
    {
      setNext(2);
      setMax(2)
    }
    else if(screenSize.width > 1200)
    {
      setNext(3);
      setMax(3)
    }
    else if (screenSize.width <= 1200 && screenSize.width >= 800)
    {
      setNext(2);
      setMax(2)
    }
    else
    {
      setNext(1);
      setMax(1)
    }
    
  }, [screenSize]);

  const handlePrev = () => {
    setPrev(prev - 1);
    setNext(next - 1);
  };

  const handleNext = () => {
    setPrev(prev + 1);
    setNext(next + 1);
  };

  return (
    
    <div
      key={incrementer}
      className={little ? "w-full flex flex-col md:flex-row items-center justify-center lg:flex-wrap" : "my-5 mx-3 flex flex-col sm:flex-row items-center justify-center lg:flex-wrap"}
    >
      <div className={little ? "sm:w-[5%] cursor-pointer flex flex-row items-center justify-center text-center" :"mx-2 sm:w-5 cursor-pointer flex flex-row items-center justify-center text-center"}>
        {posts != undefined && prev != 0 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => handlePrev()}
            className="cursor-pointer hover:text-black active:text-black transition-all text-lg text-center"
          />
        )}
      </div>

      <div className={little ? "h-full w-full flex flex-col sm:flex-row md:flex-col justify-center xl:flex-row items-center xl:justify-around": "w-[90%] flex flex-col sm:flex-row sm:flex-wrap  items-center justify-around"}>
        {posts != undefined &&
          posts.map((post, i) =>
            i >= prev && i <= next ? (
              <div key={i} className={little ? "w-full flex justify-center lg:w-full xl:w-[33%]  px-2" :"w-full sm:w-[45%]  md:w-[32%] lg:w-[25%] px-2"}>
                {/* <ClassicCardWithLink post={post} key={i}/> */}
                <HoveredCardWithLink
                  key={i}
                  post={post}
                  list={incrementer + i}
                  title={title}
                  little={little ? true : false}
                />
              </div>
            ) : null
          )}
      </div>

      <div className={little ? "sm:w-[5%] flex items-center justify-center text-center" :"mx-2 sm:w-5 flex items-center justify-center text-center"}>
        {posts != undefined && next-1 != max && posts.length > 3 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="cursor-pointer hover:text-black active:text-black transition-all text-lg"
            onClick={() => handleNext()}
          />
        )}
      </div>

      {!posts && <div className="w-1/2 p-2">Pas d'articles dans <span className="capitalize">{decodeURI(title)}</span></div>}
    </div>
  );
}
