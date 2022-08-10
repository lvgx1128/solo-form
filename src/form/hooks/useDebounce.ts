import { DebounceSettingsLeading } from 'lodash';
import { debounce } from 'lodash-es';
import { useMemo, useRef } from 'react';

export  const useDebounce = (fn: any, wait?: number | undefined, options?: DebounceSettingsLeading) => {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  const debounced = useMemo(
    () =>
      debounce(
        (...args) => {
          return fnRef.current(...args);
        },
        wait || 1000,
        options,
      ),
    [],
  );
  return debounced
}