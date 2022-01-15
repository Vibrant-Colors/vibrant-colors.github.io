import React, { useEffect, useState, useCallback } from 'react';
// @ts-ignore
import styles from './VibrantColors.module.css';
import Vibrant from 'node-vibrant';

export const VibrantColors = ({ img }: { img: string }) => {

    const [colors, setColors] = useState({
        DarkMuted: [],
        DarkVibrant: [],
        LightMuted: [],
        LightVibrant: [],
        Muted: [],
        Vibrant: [],
    } as any)

    const runVibrant = useCallback((arr) => {
        const _rgbToString = (_rgb: Array<any>) => `rgb(${_rgb[0]}, ${_rgb[1]}, ${_rgb[2]})`;
        Vibrant.from(img).getPalette()
            .then(palette => setColors({
                // @ts-ignore
                DarkMuted: _rgbToString(palette.DarkMuted._rgb),
                // @ts-ignore
                DarkVibrant: _rgbToString(palette.DarkVibrant._rgb),
                // @ts-ignore
                LightMuted: _rgbToString(palette.LightMuted._rgb),
                // @ts-ignore
                LightVibrant: _rgbToString(palette.LightVibrant._rgb),
                // @ts-ignore
                Muted: _rgbToString(palette.Muted._rgb),
                // @ts-ignore
                Vibrant: _rgbToString(palette.Vibrant._rgb)
            }))
    }, [img])

    // @ts-ignore
    useEffect(() => runVibrant(), [runVibrant])

    return (
        <div className={styles.colors}>
            <div className={styles.swatchContainer}>
                <button className={styles.swatch} style={{ backgroundColor: colors.DarkMuted }}>Placeholder</button>
                <button className={styles.swatch} style={{ backgroundColor: colors.DarkVibrant }}>Placeholder</button>
                <button className={styles.swatch} style={{ backgroundColor: colors.LightMuted }}>Placeholder</button>
            </div>
            <div className={styles.swatchContainer}>
                <button className={styles.swatch} style={{ backgroundColor: colors.LightVibrant }}>Placeholder</button>
                <button className={styles.swatch} style={{ backgroundColor: colors.Muted }}>Placeholder</button>
                <button className={styles.swatch} style={{ backgroundColor: colors.Vibrant }}>Placeholder</button>
            </div>
        </div>
    )
}
