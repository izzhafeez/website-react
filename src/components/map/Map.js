import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import {FullScreen, defaults as defaultControls} from 'ol/control.js';
import { useGeographic } from "ol/proj";
import XYZ from "ol/source/XYZ";

useGeographic();

const getMap = mapElement => {
  const initialFeaturesLayer = new VectorLayer({
    source: new VectorSource()
  });

  const source = new XYZ({
    // url: 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.{ext}'
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
    // url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
    // url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
  });

  // create map
  // const osmLayer = new TileLayer({
  //   source: new OSM(),
  // });

  const map = new Map({
    target: mapElement.current,
    layers: [new TileLayer({ source }), initialFeaturesLayer],
    view: new View({
      // projection: 'EPSG:4326',
      projection: 'EPSG:3857',
      center: [103.85, 1.35],
      zoom: 11,
      // minZoom: 10,
      maxZoom: 19
    }),
    // renderer: 'canvas',
    controls: defaultControls().extend([new FullScreen()])
  })

  return {
    initialMap: map,
    initialFeaturesLayer: initialFeaturesLayer
  };
};

export default getMap;