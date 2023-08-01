import { useContext, createContext } from 'react';
export var ActionContext = /*#__PURE__*/ createContext({});
export var StoreContext = /*#__PURE__*/ createContext({});
export var useAction = function useAction() {
  return useContext(ActionContext);
};
export var useStore = function useStore() {
  return useContext(StoreContext);
};
