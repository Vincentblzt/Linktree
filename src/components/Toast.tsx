import React from 'react';
import { ToastMessage } from '../types/smartbio';

interface ToastProps {
  toasts: ToastMessage[];
  onRemove: (id: string) => void;
}

export const Toast: React.FC<ToastProps> = ({ toasts, onRemove }) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 space-y-2">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className="bg-gray-900 text-white text-xs px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2 border border-gray-800 animate-in slide-in-from-bottom-4"
          onAnimationEnd={() => onRemove(toast.id)}
        >
          <i className="fa-solid fa-circle-check text-emerald-400"></i>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
};
