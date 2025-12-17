import { useEffect, useState } from 'react';

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop || 0;
      const docHeight =
        (document.documentElement.scrollHeight || 0) - (window.innerHeight || 0);

      if (docHeight <= 0) {
        setProgress(0);
        return;
      }

      const value = (scrollTop / docHeight) * 100;
      setProgress(value);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return progress;
};

export default useScrollProgress;



