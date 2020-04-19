import React, { useEffect, useState, useCallback } from 'react';
import './Colors.css';
import * as Vibrant from 'node-vibrant';

const Colors = ({ img }) => {

  const [colors, setColors] = useState({
    DarkMuted: [],
    DarkVibrant: [],
    LightMuted: [],
    LightVibrant: [],
    Muted: [],
    Vibrant: [],
  })
  
  const runVibrant = useCallback((arr) => {
    Vibrant.from(img).getPalette()
    .then(palette => setColors({
      ...colors,
      DarkMuted: palette.DarkMuted._rgb,
      DarkVibrant: palette.DarkVibrant._rgb,
      LightMuted: palette.LightMuted._rgb,
      LightVibrant: palette.LightVibrant._rgb,
      Muted: palette.Muted._rgb,
      Vibrant: palette.Vibrant._rgb
    }))
    return colors
  }, [img, colors])

  useEffect(() => runVibrant(), [])

  console.log(colors)
  return(
    <div className="colors">
      <span className="swatch" style={{backgroundColor:
       `rgb(${colors.DarkMuted[0]}, ${colors.DarkMuted[1]}, ${colors.DarkMuted[2]})`}}></span>
      <span className="swatch" style={{backgroundColor:
       `rgb(${colors.DarkVibrant[0]}, ${colors.DarkVibrant[1]}, ${colors.DarkVibrant[2]})`}}></span>
      <span className="swatch" style={{backgroundColor:
       `rgb(${colors.LightMuted[0]}, ${colors.LightMuted[1]}, ${colors.LightMuted[2]})`}}></span>
      <span className="swatch" style={{backgroundColor:
       `rgb(${colors.LightVibrant[0]}, ${colors.LightVibrant[1]}, ${colors.LightVibrant[2]})`}}></span>
      <span className="swatch" style={{backgroundColor:
       `rgb(${colors.Muted[0]}, ${colors.Muted[1]}, ${colors.Muted[2]})`}}></span>
      <span className="swatch" style={{backgroundColor:
       `rgb(${colors.Vibrant[0]}, ${colors.Vibrant[1]}, ${colors.Vibrant[2]})`}}></span>
    </div>
  )
}

export default Colors;