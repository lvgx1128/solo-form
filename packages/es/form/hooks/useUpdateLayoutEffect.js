import { useRef, useLayoutEffect } from 'react';
export var useUpdateLayoutEffect = function useUpdateLayoutEffect(
  effect,
  deps,
) {
  var isMounted = useRef(false);

  // for react-refresh
  useLayoutEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  useLayoutEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      return effect();
    }
  }, deps);
};
