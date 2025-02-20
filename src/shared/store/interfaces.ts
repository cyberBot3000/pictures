import { Pagination, Picture } from '../domain';
import { PictureModal } from '../domain/picture';

export interface AppState {
  pictures: Picture[];
  isPicturesLoading: boolean;
  picturesSearchQuery: string;
  picturesPagination: Pagination;
  pictureModal: PictureModal;
  isAdditionalPicturesLoading: boolean;
}

export enum ActionTypes {
  appendPictures = 'appendPictures',
  setIsPicturesLoading = 'setIsPicturesLoading',
  setPicturesSearchQuery = 'setPicturesSearchQuery',
  setPictures = 'setPictures',
  setPicturesPage = 'setPicturesPage',
  setPicturesPagination = 'setPicturesPagination',
  setPictureModalData = 'setPictureModalData',
  setIsAdditionalPicturesLoading = 'setIsAdditionalPicturesLoading',
}

export interface Actions {
  [ActionTypes.appendPictures]: {
    type: ActionTypes.appendPictures;
    payload: Picture[];
  };
  [ActionTypes.setIsPicturesLoading]: {
    type: ActionTypes.setIsPicturesLoading;
    payload: boolean;
  };
  [ActionTypes.setPicturesSearchQuery]: {
    type: ActionTypes.setPicturesSearchQuery;
    payload: string;
  };
  [ActionTypes.setPictures]: {
    type: ActionTypes.setPictures;
    payload: Picture[];
  };
  [ActionTypes.setPicturesPage]: {
    type: ActionTypes.setPicturesPage;
    payload: number;
  };
  [ActionTypes.setPicturesPagination]: {
    type: ActionTypes.setPicturesPagination;
    payload: Pagination;
  };
  [ActionTypes.setPictureModalData]: {
    type: ActionTypes.setPictureModalData;
    payload: PictureModal;
  };
  [ActionTypes.setIsAdditionalPicturesLoading]: {
    type: ActionTypes.setIsAdditionalPicturesLoading;
    payload: boolean;
  };
}

export type ActionCreator<A extends ActionTypes> = (payload: Actions[A]['payload']) => Actions[A];
export type AppSelector<T = any> = (store: AppState) => T;
export type AppDispatch = (action: Actions[ActionTypes]) => void;
