import {useEffect, useState, useCallback} from 'react';
import styles from './VibrantColors.module.css';
import Vibrant from 'node-vibrant/browser';

interface VibrantColorsProps {
    img: string;
}

const VibrantColors = ({img}: VibrantColorsProps) => {

    const [colors, setColors] = useState({
        DarkMuted: null as string | null,
        DarkVibrant: null as string | null,
        LightMuted: null as string | null,
        LightVibrant: null as string | null,
        Muted: null as string | null,
        Vibrant: null as string | null,
    })

    const runVibrant = useCallback(() => {
        const _rgbToString = (_rgb:[number, number, number]) => `rgb(${_rgb[0]}, ${_rgb[1]}, ${_rgb[2]})`;
        Vibrant.from(img).getPalette()
            .then(palette => setColors({
                DarkMuted: _rgbToString(palette!.DarkMuted!.rgb),
                DarkVibrant: _rgbToString(palette!.DarkVibrant!.rgb),
                LightMuted: _rgbToString(palette!.LightMuted!.rgb),
                LightVibrant: _rgbToString(palette!.LightVibrant!.rgb),
                Muted: _rgbToString(palette!.Muted!.rgb),
                Vibrant: _rgbToString(palette!.Vibrant!.rgb)
            }))
    }, [img])

    useEffect(() => runVibrant(), [runVibrant])

    return (
        <div className={styles.colors}>
            <div className={styles.swatchContainer}>
                <button className={styles.swatch} style={{backgroundColor: colors.DarkMuted ?? ""}}>Placeholder</button>
                <button className={styles.swatch} style={{backgroundColor: colors.DarkVibrant ?? ""}}>Placeholder</button>
                <button className={styles.swatch} style={{backgroundColor: colors.LightMuted ?? ""}}>Placeholder</button>
            </div>
            <div className={styles.swatchContainer}>
                <button className={styles.swatch} style={{backgroundColor: colors.LightVibrant ?? ""}}>Placeholder</button>
                <button className={styles.swatch} style={{backgroundColor: colors.Muted ?? ""}}>Placeholder</button>
                <button className={styles.swatch} style={{backgroundColor: colors.Vibrant ?? ""}}>Placeholder</button>
            </div>
        </div>
    )
}

export default VibrantColors;
