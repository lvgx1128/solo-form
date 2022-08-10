import { useContext, createContext } from 'react';
import type { IStore, IAction } from '@/@types/index';

export const ActionContext = createContext<IAction>({});
export const StoreContext = createContext({});

export const useAction = (): IAction => {
  return useContext(ActionContext);
};
export const useStore = (): IStore => {
  return useContext(StoreContext);
};
