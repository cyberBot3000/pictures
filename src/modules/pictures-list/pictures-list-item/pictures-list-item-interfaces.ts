import { Ref } from 'react';
import { Picture } from '@/shared/domain';

export interface PicturesListItemProps {
  picture: Picture;
  ref?: Ref<HTMLDivElement | null>;
}

export interface PicturesListItemProvidedProps {
  openPictureModal: (picture: Picture) => void;
}
