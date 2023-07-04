import React from "react";
// import Card from "./Components/Cards/Card";
// import Chart from "./Components/Chart/Chart";
// import CountryPicker from "./Components/CountryPicker/CountryPicker";

import {Card,Chart,CountryPicker} from './Components'
import Style from './App.module.css';


class App extends React.Component {
  render(){
    return (
      <div className={Style.container}>
        <h1><Card/></h1>
        <h1><Chart/></h1>
        <h1><CountryPicker/></h1>
        
      </div>
    );
  }
}

export default App;
