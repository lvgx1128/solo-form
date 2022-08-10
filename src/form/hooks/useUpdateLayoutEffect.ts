import { useRef, useLayoutEffect, DependencyList } from "react";

export const useUpdateLayoutEffect = (effect: any, deps: DependencyList | undefined) => {
  const isMounted = useRef(false);

  // for react-refresh
  useLayoutEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useLayoutEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};