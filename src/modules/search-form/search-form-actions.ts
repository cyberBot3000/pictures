import { useCallback } from 'react';
import {
  setIsPicturesLoading,
  setPictures,
  setPicturesPagination,
  setPicturesSearchQuery,
  useDispatch,
} from '@/shared/store';
import { paginationDTOToPagination, pictureDTOToPicture } from '@/shared/mappers';
import { fetchPictures } from '@/shared/api/endpoints';

export const useFindPictures = () => {
  const dispatch = useDispatch();
  const findPictures = useCallback(
    (searchQuery: string) => {
      if (!searchQuery) {
        return;
      }
      dispatch(setPicturesSearchQuery(searchQuery));
      dispatch(setIsPicturesLoading(true));
      fetchPictures({ page: 1, query: searchQuery })
        .then((response) => {
          if (!response) {
            return;
          }
          dispatch(setPictures(response.results.map(pictureDTOToPicture)));
          dispatch(setPicturesPagination(paginationDTOToPagination(response)));
        })
        .finally(() => {
          dispatch(setIsPicturesLoading(false));
        });
    },
    [dispatch]
  );
  return {
    findPictures,
  };
};
