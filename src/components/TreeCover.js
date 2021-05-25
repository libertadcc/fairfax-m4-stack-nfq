import React, { useState, useEffect} from 'react';
import Header from './Header.js';
import Modal from './Modal.js';
import Slider from '@material-ui/core/Slider';
import '../styles/treeCover.css';


function TreeCover({info}) {
 
  const valuetext = (value) => {
    return `${value}°C`;
  }

  const [value, setValue] = useState([2005, 2012]);

  const onChangeDate = (event, newValue) => {
    setValue(newValue);
    const startDate = newValue[0];
    const endDate = newValue[1];
  };

  console.log(info);
  return (
    <div >
      <Header name={info.name} element='treeCover' id={info.id} description={info.description} type={info.type} />

      <div id="treeCover">
        <Slider
          className="slider"
          value={value}
          onChange={onChangeDate}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
          step={info.step}
          min={2001}
          max={2017}
          
        />
      </div>
      

      <Modal description={info.description} id={info.id} type={info.type}/>

    </div>
  )
}

export default TreeCover