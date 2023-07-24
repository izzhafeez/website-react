const handlePointerMove = ({ mapElement, mapRef, overlayRef, selectedFeature }) => (event) => {
  if (!mapElement.current) {
    return;
  }

  if (event.dragging) {
    return;
  }

  const pixel = mapRef.current.getEventPixel(event.originalEvent);
  const hit = mapRef.current.hasFeatureAtPixel(pixel);

  mapElement.current.style.cursor = hit ? 'pointer' : '';

  if (hit) {
    const features = mapRef.current.getFeaturesAtPixel(pixel);
    if (features.length > 0) {
      selectedFeature.current = features[0];
      const text = selectedFeature.current.get('text');

      overlayRef.current.element.innerHTML = text;
      overlayRef.current.setPosition(event.coordinate);
    } else {
      selectedFeature.current = null;
      overlayRef.current.setPosition(undefined);
    }
  } else {
    selectedFeature.current = null;
    overlayRef.current.setPosition(undefined);
  }
};

export default handlePointerMove;