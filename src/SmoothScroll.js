import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      });
    });
  }, []);

  return null; // Nothing to render
};

export default SmoothScroll;
