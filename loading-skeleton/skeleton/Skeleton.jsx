import { useEffect, useRef, useState } from "react";
import styles from "./Skeleton.module.css";

function initializeArray(length) {
  return Array.from({ length }, (arr) => arr);
}

function Skeleton({ number }) {
  const skeleton = useRef(null);
  const skeletonNumber = initializeArray(number)

  const [skeletonDimensions, setSkeletonDimensions] = useState({
    height: "none",
    width: "none",
    borderRadius: "none",
  });

  useEffect(function () {
    const skeletonParentElement = skeleton.current.parentElement;
    const elementStyles = window.getComputedStyle(skeletonParentElement);
    setSkeletonDimensions((dimension) => ({
      ...dimension,
      height: elementStyles.height,
      width: elementStyles.width,
      borderRadius: elementStyles.borderRadius,
    }));
  }, []);

  return (
    
   
  );
}

export default Skeleton;
