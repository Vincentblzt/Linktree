"use client";

import * as React from "react";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import type { ThemeMode } from "./use-shadcn-theme";

export type SceneContainerProps = {
  className?: string;
  theme?: ThemeMode;
  environment?: "night" | "city" | "park" | "dawn" | "sunset";
  camera?: [number, number, number] | { position?: [number, number, number]; fov?: number };
  children?: React.ReactNode;
};

export function SceneContainer({
  className,
  theme = "auto",
  environment = "night",
  children,
  camera = [0, 0, 50],
}: SceneContainerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={className} style={{ background: "#000" }}>
        {/* Placeholder during SSR */}
      </div>
    );
  }

  const cameraConfig = Array.isArray(camera)
    ? { position: camera as [number, number, number], fov: 75 }
    : { position: [0, 0, 50] as [number, number, number], fov: 75, ...camera };

  return (
    <Canvas
      camera={cameraConfig}
      className={className}
      style={{
        background: "transparent",
      }}
    >
      {children}
    </Canvas>
  );
}
