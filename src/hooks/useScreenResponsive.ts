import { useEffect, useCallback, useRef } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { screenWidthActions } from '../store/slices/screenWidth-slice';
import { scrollYActions } from '../store/slices/scrollY-slice';

export const useScreenResponsive = (event: string) => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const appResponsiveHandler = useCallback(
    function (this: WindowProxy) {
      if (event === 'scroll') {
        dispatch(scrollYActions.setScrollY(this.scrollY));
        return;
      }

      dispatch(
        screenWidthActions.setScreenWidth(layoutRef.current?.offsetWidth)
      );
    },
    [dispatch, event]
  );

  useEffect(() => {
    window.addEventListener(event, appResponsiveHandler);

    return () => {
      window.removeEventListener(event, appResponsiveHandler, true);
    };
  }, [appResponsiveHandler, event]);

  useEffect(() => {
    if (event === 'scroll') {
      dispatch(scrollYActions.setScrollY(window.scrollY));
      return;
    }

    dispatch(screenWidthActions.setScreenWidth(layoutRef.current?.offsetWidth));
  }, [dispatch, event]);

  return {
    elementRef: event === 'resize' ? layoutRef : undefined,
  };
};
