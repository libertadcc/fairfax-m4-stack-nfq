import '../styles/header.css';
import React, { useState } from 'react';
import show  from '../icons/show.svg';
import hide  from '../icons/hide.svg';
import arrowDown  from '../icons/arrow-down.svg';
import dragDrop  from '../icons/drag-dots.svg';
import info  from '../icons/info.svg';

function Header({name, element, id, description, type}) {

  const [showingInfo, setChangeVisibilityInfo] = useState(false);
  const [isCollapsed, setIsCollapse] = useState(false);  

  const onChangeInfo = () => {
    var modal = document.getElementById(id);
    var parseDescription = JSON.stringify(description);

    document.getElementsByClassName(type)[0].innerHTML = parseDescription.replace(/['"]+/g, '');

    if (modal.style.display === 'block') {
      modal.style.display = "none";
    } else {
      modal.style.display = "block";
    };
  };

  const onChangeVisibility = () => setChangeVisibilityInfo(!showingInfo);
  
  const renderCorrectEye = () => {
    if (showingInfo) {
      return (
        <img src={show} alt="Show" width={20} height={20} title="Show layer" onClick={onChangeVisibility}/>
      );
    } else {
      return (
        <img src={hide} alt="Hide" width={20} height={20} title="Hide layer" onClick={onChangeVisibility}/>
      );
    };
  };

  const onChangeCollapse = () => {
    setIsCollapse(!isCollapsed);
    const detailLayerInfo = document.getElementById(element);
    if (!isCollapsed) {
      detailLayerInfo.style.display = "none";
    } else {
      detailLayerInfo.style.display = "block";
    };
  };

  const renderCollapse = () => {
    if (isCollapsed) {
      return (
        <img src={arrowDown} className="arrowUp" alt="Drop down" width={20} height={20} title="Expand layer" onClick={onChangeCollapse}/>
      );
    } else {
      return (
        <img src={arrowDown}  alt="Upward" width={20} height={20} title="Collapse layer" onClick={onChangeCollapse}/>
      );
    }
  };

  return (
    <div className="wrapper" id="basic">
      <div className="container">
        <span className="dragDrop">
          <img src={dragDrop} alt="Drag and drop" className="icon" width={20} height={20} />
        </span>
        <p className="titleLegend">{name}</p>
        <ul className="iconList">
          <li>
            <span>{renderCorrectEye()}</span>
          </li>
          <li>
            <span>
              <img src={info} alt="Info" width={20} height={20} onClick={onChangeInfo} title="Layer info"/>
            </span>
          </li>
          <li>
            <span>{renderCollapse()}</span>
          </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Header