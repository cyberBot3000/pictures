import { ModalWindow } from '@/shared/ui/components/modal-window';
import { usePictureModalController } from './picture-modal-controller';
import { useOnEscapeClick } from '@/shared/ui/hooks';

import styles from './picture-modal.module.css';

export const PictureModal = () => {
  const { picture, visible, closePictureModal } = usePictureModalController();
  useOnEscapeClick(closePictureModal);
  return (
    <ModalWindow visible={visible}>
      {!picture && <div className={styles.ModalError}>Что-то пошло не так, попробуйте еще раз</div>}
      {!!picture && (
        <div className={styles.ModalContainer}>
          <img src={picture.urlMap.full} alt={picture.alt} className={styles.Image} />
          <div className={styles.Overlay} onClick={closePictureModal}></div>
        </div>
      )}
    </ModalWindow>
  );
};
