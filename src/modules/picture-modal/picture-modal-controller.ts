import { getPicturesModalData } from '@/shared/selectors';
import { useSelector } from '@/shared/store';
import { useClosePictureModal } from './picture-modal-actions';
import { PictureModalProvidedProps } from './picture-modal-interfaces';

export const usePictureModalController = (): PictureModalProvidedProps => {
  const { isOpen, picture } = useSelector(getPicturesModalData);
  const { closePictureModal } = useClosePictureModal();
  return {
    picture,
    visible: isOpen,
    closePictureModal,
  };
};
