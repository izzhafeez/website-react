import MapContainer from "components/map/MapContainer";
import React, { useEffect, useState } from "react";
import { mutedPointStyle } from "../../blog/blogTypes/styles";
import { Feature } from "ol";
import { Point } from "ol/geom";
import unidecode from "unidecode";

const purify = text => {
  const unascii = unidecode(text);
  return unascii
    .replaceAll(' ', '')
    .toLowerCase()
    .replace(/__.*/gi, '')
    .replace(/[^0-9a-z]/gi, '')
    .replace('school', '')
    .replace('saint', 'st');
}

const GeoQuiz = ({ data, constructor }) => {
  const [features, setFeatures] = useState([]);
  const [items, setItems] = useState([]);
  const [itemPositions, setItemPositions] = useState({});
  const [completed, setCompleted] = useState({});
  const [correct, setCorrect] = useState(0);
  const [grade, setGrade] = useState('');
  const [willRecenter, setRecenter] = useState(false);
  const [withOverlay, setWithOverlay] = useState(false);
  
  useEffect(() => {
    setCorrect(0);
    setCompleted({});
    setGrade('');
    setRecenter(true);
    const allItems = Object.entries(data).map(([k, v], index) => {
      console.log(v);
      const key = purify(v.title);
      if (!!itemPositions[key]) {
        itemPositions[key].push(index);
      } else {
        itemPositions[key] = [index];
      }
      setItemPositions(itemPositions);
      const item = constructor(v);
      return item;
    });
    setItems(allItems);
    const allFeatures = allItems.map(item => item.getFeature());
    setFeatures(allFeatures);
  }, [itemPositions, constructor, data]);

  const handleGuess = event => {
    setRecenter(false);
    const guess = purify(event.target.value);
    const positionsToChange = itemPositions[guess];
    if (!!positionsToChange) {
      if (!!completed[guess]) {
        return;
      }

      completed[guess] = true;
      setCompleted(completed);
      const totalCorrect = correct + positionsToChange.length;
      setCorrect(totalCorrect);
      setFeatures(features.map((f, i) => {
        if (positionsToChange.includes(i)) {
          return undefined;
        }
        return f;
      }));
      event.target.value = '';
      if (totalCorrect === features.length) {
        handleGiveUp(true)();
      }
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

  const handleGiveUp = isComplete => _ => {
    setGrade(getGrade(isComplete ? 1 : correct/features.length));
    setWithOverlay(true);
  }

  return <div className='text-start'>
    <div className='form-group'>
      <label htmlFor='guess'><b>Enter answer here:</b></label>
      <input
        type='text'
        id='guess'
        name='guess'
        className='form-control my-2'
        onChange={handleGuess}
      />
    </div>
    <p>{`${correct}/${features.length}`} guessed <button onClick={handleGiveUp()} className='btn btn-danger py-1 ms-2'>Give Up</button></p>
    {!!grade && <p><b>Grade:</b><br/>{grade}</p>}
    <MapContainer category='projects' features={features} willRecenter={willRecenter} withOverlay={withOverlay}/>
  </div>
};

export default GeoQuiz;