import Icon from "ol/style/Icon"
import Style from "ol/style/Style"

export const style = () => new Style({
  image: new Icon({
    src: `/img/map/location.svg`,
    size: [30, 30],
    displacement: [0, 15]
  })
});