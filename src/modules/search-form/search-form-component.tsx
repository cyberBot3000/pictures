import { ChangeEvent, FormEvent, useCallback } from 'react';
import { useSearchFormController } from './search-form-controller';

export const SearchForm = () => {
  const { onFormSubmit, onInputChange, searchQuery } = useSearchFormController();
  const handleFormSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      onFormSubmit();
    },
    [onFormSubmit]
  );
  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onInputChange(e.target.value);
    },
    [onInputChange]
  );
  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <input type="text" value={searchQuery} onChange={handleInputChange} />
      <input type="submit" value="Найти" />
    </form>
  );
};
