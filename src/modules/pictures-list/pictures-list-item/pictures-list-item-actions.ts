import { useCallback } from 'react';
import { setPicturesModalData, useDispatch } from '@/shared/store';
import { Picture } from '@/shared/domain';

export const useOpenPictureModal = () => {
  const dispatch = useDispatch();
  const openPictureModal = useCallback(
    (picture: Picture) => {
      dispatch(setPicturesModalData({ isOpen: true, picture }));
    },
    [dispatch]
  );
  return { openPictureModal };
};
