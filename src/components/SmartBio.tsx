import React, { useState } from 'react';
import { SmartBioConfig, ToastMessage } from '../types/smartbio';
import { EditorPanel } from './EditorPanel';
import { DeviceFrame } from './DeviceFrame';
import { Toast } from './Toast';

interface SmartBioProps {
  initialConfig: SmartBioConfig;
  shareUrl?: string;
}

export const SmartBio: React.FC<SmartBioProps> = ({ initialConfig }) => {
  const config = initialConfig;
  const [title, setTitle] = useState(initialConfig.title);
  const [bio, setBio] = useState(initialConfig.bio);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const handleRemoveToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-center p-2 sm:p-6 overflow-x-hidden bg-gray-950">
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
      <DeviceFrame isMockupView={true} config={config} title={title} bio={bio} />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onRemove={handleRemoveToast} />
    </div>
  );
};
