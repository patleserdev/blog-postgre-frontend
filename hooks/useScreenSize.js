import { useState, useEffect } from 'react';
export default function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    totop:window.scrollY
  });

  // const [heightToTop, setHeightToTop] = useState(window.scrollY);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        totop:window.scrollY
      });
    };

    // const handleHeightToTop = () => {
    //   setHeightToTop(window.scrollY);
    // };

    window.addEventListener('resize', handleResize);
    // window.addEventListener('heightotop', handleHeightToTop);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
      // window.removeEventListener('heightotop', handleHeightToTop);
    };
  }, []);

  return screenSize;
  // return heightToTop;

};

