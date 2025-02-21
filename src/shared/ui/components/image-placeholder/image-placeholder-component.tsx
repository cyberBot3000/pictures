import { ImagePlaceholderProps } from './image-placeholder-interfaces';
import styles from './image-placeholder.module.css';

export const ImagePlaceholder = ({ thumbUrl, alt }: ImagePlaceholderProps) => {
  return <div className={styles.ImagePlaceholder}>{thumbUrl && <img src={thumbUrl} alt={alt} />}</div>;
};
