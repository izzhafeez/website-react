import Icon from "ol/style/Icon"
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style"

export const mallStyle = () => new Style({
  image: new Icon({
    src: `/img/map/location.svg`,
    size: [30, 30],
    displacement: [0, 15]
  }),
  zIndex: 2
});

export const hikeStyle = isActive => [
  new Style({
    stroke: new Stroke({
      color: [255, 0, 0],
      width: isActive ? 3 : 2
    }),
    zIndex: isActive ? 5 : 1
  }),
  new Style({
    stroke: new Stroke({
      color: [255, 255, 255],
      width: isActive ? 6 : 0
    }),
    zindex: isActive ? 4 : 0
  })
];