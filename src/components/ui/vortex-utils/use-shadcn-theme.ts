import * as THREE from "three";

export type ThemeMode = "auto" | "light" | "dark";

export function useShadcnTheme(theme: ThemeMode) {
  const isDark =
    theme === "dark" ||
    (theme === "auto" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (isDark) {
    return {
      primaryColor: new THREE.Color(0x09090b),
      mutedColor: new THREE.Color(0xa1a1aa),
    };
  }

  return {
    primaryColor: new THREE.Color(0xfafafa),
    mutedColor: new THREE.Color(0x71717a),
  };
}
