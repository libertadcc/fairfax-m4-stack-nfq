import React, { useState, useEffect } from 'react';
import LayerInfo from './LayerInfo';
import Choropleth from './Choropleth';
import Gradient from './Gradient';
import TreeCover from './TreeCover';
import '../styles/main.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
}));

function App() {
  const [info, setInfo] = useState();
  const classes = useStyles();
  useEffect(async () => {
    let response = await fetch('https://raw.githubusercontent.com/Vizzuality/front-end-code-challenge/master/data.json')
    let data = await response.json();
    return setInfo(data);
  },[]);

  if (info === undefined) {
    return (
    <div className={classes.root}>
      <CircularProgress />
    </div>);
  } else {
    return (
    <div className="legendContainer">
       <LayerInfo info={info[2]}/>
       <Choropleth info={info[1]}/>
       <Gradient info={info[0]}/>
       <TreeCover info={info[3]}/>
    </div>
  );
}
}

export default App;
