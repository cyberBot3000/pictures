import { setPicturesModalData, useDispatch } from '@/shared/store';
import { useCallback } from 'react';

export const useClosePictureModal = () => {
  const dispatch = useDispatch();
  const closePictureModal = useCallback(() => {
    dispatch(setPicturesModalData({ isOpen: false, picture: undefined }));
  }, [dispatch]);
  return { closePictureModal };
};
