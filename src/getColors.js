import * as Vibrant from 'node-vibrant';

const pics = [
  '/mountainlake.jpg',
  '/highway.jpg',
  '/treebridge.jpg',
  '/nightumbrella.jpg'
]

const getColors = () => {
  pics.map(pic => { Vibrant.from(pic).getPalette()
  .then(palette => setColors({
    ...colors,
    DarkMuted: palette.DarkMuted._rgb,
    DarkVibrant: palette.DarkVibrant._rgb,
    LigthtMuted: palette.LightMuted._rgb,
    LightVibrant: palette.LightVibrant._rgb,
    Muted: palette.Muted._rgb,
    Vibrant: palette.Vibrant._rgb
    }))
  return colors
  }


export default getColors