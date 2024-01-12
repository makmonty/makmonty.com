/// <reference types="astro/client" />
// declare const netlifyIdentity: any;
interface Window {
  netlifyIdentity: {
    on: (event: string, callback: (...args: any) => void) => void
  };
}
