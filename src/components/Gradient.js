import '../styles/gradient.css';
import React from 'react';
import Header from './Header';
import Modal from './Modal';
import i18n from '../i18n/en/english.json'

function Gradient({info}) {
  let colorsString;
  const loadColors = (response) => {
    const colorsArray = []
    response.map((element) => colorsArray.push(element.color));
    colorsString = colorsArray.toString();
    console.log(colorsString)
  };
  
  loadColors(info.items);

  return (
    <div className="wrapper">
      <Header name={info.name} element='gradient' id={info.id} description={info.description} type={info.type}/>

      <div id="gradient">
        <div className="gradientWrapper">
          <div className="gradientContainer" style={{background: `linear-gradient(to right, ${colorsString})`}}>
          </div>
        </div>
        <ul className="listGradient">{info.items.map((element, index) => {
          return (
            <li className="labels" key={index}>{element.name}</li>
          );
        })}</ul>
        <div className="extraInfo">
          <p>{i18n.extraUrban}</p>
          <a href="#" target="_blank">{i18n.checkData}</a>
        </div> 
      </div>
      
      <Modal description={info.description} id={info.id} type={info.type}/>

    </div>
  )
}

export default Gradient