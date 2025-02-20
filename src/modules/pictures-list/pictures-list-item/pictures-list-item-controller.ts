import { useOpenPictureModal } from './pictures-list-item-actions';
import { PicturesListItemProvidedProps } from './pictures-list-item-interfaces';

export const usePicturesListItemController = (): PicturesListItemProvidedProps => {
  const { openPictureModal } = useOpenPictureModal();
  return {
    openPictureModal,
  };
};
