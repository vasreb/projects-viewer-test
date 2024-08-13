import { useEffect, useRef } from "react";

const usePageBottom = (onBottom: () => void, delay = 1000) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastExecutionTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const currentTime = Date.now();

      if (scrollTop + clientHeight >= scrollHeight) {
        if (
          lastExecutionTimeRef.current === null ||
          currentTime - lastExecutionTimeRef.current > delay
        ) {
          onBottom();
          lastExecutionTimeRef.current = currentTime;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onBottom, delay]);

  return timeoutRef;
};

export default usePageBottom;
