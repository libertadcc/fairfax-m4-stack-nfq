import '../styles/layerInfo.css';
import React from 'react';

import Header from './Header.js';
import Modal from './Modal.js';

function LayerInfo({info}) {
  return (
    <div className="wrapper" id="basic">
      <Header name={info.name} element='layerInfo' id={info.id} description={info.description} type={info.type}/>
      <div id="layerInfo" >
        <ul className="listLegend">{info.items.map((element, key) => {
          return (
            <li className="elementLegend" key={key} >
              <div className="circle" style={{backgroundColor: element.color }}></div>
              <p>
                {element.name}
              </p>
            </li>
          );
        })} 
        </ul>
      </div>
      <Modal description={info.description} id={info.id} type={info.type}/>
    </div>
  );
}

export default LayerInfo;