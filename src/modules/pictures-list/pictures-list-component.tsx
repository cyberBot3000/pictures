import { useRef } from 'react';
import { useIntersectionObserver } from '@/shared/ui/hooks';
import { usePicturesListController } from './pictures-list-controller';
import { PicturesListItem } from './pictures-list-item';
import { PLACEHOLDERS_ARR } from './pictures-list-constants';

import styles from './pictures-list.module.css';
import { ImagePlaceholder } from '@/shared/ui/image-placeholder';

export const PicturesList = () => {
  const { isPicturesLoading, pictures, updatePictures, isAdditionalPicturesLoading } = usePicturesListController();
  const lastItem = useRef<HTMLDivElement | null>(null);
  useIntersectionObserver(updatePictures, lastItem);

  return (
    <div>
      {isPicturesLoading && <div>loading...</div>}
      {!isPicturesLoading && !pictures.length && <div>no pictures found</div>}
      {!isPicturesLoading && !!pictures.length && (
        <div className={styles.PicturesList}>
          {pictures.map((picture, i) => (
            <PicturesListItem picture={picture} key={picture.id} ref={i === pictures.length - 1 ? lastItem : null} />
          ))}
          {isAdditionalPicturesLoading &&
            PLACEHOLDERS_ARR.map((placeholder) => (
              <div className={styles.PictureContainer}>
                <ImagePlaceholder key={placeholder.id} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};
