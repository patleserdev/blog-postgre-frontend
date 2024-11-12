"use client"
import { useEffect, useState } from "react";
import HoveredCardWithLink from "./HoveredCardWithLink";
import ClassicCardWithLink from "./ClassicCardWithLink.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import useScreenSize from '@/hooks/useScreenSize'
import BaseCardComponent from "./BaseCardComponent.js";
import Link from "next/link.js";

export default function Getposts({ categorie=null, incrementer,title=null,little=null,article = null,full=null }) {

 
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
      const query=categorie ? `bycategory/${categorie}` : `last`
      const response = await fetch(
        `${BACKEND_URL}/posts/${query}`
      );
      //  console.log(response)

      const result = await response.json();
     
        // console.log(result)
      
       
      if (result) 
      {
        if(result.data && result.data.length > 0)
        {
          setPosts(result.data.filter((post)=> post.post_id != article));

        }
  
      }
    }
    catch(e){
      console.error(e)

    }

  };

  useEffect(() => {
    getposts();
        
  }, []);

// console.log('post in getposts',posts)
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
      className={little ? "w-full flex flex-col md:flex-row items-center justify-center lg:flex-wrap md:mb-10" : "my-5 mx-3 flex flex-col sm:flex-row items-center justify-center lg:flex-wrap"}
    >
      <div className={little ? "sm:w-[5%] md:w-[15%] lg:w-[10%] cursor-pointer flex flex-row items-center justify-center text-center" :"mx-2 sm:w-5 cursor-pointer flex flex-row items-center justify-center text-center"}>
        {posts != undefined && !full &&  prev != 0 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => handlePrev()}
            className="rotate-90 md:rotate-0 cursor-pointer hover:text-black active:text-black transition-all md:w-4 text-center"
          />
        )}
      </div>

      <div className={
        little ? 
        "h-full w-full  sm:w-[90%] md:w-[70%] lg:w-[80%]  flex flex-col sm:flex-row md:flex-col justify-center xl:flex-row items-center xl:justify-around"
        : 
        full ?
        "w-[90%] flex flex-col sm:flex-row sm:flex-wrap items-start justify-start" 
        :
        "w-[90%] flex flex-col sm:flex-row sm:flex-wrap items-center justify-around"}>
        {posts != undefined &&
          posts.map((post, i) =>
            full == null ? 
           i >= prev && i <= next ? 
           (
            <BaseCardComponent post={post} key={i} little={little} title={title} incrementer={incrementer} categorie={categorie}/>
            ) 
            : null
            :
            (
              <BaseCardComponent post={post} key={i} full title={title} incrementer={incrementer}/>
            ) 

          )}
      </div>

      <div className={little ? "sm:w-[5%] md:w-[15%] lg:w-[10%] flex items-center justify-center text-center" :"mx-2 sm:w-5 flex items-center justify-center text-center"}>
        {posts != undefined && !full && next < posts.length-1 && posts.length >= max && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="rotate-90 md:rotate-0 cursor-pointer hover:text-black active:text-black transition-all md:w-4"
            onClick={() => handleNext()}
          />
        )}
      </div>

      {!posts && <div className="w-1/2 p-2">Pas d'articles dans <span className="capitalize">{decodeURI(title)}</span></div>}

      {!full && categorie && posts.length > 0 && 
      <div className={little ? 
      "flex items-center justify-center w-[90%] sm:w-[30%] md:[w-90%] px-4 mt-2 mb-2" : 
      "flex items-center justify-center md:items-start md:justify-start w-[90%] sm:w-[40%] md:w-[15%] lg:w-[90%] h-full  px-4 mt-2 mb-2"}>
            <Link href={`/categorie/${decodeURI(title)}`} passHref legacyBehavior>
            <a className="hover:bg-slate-800 transition-all">
            <h3 className="border p-3 h-12 sm:h-full">Voir tous les articles <span className="capitalize">{decodeURI(title)}</span></h3>
            </a>
            </Link>
      </div>
      }
    </div>
  );
}
