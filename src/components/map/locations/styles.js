import convertColor from "assets/colors/colors";
import Fill from "ol/style/Fill";
import Icon from "ol/style/Icon"
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style"
import Text from "ol/style/Text";

export const numberStyle = index => color => isActive => [
  new Style({
    text: new Text({
      text: `${index+1}`,
      offsetY: 0,
      scale: 1.5,
      fill: new Fill({
        color: convertColor(color).reduce((a, b) => a+b, 0) > 420 ? [0,0,0] : [255,255,255]
      }),
      stroke: new Stroke({
        color: convertColor(color),
        width: 2
      })
    }),
    zIndex: 10
  }),
]

export const pointStyle = color => isActive => {
  return [
    new Style({
      image: new Icon({
        src: `/img/map/location-fill.svg`,
        displacement: [0, 5],
        height: 10,
        color: convertColor(color)
      }),
      zIndex: 2
    }),
    new Style({
      image: new Icon({
        src: `/img/map/location-border.svg`,
        displacement: [0, 5],
        height: 10,
        color: convertColor('BLACK')
      }),
      zIndex: 3
    }),
  ]
};

export const mutedPointStyle = isActive => {
  return [
    new Style({
      image: new Icon({
        src: `/img/map/location-fill.svg`,
        displacement: [0, 5],
        height: 10,
        color: [100,100,100]
      }),
      zIndex: 2
    }),
    new Style({
      image: new Icon({
        src: `/img/map/location-border.svg`,
        displacement: [0, 5],
        height: 10,
        color: [0,0,0]
      }),
      zIndex: 3
    }),
  ]
}