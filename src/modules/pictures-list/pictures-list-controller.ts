import { useSelector } from '@/shared/store';
import { PicturesListProvidedProps } from './pictures-list-interfaces';
import { getIsAdditionalPicturesLoading, getIsPicturesLoading, getPicturesList } from '@/shared/selectors';
import { useUpdatePictures } from './pictures-list-actions';

export const usePicturesListController = (): PicturesListProvidedProps => {
  const isPicturesLoading = useSelector(getIsPicturesLoading);
  const isAdditionalPicturesLoading = useSelector(getIsAdditionalPicturesLoading);
  const pictures = useSelector(getPicturesList);
  const { updatePictures } = useUpdatePictures();
  return {
    isPicturesLoading,
    updatePictures,
    pictures,
    isAdditionalPicturesLoading,
  };
};
