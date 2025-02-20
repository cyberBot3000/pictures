import { ActionCreator, Actions, ActionTypes, AppState } from './interfaces';

export const mainReducer = (state: AppState, action: Actions[ActionTypes]): AppState => {
  console.log(`action: ${action.type}`, action);
  console.log('prevState: ', state);
  let nextState = state;
  switch (action.type) {
    case ActionTypes.appendPictures:
      nextState = {
        ...state,
        pictures: [...state.pictures, ...action.payload],
      };
      break;
    case ActionTypes.setPictures:
      nextState = {
        ...state,
        pictures: action.payload,
      };
      break;
    case ActionTypes.setIsPicturesLoading:
      nextState = {
        ...state,
        isPicturesLoading: action.payload,
      };
      break;
    case ActionTypes.setPicturesSearchQuery:
      nextState = {
        ...state,
        picturesSearchQuery: action.payload,
      };
      break;
    case ActionTypes.setPicturesPage:
      nextState = {
        ...state,
        picturesPagination: {
          ...state.picturesPagination,
          currPage: action.payload,
        },
      };
      break;
    case ActionTypes.setPicturesPagination:
      nextState = {
        ...state,
        picturesPagination: action.payload,
      };
      break;
    case ActionTypes.setPictureModalData:
      nextState = {
        ...state,
        pictureModal: {
          ...state.pictureModal,
          ...action.payload,
        },
      };
      break;
    case ActionTypes.setIsAdditionalPicturesLoading:
      nextState = {
        ...state,
        isAdditionalPicturesLoading: action.payload,
      };
      break;
    default:
      nextState = state;
      break;
  }
  console.log('nextState: ', nextState);
  console.log('---------------------------------------------------------------');
  return nextState;
};

export const appendPictures: ActionCreator<ActionTypes.appendPictures> = (pictures) => ({
  payload: pictures,
  type: ActionTypes.appendPictures,
});

export const setIsPicturesLoading: ActionCreator<ActionTypes.setIsPicturesLoading> = (isLoading) => ({
  payload: isLoading,
  type: ActionTypes.setIsPicturesLoading,
});

export const setPictures: ActionCreator<ActionTypes.setPictures> = (pictures) => ({
  payload: pictures,
  type: ActionTypes.setPictures,
});

export const setPicturesSearchQuery: ActionCreator<ActionTypes.setPicturesSearchQuery> = (query) => ({
  payload: query,
  type: ActionTypes.setPicturesSearchQuery,
});

export const setPicturesPage: ActionCreator<ActionTypes.setPicturesPage> = (page) => ({
  payload: page,
  type: ActionTypes.setPicturesPage,
});

export const setPicturesPagination: ActionCreator<ActionTypes.setPicturesPagination> = (pagination) => ({
  payload: pagination,
  type: ActionTypes.setPicturesPagination,
});

export const setPicturesModalData: ActionCreator<ActionTypes.setPictureModalData> = (modalData) => ({
  payload: modalData,
  type: ActionTypes.setPictureModalData,
});

export const setIsAdditionalPicturesLoading: ActionCreator<ActionTypes.setIsAdditionalPicturesLoading> = (
  isLoading
) => ({
  payload: isLoading,
  type: ActionTypes.setIsAdditionalPicturesLoading,
});
