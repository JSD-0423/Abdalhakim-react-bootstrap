import { useEffect, useState } from 'react';

export const useDebounce = (value, time) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, time);

    return () => {
      clearTimeout(handler);
    };
  }, [value, time]);

  return debounce;
};
