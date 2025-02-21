import { FormEvent, useCallback, useRef } from 'react';
import { useSearchFormController } from './search-form-controller';
import { CrossIcon, SearchIcon } from '@/shared/ui/components/icons';

import styles from './search-form.module.css';

export const SearchForm = () => {
  const { onFormSubmit } = useSearchFormController();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleFormSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      if (inputRef.current) onFormSubmit(inputRef.current.value);
    },
    [onFormSubmit]
  );
  const handleCrossButtonClick = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, []);
  return (
    <form action="#" onSubmit={handleFormSubmit} className={styles.SearchForm}>
      <div className={styles.InputContainer}>
        <SearchIcon />
        <input type="text" className={styles.Input} placeholder="Телефоны, яблоки, груши..." ref={inputRef} />
        <button className={styles.Cross} onClick={handleCrossButtonClick} type="reset">
          <CrossIcon />
        </button>
      </div>
      <input type="submit" value="Найти" className={styles.Find} />
    </form>
  );
};
