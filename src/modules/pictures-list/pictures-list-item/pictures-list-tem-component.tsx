import { memo, useCallback, useState } from 'react';
import { PicturesListItemProps } from './pictures-list-item-interfaces';
import { usePicturesListItemController } from './pictures-list-item-controller';
import { ImagePlaceholder } from '@/shared/ui/image-placeholder';

import styles from './pictures-list-tems.module.css';
import listStyles from '../pictures-list.module.css';

export const PicturesListItem = memo(({ picture, ref, placeholder = false }: PicturesListItemProps) => {
  const { openPictureModal } = usePicturesListItemController();
  const handleImageClick = useCallback(() => {
    openPictureModal(picture);
  }, [openPictureModal, picture]);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={listStyles.PictureContainer} ref={ref}>
      {(!isLoaded || placeholder) && <ImagePlaceholder alt={picture.alt} thumbUrl={picture.urlMap.thumb} />}
      {
        <button className={styles.Button} onClick={handleImageClick}>
          <img
            src={picture.urlMap.small}
            alt={picture.alt}
            onLoad={() => setIsLoaded(true)}
            className={isLoaded ? '' : styles.HideImage}
          />
        </button>
      }
    </div>
  );
});
