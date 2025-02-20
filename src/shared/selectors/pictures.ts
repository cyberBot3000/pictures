import { FetchPictureArgs } from '../api/endpoints/fetch-picture';
import { createSelector } from '../store';

export const getPicturesSearchQuery = createSelector((s) => s.picturesSearchQuery);

export const getPicturesList = createSelector((s) => s.pictures);

export const getPicturesPage = createSelector((s) => s.picturesPagination.currPage);

export const getIsPicturesLoading = createSelector((s) => s.isPicturesLoading);

export const getPicturesPagination = createSelector((s) => s.picturesPagination);

export const getPicturesQueryParams = createSelector<FetchPictureArgs>((s) => ({
  page: s.picturesPagination.currPage,
  query: s.picturesSearchQuery,
}));

export const getPicturesModalData = createSelector((s) => s.pictureModal);

export const getIsAdditionalPicturesLoading = createSelector((s) => s.isAdditionalPicturesLoading);
