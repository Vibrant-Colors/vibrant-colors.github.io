import {useEffect, useState, useCallback} from 'react';
import styles from './VibrantColors.module.css';
import Vibrant from 'node-vibrant/browser';

function getLightOrDark(color: string) {
    if (!color) return 'black';
    const _color = color.substring(4, color.length - 1)
        .replace(/ /g, '')
        .split(',');
    const brightness = Math.round(
        (parseInt(_color[0]) * 299 +
        parseInt(_color[1]) * 587 +
        parseInt(_color[2]) * 114) / 1000
    );
    return brightness > 125 ? 'black' : 'white';
}

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
                <p className={styles.swatch} style={{"--bg-color": colors.Vibrant ?? "", "--color": getLightOrDark(colors.Vibrant)}}>Vibrant</p>
                <p className={styles.swatch} style={{"--bg-color": colors.DarkVibrant ?? "", "--color": getLightOrDark(colors.DarkVibrant)}}>Dark Vibrant</p>
                <p className={styles.swatch} style={{"--bg-color": colors.LightVibrant ?? "", "--color": getLightOrDark(colors.LightVibrant)}}>Light Vibrant</p>
                <p className={styles.swatch} style={{"--bg-color": colors.Muted ?? "", "--color": getLightOrDark(colors.Muted)}}>Muted</p>
                <p className={styles.swatch} style={{"--bg-color": colors.DarkMuted ?? "", "--color": getLightOrDark(colors.DarkMuted)}}>Dark Muted</p>
                <p className={styles.swatch} style={{"--bg-color": colors.LightMuted ?? "", "--color": getLightOrDark(colors.LightMuted)}}>Light Muted</p>
            </div>
    )
}

export default VibrantColors;
