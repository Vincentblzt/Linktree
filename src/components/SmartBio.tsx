import React, { useState, useEffect } from 'react';
import { SmartBioConfig, ToastMessage } from '../types/smartbio';
import { ControlBar } from './ControlBar';
import { EditorPanel } from './EditorPanel';
import { DeviceFrame } from './DeviceFrame';
import { Toast } from './Toast';

interface SmartBioProps {
  initialConfig: SmartBioConfig;
  shareUrl?: string;
}

export const SmartBio: React.FC<SmartBioProps> = ({ initialConfig, shareUrl = 'https://smarbio.ai/yourpage' }) => {
  const [config, setConfig] = useState<SmartBioConfig>(initialConfig);
  const [title, setTitle] = useState(initialConfig.title);
  const [bio, setBio] = useState(initialConfig.bio);
  const [isMockupView, setIsMockupView] = useState(true);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleCopyLink = () => {
    const el = document.createElement('textarea');
    el.value = shareUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    const id = Date.now().toString();
    setToasts([...toasts, { id, message: `Lien ${shareUrl} copié !`, type: 'success' }]);

    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2600);
  };

  const handleRemoveToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center p-2 sm:p-6 overflow-x-hidden bg-gray-950">
      {/* Control Bar */}
      <ControlBar
        isMockupView={isMockupView}
        onToggleViewMode={() => setIsMockupView(!isMockupView)}
        onToggleEditor={() => setIsEditorOpen(!isEditorOpen)}
        onCopyLink={handleCopyLink}
      />

      {/* Editor Panel */}
      <EditorPanel
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        title={title}
        bio={bio}
        onTitleChange={setTitle}
        onBioChange={setBio}
      />

      {/* Device Frame */}
      <DeviceFrame isMockupView={isMockupView} config={config} title={title} bio={bio} />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onRemove={handleRemoveToast} />
    </div>
  );
};
