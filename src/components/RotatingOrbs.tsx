import React from 'react';

export const RotatingOrbs: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Left Orb */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 animate-spin"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.8), transparent)',
          top: '-100px',
          left: '-100px',
          animationDuration: '20s',
        }}
      />

      {/* Top Right Orb */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 animate-spin"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent)',
          top: '-100px',
          right: '-100px',
          animationDuration: '25s',
          animationDirection: 'reverse',
        }}
      />

      {/* Bottom Left Orb */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 animate-spin"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)',
          bottom: '-100px',
          left: '-100px',
          animationDuration: '30s',
        }}
      />

      {/* Bottom Right Orb */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 animate-spin"
        style={{
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.8), transparent)',
          bottom: '-100px',
          right: '-100px',
          animationDuration: '28s',
          animationDirection: 'reverse',
        }}
      />
    </div>
  );
};
