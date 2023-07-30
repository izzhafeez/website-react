import 'ol/ol.css';
import React, { useEffect, useRef, useState } from 'react';
import VectorSource from 'ol/source/Vector';
import './style.scss';
import getOverlay from './Overlay';
import getMap from './Map';
import handlePointerMove from './events';

// code from https://taylor.callsen.me/using-openlayers-with-react-functional-components/
const MapContainer = ({ category, features, willRecenter=true }) => {
  // set intial state - used to track references to OpenLayers 
  // objects for use in hooks, event handlers, etc.
  const [ map, setMap ] = useState();
  const [ featuresLayer, setFeaturesLayer ] = useState();

  // get ref to div element - OpenLayers will render into this div
  const mapElement = useRef();
  const selected = useRef();

  const mapRef = useRef();
  mapRef.current = map;

  const overlayRef = useRef();
  const overlay = getOverlay();
  overlayRef.current = overlay;

  useEffect(() => {
    // create and add vector source layer
    const { initialMap, initialFeaturesLayer } = getMap(mapElement);

    // set map pointermove handler
    initialMap.on('pointermove', handlePointerMove({
      mapElement: mapElement,
      mapRef: mapRef,
      overlayRef: overlayRef,
      selected: selected
    }));

    // save map and vector layer references to state
    setMap(initialMap);
    setFeaturesLayer(initialFeaturesLayer);

    return () => initialMap.setTarget(null);
  }, []);

  useEffect(() => {
    if (map) {
      mapRef.current.addOverlay(overlay);
    }

    if (features.length && featuresLayer) {
      // set features to map
      featuresLayer.setSource(
        new VectorSource({
          features: features // make sure features is an array
        })
      );

      // fit map to feature extent (with 100px of padding)
      const extent = featuresLayer.getSource().getExtent();
      const view = map.getView();

      // Set the view's extent and resolution
      if (willRecenter) {
        view.fit(extent, {
          padding: [100, 100, 100, 100],
        });
      }
    }
  }, [features, map, featuresLayer, overlay, willRecenter]);

  return <div className={category}>
      <div ref={mapElement} className='map-container'/>
    </div>
}

export default MapContainer;