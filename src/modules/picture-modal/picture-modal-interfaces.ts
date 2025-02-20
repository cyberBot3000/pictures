import { Picture } from '@/shared/domain';

export interface PictureModalProvidedProps {
  visible: boolean;
  picture?: Picture;
  closePictureModal: () => void;
}
