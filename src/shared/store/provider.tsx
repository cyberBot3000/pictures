import { PropsWithChildren, useReducer } from 'react';
import { DispatchContext, StoreContext } from './context';
import { mainReducer } from './reducer';

export const StoreProvider = ({ children }: PropsWithChildren) => {
  const [store, dispatch] = useReducer(mainReducer, {
    isPicturesLoading: false,
    pictures: [],
    picturesSearchQuery: '',
    picturesPagination: {
      currPage: 1,
      total: 0,
      totalPages: 0,
    },
    pictureModal: {
      isOpen: false,
    },
    isAdditionalPicturesLoading: false,
  });
  return (
    <StoreContext.Provider value={store}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </StoreContext.Provider>
  );
};
