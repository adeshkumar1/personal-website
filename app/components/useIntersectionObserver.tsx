import { useEffect, useState, useRef, RefObject } from "react";

const useIntersectionObserver = (
  options: IntersectionObserverInit,
): [boolean, RefObject<HTMLDivElement>] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [isIntersecting, elementRef];
};

export default useIntersectionObserver;
