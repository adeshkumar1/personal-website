import { useEffect, useRef, useState, type RefObject } from "react";

type Options = {
  threshold?: number;
  rootMargin?: string;
  /**
   * Stop observing once the element has been seen. Without this the reveal
   * flips back to `animation: none` when you scroll away, which drops the
   * animation's `forwards` fill and snaps the element back to opacity 0.
   */
  once?: boolean;
};

/**
 * Reports whether the returned ref is on screen.
 *
 * Options are taken as primitives rather than an object so the effect isn't
 * torn down and rebuilt on every render — callers pass an inline literal, which
 * is a new reference each time and previously re-created the observer
 * continuously.
 */
const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
}: Options = {}): [boolean, RefObject<HTMLDivElement>] => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // No observer support: show the content instead of hiding it forever.
    if (typeof IntersectionObserver === "undefined") {
      setIsIntersecting(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [isIntersecting, elementRef];
};

export default useIntersectionObserver;
