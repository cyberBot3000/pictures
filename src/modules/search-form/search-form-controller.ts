import { SearchFormProvidedProps } from './search-form-interfaces';
import { useFindPictures, useInputChange } from './search-form-actions';
import { useSelector } from '@/shared/store';
import { getPicturesSearchQuery } from '@/shared/selectors';

export const useSearchFormController = (): SearchFormProvidedProps => {
  const searchQuery = useSelector(getPicturesSearchQuery);
  const { findPictures } = useFindPictures();
  const { onInputChange } = useInputChange();

  return {
    onFormSubmit: findPictures,
    onInputChange,
    searchQuery,
  };
};
