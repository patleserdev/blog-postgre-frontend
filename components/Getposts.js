import { useEffect, useState } from "react";
import HoveredCardWithLink from "./HoveredCardWithLink";
import ClassicCardWithLink from "./ClassicCardWithLink.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Getposts({ categorie, incrementer, title }) {

  // const BACKEND_URL = 'http://localhost:3000';
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(0);
  const [posts, setPosts] = useState([]);

  const getposts = async () => {
    const response = await fetch(
      `${BACKEND_URL}/posts/bycategory/${categorie}`
    );

    const result = await response.json();
    // console.log(result)
    if (result) {
      setPosts(result.data);
    }
  };

  useEffect(() => {
    getposts();
    setPrev(0);
    setNext(3);
  }, []);

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
      className="my-5 mx-3 flex flex-row items-center justify-center flex-wrap"
    >
      <div className="w-5 m-2 cursor-pointer">
        {posts != undefined && prev != 0 && (
          <FontAwesomeIcon
            icon={faChevronLeft}
            onClick={() => handlePrev()}
            className="cursor-pointer hover:text-black active:text-black transition-all"
          />
        )}
      </div>

      <div className="flex w-90">
        {posts != undefined &&
          posts.map((post, i) =>
            i >= prev && i <= next ? (
              <div key={i}>
                {/* <ClassicCardWithLink post={post} key={i}/> */}
                <HoveredCardWithLink
                  key={i}
                  post={post}
                  list={incrementer + i}
                  title={title}
                />
              </div>
            ) : null
          )}
      </div>

      <div className="w-5 m-2 ">
        {posts != undefined && next != posts.length - 1 && posts.length > 3 && (
          <FontAwesomeIcon
            icon={faChevronRight}
            className="cursor-pointer hover:text-black active:text-black transition-all"
            onClick={() => handleNext()}
          />
        )}
      </div>

      {!posts && <div className="w-1/2 p-2">Pas d'articles dans <span className="capitalize">{decodeURI(title)}</span></div>}
    </div>
  );
}
