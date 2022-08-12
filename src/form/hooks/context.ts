import { useContext, createContext } from 'react';
import type { StoreProps, ActionProps } from '@/@types/index';

export const ActionContext = createContext<ActionProps>({});
export const StoreContext = createContext({});

export const useAction = (): ActionProps => {
  return useContext(ActionContext);
};
export const useStore = (): StoreProps => {
  return useContext(StoreContext);
};
