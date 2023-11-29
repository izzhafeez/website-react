const handlePointerMove = ({ mapElement, mapRef, overlayRef, selected }) => (event) => {
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
    const features = mapRef.current.getFeaturesAtPixel(pixel).filter(f => !!f.values_.text);
    if (features.length > 0) {
      if (!!selected.current) {
        selected.current.setStyle(selected.current.get('style')());
      }
      selected.current = features[0];
      const text = selected.current.get('text');
      selected.current.setStyle(selected.current.get('style')(true));

      if (!!text) {
        overlayRef.current.element.innerHTML = text;
        overlayRef.current.setPosition(event.coordinate);
      }
    }
  } else {
    if (!!selected.current) {
      selected.current.setStyle(selected.current.get('style')());
    }
    selected.current = null;
    overlayRef.current.setPosition(undefined);
  }
};

export default handlePointerMove;