import React, { useEffect, useState, useCallback } from 'react';
import styles from './VibrantColors.module.css';
import * as Vibrant from 'node-vibrant';

const VibrantColors = ({ img }) => {

  const [colors, setColors] = useState({
    DarkMuted: [],
    DarkVibrant: [],
    LightMuted: [],
    LightVibrant: [],
    Muted: [],
    Vibrant: [],
  })

  const runVibrant = useCallback((arr) => {
    const _rgbToString = (_rgb) => `rgb(${_rgb[0]}, ${_rgb[1]}, ${_rgb[2]})`;
    Vibrant.from(img).getPalette()
    .then(palette => setColors({
      DarkMuted: _rgbToString(palette.DarkMuted._rgb),
      DarkVibrant: _rgbToString(palette.DarkVibrant._rgb),
      LightMuted: _rgbToString(palette.LightMuted._rgb),
      LightVibrant: _rgbToString(palette.LightVibrant._rgb),
      Muted: _rgbToString(palette.Muted._rgb),
      Vibrant: _rgbToString(palette.Vibrant._rgb)
    }))
  }, [img])

  useEffect(() => runVibrant(), [runVibrant])

  return(
    <div className={styles.colors}>
      <button className={styles.swatch} style={{backgroundColor: colors.DarkMuted}}>Placeholder</button>
      <button className={styles.swatch} style={{backgroundColor: colors.DarkVibrant}}>Placeholder</button>
      <button className={styles.swatch} style={{backgroundColor: colors.LightMuted}}>Placeholder</button>
      <button className={styles.swatch} style={{backgroundColor: colors.LightVibrant}}>Placeholder</button>
      <button className={styles.swatch} style={{backgroundColor: colors.Muted}}>Placeholder</button>
      <button className={styles.swatch} style={{backgroundColor: colors.Vibrant}}>Placeholder</button>
    </div>
  )
}

export default VibrantColors;
