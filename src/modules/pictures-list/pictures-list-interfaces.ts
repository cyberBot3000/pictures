import { Picture } from '@/shared/domain';

export interface PicturesListProvidedProps {
  pictures: Picture[];
  isPicturesLoading: boolean;
  updatePictures: () => void;
  isAdditionalPicturesLoading: boolean;
}
