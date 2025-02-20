import { AppProviders } from './providers';
import { SearchForm } from './modules/search-form';
import { PicturesList } from './modules/pictures-list';
import { PictureModal } from './modules/picture-modal';

import './app.css';

export const App = () => {
  return (
    <AppProviders>
      <SearchForm />
      <PicturesList />
      <PictureModal />
    </AppProviders>
  );
};
