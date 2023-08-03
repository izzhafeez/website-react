import convertColor from "assets/colors/colors";
import Stroke from "ol/style/Stroke";
import Style from "ol/style/Style";

const routeStyle = color => isActive => [
  new Style({
    stroke: new Stroke({
      color: convertColor(color),
      width: isActive ? 4 : 3
    }),
    zIndex: isActive ? 5 : 1
  }),
  new Style({
    stroke: new Stroke({
      color: [0, 0, 0],
      width: isActive ? 8 : 5
    }),
    zindex: isActive ? 4 : 0
  })
];

export default routeStyle;