import { Overlay } from "ol";

const getOverlay = () => {
  const overlay = new Overlay({
    element: document.getElementById('map-overlay'),
    positioning: 'bottom-center',
    stopEvent: false,
  });
  overlay.element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  overlay.element.style.padding = '10px';
  overlay.element.style.borderRadius = '5px';
  overlay.element.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  overlay.element.style.fontSize = '14px';
  return overlay;
};

export default getOverlay;