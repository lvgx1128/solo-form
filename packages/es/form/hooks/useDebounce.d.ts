import { DebounceSettingsLeading } from 'lodash';
export declare const useDebounce: (
  fn: any,
  wait?: number | undefined,
  options?: DebounceSettingsLeading,
) => import('lodash').DebouncedFunc<(...args: any) => any>;
