import { useCallback } from 'react';
import { setPictures, setPicturesPagination, setPicturesSearchQuery, useDispatch, useSelector } from '@/shared/store';
import { paginationDTOToPagination, pictureDTOToPicture } from '@/shared/mappers';
import { getPicturesQueryParams } from '@/shared/selectors';
import { fetchPictures } from '@/shared/api/endpoints';

export const useFindPictures = () => {
  const dispatch = useDispatch();
  const { query } = useSelector(getPicturesQueryParams);
  const findPictures = useCallback(() => {
    fetchPictures({ page: 1, query }).then((response) => {
      console.log(response);
      if (!response) {
        return;
      }
      dispatch(setPictures(response.results.map(pictureDTOToPicture)));
      dispatch(setPicturesPagination(paginationDTOToPagination(response)));
    });
  }, [dispatch, query]);
  return {
    findPictures,
  };
};

export const useInputChange = () => {
  const dispatch = useDispatch();
  const onInputChange = useCallback(
    (value: string) => {
      dispatch(setPicturesSearchQuery(value));
    },
    [dispatch]
  );
  return { onInputChange };
};
