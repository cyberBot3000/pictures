import { useCallback, useRef } from 'react';

import {
  appendPictures,
  setIsAdditionalPicturesLoading,
  setPicturesPage,
  useDispatch,
  useSelector,
} from '@/shared/store';
import { getPicturesPagination, getPicturesQueryParams } from '@/shared/selectors';
import { pictureDTOToPicture } from '@/shared/mappers';
import { fetchPictures } from '@/shared/api/endpoints';

export const useUpdatePictures = () => {
  const dispatch = useDispatch();
  const isPending = useRef(false);
  const { currPage, totalPages } = useSelector(getPicturesPagination);
  const { query } = useSelector(getPicturesQueryParams);
  const updatePictures = useCallback(() => {
    if (currPage < totalPages && !isPending.current) {
      isPending.current = true;
      dispatch(setIsAdditionalPicturesLoading(true));
      fetchPictures({ page: currPage + 1, query })
        .then((resp) => {
          if (!resp) return;
          dispatch(appendPictures(resp.results.map(pictureDTOToPicture)));
          isPending.current = false;
          dispatch(setPicturesPage(currPage + 1));
        })
        .finally(() => {
          dispatch(setIsAdditionalPicturesLoading(false));
        });
    }
  }, [currPage, dispatch, query, totalPages]);
  return { updatePictures };
};
