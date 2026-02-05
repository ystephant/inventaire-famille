import { useEffect } from 'react';

export default function RegisterSW() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('✅ SW enregistré'))
        .catch((error) => console.log('❌ Erreur SW:', error));
    }
  }, []);

  return null;
}
