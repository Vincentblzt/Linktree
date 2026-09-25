import { ToastMessage } from '../types/smartbio';

let toastListeners: Array<(toast: ToastMessage) => void> = [];
let toastId = 0;

export const createToastManager = () => {
  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success', duration = 2600) => {
    const id = String(toastId++);
    const toast: ToastMessage = { id, message, type };

    toastListeners.forEach(listener => listener(toast));

    setTimeout(() => {
      toastListeners.forEach(listener => listener({ ...toast, id: `${id}-remove` }));
    }, duration);
  };

  const subscribe = (listener: (toast: ToastMessage) => void) => {
    toastListeners.push(listener);
    return () => {
      toastListeners = toastListeners.filter(l => l !== listener);
    };
  };

  return { showToast, subscribe };
};

export const toast = createToastManager();
