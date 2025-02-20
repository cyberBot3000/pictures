import { PropsWithChildren } from 'react';
import { StoreProvider } from './shared/store/provider';
export const AppProviders = ({ children }: PropsWithChildren) => {
  return <StoreProvider>{children}</StoreProvider>;
};
