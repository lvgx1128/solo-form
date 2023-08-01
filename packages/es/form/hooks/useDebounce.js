import { debounce } from 'lodash-es';
import { useMemo, useRef } from 'react';
export var useDebounce = function useDebounce(fn, wait, options) {
  var fnRef = useRef(fn);
  fnRef.current = fn;
  var debounced = useMemo(function () {
    return debounce(
      function () {
        return fnRef.current.apply(fnRef, arguments);
      },
      wait || 1000,
      options,
    );
  }, []);
  return debounced;
};
