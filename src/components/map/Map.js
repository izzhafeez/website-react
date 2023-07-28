import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import {FullScreen, defaults as defaultControls} from 'ol/control.js';

const getMap = (mapElement) => {
  const initialFeaturesLayer = new VectorLayer({
    source: new VectorSource()
  });

  // create map
  const osmLayer = new TileLayer({
    source: new OSM(),
  });

  const map = new Map({
    target: mapElement.current,
    layers: [osmLayer, initialFeaturesLayer],
    view: new View({
      projection: 'EPSG:4326',
      center: [103.85, 1.35],
      zoom: 11,
      minZoom: 10,
      maxZoom: 19
    }),
    controls: defaultControls().extend([new FullScreen()])
  })

  return {
    initialMap: map,
    initialFeaturesLayer: initialFeaturesLayer
  };
};

export default getMap;