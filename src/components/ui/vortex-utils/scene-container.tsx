"use client";

import * as React from "react";
import { Canvas, type CanvasProps } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import type { ThemeMode } from "./use-shadcn-theme";

export type SceneContainerProps = CanvasProps & {
  className?: string;
  theme?: ThemeMode;
  environment?: "night" | "city" | "park" | "dawn" | "sunset";
};

export function SceneContainer({
  className,
  theme = "auto",
  environment = "night",
  children,
  camera = [0, 0, 50],
  ...canvasProps
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

  return (
    <Canvas
      {...canvasProps}
      camera={{ position: Array.isArray(camera) ? camera : [0, 0, 50], fov: 75 }}
      className={className}
      style={{
        background: "transparent",
        ...canvasProps.style,
      }}
    >
      {children}
    </Canvas>
  );
}
