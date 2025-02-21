import { SearchFormProvidedProps } from './search-form-interfaces';
import { useFindPictures } from './search-form-actions';

export const useSearchFormController = (): SearchFormProvidedProps => {
  const { findPictures } = useFindPictures();

  return {
    onFormSubmit: findPictures,
  };
};
