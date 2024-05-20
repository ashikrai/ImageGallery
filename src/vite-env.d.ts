/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REACT_APP_PEXELS_API_KEY: string;
    // Add other environment variables here
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }