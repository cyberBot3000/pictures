import { useRef } from 'react';
import { useIntersectionObserver } from '@/shared/ui/hooks';
import { usePicturesListController } from './pictures-list-controller';
import { PicturesListItem } from './pictures-list-item';
import { PLACEHOLDERS_ARR } from './pictures-list-constants';
import { ImagePlaceholder } from '@/shared/ui/components/image-placeholder';
import { OBSERVER_OPTIONS } from './pictures-list-component-constants';

import styles from './pictures-list.module.css';

export const PicturesList = () => {
  const { isPicturesLoading, pictures, updatePictures, isAdditionalPicturesLoading } = usePicturesListController();
  const lastItem = useRef<HTMLDivElement | null>(null);
  useIntersectionObserver(updatePictures, lastItem, OBSERVER_OPTIONS);

  return (
    <div className={styles.PicturesListContainer}>
      {isPicturesLoading && <div>Загрузка...</div>}
      {!isPicturesLoading && !pictures.length && <div>К сожалению, поиск не дал результатов</div>}
      <div className={styles.PicturesList}>
        {!isPicturesLoading && !!pictures.length && (
          <>
            {pictures.map((picture) => (
              <PicturesListItem picture={picture} key={picture.id} />
            ))}
            {isAdditionalPicturesLoading &&
              PLACEHOLDERS_ARR.map((placeholder) => (
                <div className={styles.PictureContainer} key={placeholder.id}>
                  <ImagePlaceholder />
                </div>
              ))}
          </>
        )}
      </div>
      <div ref={lastItem}></div>
    </div>
  );
};
