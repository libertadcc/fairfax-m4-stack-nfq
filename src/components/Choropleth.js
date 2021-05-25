import '../styles/choropleth.css';
import React from 'react';

import Header from './Header.js';
import Modal from './Modal.js';

function Choropleth({info}) {
  return (
    <div className="wrapper" id="choropleth">
     <Header name={info.name} element='choroplethInfo' id={info.id} description={info.description} type={info.type}/>
      <div id="choroplethInfo" >
        <ul className="listChoropleth">{info.items.map((element, key) => {
          return (
          <li className="elementChoropleth" key={key} >
            <div className="rectangle" style={{backgroundColor: element.color}}></div>
          </li>
          )
        })} 
        </ul>
        <ul className="listChoropleth">{info.items.map((element, key) => {
          return (
          <li className="labelsChoropleth" key={key} >
            {element.name}
          </li>
          )
        })} 
        </ul>
      </div>

      <Modal description={info.description} id={info.id} type={info.type}/>
    </div>
  )
}

export default Choropleth