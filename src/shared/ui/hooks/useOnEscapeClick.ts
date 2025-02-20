import { useEffect } from 'react';

export const useOnEscapeClick = (onEscapeClick: () => void) => {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscapeClick();
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, [onEscapeClick]);
};
