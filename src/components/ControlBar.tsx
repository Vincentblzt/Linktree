import React from 'react';

interface ControlBarProps {
  isMockupView: boolean;
  onToggleViewMode: () => void;
  onToggleEditor: () => void;
  onCopyLink: () => void;
}

export const ControlBar: React.FC<ControlBarProps> = ({
  isMockupView,
  onToggleViewMode,
  onToggleEditor,
  onCopyLink,
}) => {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-center gap-3 z-50">
      <button
        onClick={onToggleViewMode}
        className="bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold px-3 py-2 rounded-xl border border-gray-700 flex items-center gap-2 transition-all shadow-md"
      >
        <i className="fa-solid fa-mobile-screen text-indigo-400"></i>
        {isMockupView ? 'Mode Mockup iPhone' : 'Cadre iPhone'}
      </button>
      <button
        onClick={onToggleEditor}
        className="bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold px-3 py-2 rounded-xl border border-gray-700 flex items-center gap-2 transition-all shadow-md"
      >
        <i className="fa-solid fa-pen-to-square text-emerald-400"></i> Personnaliser Textes
      </button>
      <button
        onClick={onCopyLink}
        className="bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-semibold px-3 py-2 rounded-xl border border-gray-700 flex items-center gap-2 transition-all shadow-md"
      >
        <i className="fa-solid fa-link text-sky-400"></i> Copier le lien
      </button>
    </div>
  );
};
