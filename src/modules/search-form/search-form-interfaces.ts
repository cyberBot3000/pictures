export interface SearchFormProvidedProps {
  onFormSubmit: () => void;
  onInputChange: (value: string) => void;
  searchQuery: string;
}
