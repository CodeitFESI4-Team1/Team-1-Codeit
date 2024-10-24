import { useEffect, useState } from 'react';

export function useDebounce(value: string, callback: () => Promise<void>, timeout = 1000) {
  const [isDebouncing, setIsDebouncing] = useState(false);
  useEffect(() => {
    let tid: number | null = null;
    setIsDebouncing(true);

    tid = window.setTimeout(async () => {
      try {
        await callback();
      } finally {
        setIsDebouncing(false);
      }
    }, timeout);

    return () => {
      if (tid) {
        window.clearTimeout(tid);
      }
    };
  }, [value]);
  return { isDebouncing };
}
