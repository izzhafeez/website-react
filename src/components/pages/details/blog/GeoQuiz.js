import MapContainer from "components/map/MapContainer";
import React, { useEffect, useState } from "react";
import { mutedPointStyle } from "./blogTypes/styles";
import { Feature } from "ol";
import { Point } from "ol/geom";

const purify = text => {
  return text
    .replaceAll(' ', '')
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, '')
    .replace('school', '');
}

const GeoQuiz = ({ data, constructor }) => {
  const [features, setFeatures] = useState([]);
  const [items, setItems] = useState([]);
  const [itemPositions, setItemPositions] = useState({});
  const [completed, setCompleted] = useState({});
  const [correct, setCorrect] = useState(0);
  const [grade, setGrade] = useState('');
  
  useEffect(() => {
    const allItems = Object.entries(data).map(([k, v], index) => {
      itemPositions[purify(v.title)] = index;
      setItemPositions(itemPositions);
      const item = constructor(v);
      return item;
    });
    setItems(allItems);
    const allFeatures = allItems.map(item => {
      const feature = new Feature({
        geometry: new Point([item.longitude, item.latitude]),
        text: '',
        style: mutedPointStyle
      })
      feature.setStyle(feature.get('style'));
      return feature;
    });
    setFeatures(allFeatures);
  }, [itemPositions, constructor, data])

  const handleGuess = event => {
    const guess = purify(event.target.value);
    const itemPosition = itemPositions[guess];
    if (!!itemPosition) {
      if (!!completed[guess]) {
        return;
      }

      completed[guess] = true;
      setCompleted(completed);
      setCorrect(correct + 1);
      setFeatures([
        ...features.slice(0, itemPosition),
        items[itemPosition].getFeature(),
        ...features.slice(itemPosition+1, features.length)
      ]);
      event.target.value = '';
    };
  };

  const getGrade = percentage => {
    switch (true) {
      case percentage > 0.9:
        return 'A for Average';
      case percentage > 0.8:
        return 'B for BBC Food';
      case percentage > 0.7:
        return 'C for Colander';
      case percentage > 0.6:
        return 'D for Disowned';
      case percentage > 0.5:
        return 'E for Emotional Damage';
      case percentage > 0.4:
        return 'F for Failure';
      default:
        return 'J for Jamie Oliver';
    }
  };

  const handleGiveUp = _ => {
    setCompleted(itemPositions);
    setGrade(getGrade(correct/features.length));
    setFeatures(items.map(item => item.getFeature()))
  }

  return <div className='text-start'>
    <div className='form-group'>
      <label for='guess'><b>Enter answer here:</b></label>
      <input
        type='text'
        id='guess'
        name='guess'
        className='form-control my-2'
        onChange={handleGuess}
      />
    </div>
    <p>{`${correct}/${features.length}`} guessed <button onClick={handleGiveUp} className='btn btn-danger py-1 ms-2'>Give Up</button></p>
    {!!grade && <p><b>Grade:</b><br/>{grade}</p>}
    <MapContainer category='projects' features={features} willRecenter={false}/>
  </div>
};

export default GeoQuiz;