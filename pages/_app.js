import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  // Enregistrement du Service Worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => console.log('✅ Service Worker enregistré'))
        .catch((error) => console.log('❌ Erreur Service Worker:', error));
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#9333ea" />
        
        {/* iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Inventaire Jeux" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        
        {/* Général */}
        <meta name="description" content="Gérez votre collection de jeux de société" />
        <link rel="icon" href="/icon-192x192.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
