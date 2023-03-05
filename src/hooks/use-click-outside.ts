import React, { RefObject, useEffect } from 'react';

const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  closeHandler: (payload: boolean) => void
) => {
  useEffect(() => {
    const handleclickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        closeHandler(false);
      }
    };
    document.addEventListener('mousedown', handleclickOutside);

    return () => {
      document.removeEventListener('mousedown', handleclickOutside);
    };
  }, [ref]);
};

export default useClickOutside;
