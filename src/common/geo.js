import { LineString, Point } from "ol/geom";
import { fromLonLat } from "ol/proj";

export const toPoint = location => {
  return new Point(fromLonLat(location));
};

export const toLine = line => (
  new LineString(line.map(point => fromLonLat(point)))
);