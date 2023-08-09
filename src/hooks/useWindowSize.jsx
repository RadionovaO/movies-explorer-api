import { useState, useEffect } from "react";

const isDesctopSize = () => window.innerWidth >= 1200;
const isPadSize = () => window.innerWidth > 768 && window.innerWidth < 1200;
const isMobileSize = () => window.innerWidth <= 768;

const useWindowSize = () => {
    const [desctopSize, setDesctopSize] = useState(isDesctopSize());
    const [padSize, setPadSize] = useState(isPadSize());
    const [mobileSize, setMobileSize] = useState(isMobileSize());


  useEffect(() => {
    const handleResize = () => {
        setDesctopSize(isDesctopSize())
        setPadSize(isPadSize())
        setMobileSize(isMobileSize())
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {desctop: desctopSize, pad: padSize, mobile: mobileSize};
};

export default useWindowSize;