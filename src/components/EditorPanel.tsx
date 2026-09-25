import React from 'react';

interface EditorPanelProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  bio: string;
  onTitleChange: (title: string) => void;
  onBioChange: (bio: string) => void;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({
  isOpen,
  onClose,
  title,
  bio,
  onTitleChange,
  onBioChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="mb-6 bg-gray-900 border border-gray-800 text-white p-4 rounded-2xl max-w-md w-full shadow-2xl transition-all">
      <div className="flex justify-between items-center mb-3 border-b border-gray-800 pb-2">
        <h3 className="text-sm font-bold text-indigo-400 flex items-center gap-2">
          <i className="fa-solid fa-sliders"></i> Personnalisation en direct
        </h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="space-y-3 text-xs">
        <div>
          <label className="block text-gray-400 mb-1">Nom / Titre</label>
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-1">Description Bio</label>
          <textarea
            rows={2}
            value={bio}
            onChange={(e) => onBioChange(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-white focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>
    </div>
  );
};
