import React, { useCallback, useEffect, useState } from "react";
import styles from "./VibrantColors.module.css";
import Vibrant from "node-vibrant";
import { Palette } from "node-vibrant/lib/color";

export interface VibrantColorsProps {
  img: string;
}

interface VibrantColorsState {
  DarkMuted: string;
  DarkVibrant: string;
  LightMuted: string;
  LightVibrant: string;
  Muted: string;
  Vibrant: string;
}

const DEFAULT_COLOR = "#000000";

class VibrantColorsState implements VibrantColorsState {
  constructor(colors?: Palette) {
    this.DarkMuted = colors?.DarkMuted?.getHex() ?? DEFAULT_COLOR;
    this.DarkVibrant = colors?.DarkVibrant?.getHex() ?? DEFAULT_COLOR;
    this.LightMuted = colors?.LightMuted?.getHex() ?? DEFAULT_COLOR;
    this.LightVibrant = colors?.LightVibrant?.getHex() ?? DEFAULT_COLOR;
    this.Muted = colors?.Muted?.getHex() ?? DEFAULT_COLOR;
    this.Vibrant = colors?.Vibrant?.getHex() ?? DEFAULT_COLOR;
  }
}

export const VibrantColors = ({ img }: VibrantColorsProps) => {
  const [colors, setColors] = useState<VibrantColorsState>(
    new VibrantColorsState()
  );

  const runVibrant = useCallback(() => {
    Vibrant.from(img)
      .getPalette()
      .then((palette) => {
        setColors(new VibrantColorsState(palette));
      });
  }, [img]);

  useEffect(() => runVibrant(), [runVibrant]);

  return (
    <div className={styles.colors}>
      <div className={styles.swatchContainer}>
        <button
          className={styles.swatch}
          style={{ backgroundColor: colors.DarkMuted }}
        >
          Placeholder
        </button>
        <button
          className={styles.swatch}
          style={{ backgroundColor: colors.DarkVibrant }}
        >
          Placeholder
        </button>
        <button
          className={styles.swatch}
          style={{ backgroundColor: colors.LightMuted }}
        >
          Placeholder
        </button>
      </div>
      <div className={styles.swatchContainer}>
        <button
          className={styles.swatch}
          style={{ backgroundColor: colors.LightVibrant }}
        >
          Placeholder
        </button>
        <button
          className={styles.swatch}
          style={{ backgroundColor: colors.Muted }}
        >
          Placeholder
        </button>
        <button
          className={styles.swatch}
          style={{ backgroundColor: colors.Vibrant }}
        >
          Placeholder
        </button>
      </div>
    </div>
  );
};
