import { useContext } from 'react';
import { DispatchContext, StoreContext } from './context';
import { AppSelector } from './interfaces';

export const useSelector = <T>(selector: AppSelector<T>): ReturnType<typeof selector> => {
  const store = useContext(StoreContext);
  if (!store) throw new Error('trying to use selector out of store provider');
  return selector(store);
};

export const useDispatch = () => {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) throw new Error('trying to use dispatch out of store provider');
  return dispatch;
};

export const createSelector = <T>(fn: AppSelector<T>) => {
  return fn;
};
