export {};

declare global {
  interface Window {
    somePropertyHere: any;
    speechRecognition:any;
    gtag: (...args: any[]) => void;
  }
}