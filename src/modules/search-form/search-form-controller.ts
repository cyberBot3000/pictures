import { SearchFormProvidedProps } from './search-form-interfaces';
import { useFindPictures } from './search-form-actions';
import { useSelector } from '@/shared/store';
import { getPicturesSearchQuery } from '@/shared/selectors';

export const useSearchFormController = (): SearchFormProvidedProps => {
  const searchQuery = useSelector(getPicturesSearchQuery);
  const { findPictures } = useFindPictures();

  return {
    onFormSubmit: findPictures,
    searchQuery,
  };
};
