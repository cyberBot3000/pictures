import { RefObject, useCallback, useEffect, useRef } from 'react';

export const useIntersectionObserver = (intersectionCallback: () => void, elemToObserve: RefObject<Element | null>) => {
  const observerLoader = useRef<IntersectionObserver | null>(null);

  const observerCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        intersectionCallback();
      }
    },
    [intersectionCallback]
  );

  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(observerCallback);

    if (elemToObserve.current) {
      observerLoader.current.observe(elemToObserve.current);
    }
    return () => {
      observerLoader.current?.disconnect();
    };
  }, [elemToObserve, observerCallback]);
};
