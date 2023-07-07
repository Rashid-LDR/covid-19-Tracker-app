import React from "react";

// import Card from "./Components/Cards/Card";
// import Chart from "./Components/Chart/Chart";
// import CountryPicker from "./Components/CountryPicker/CountryPicker";

import {Card,Chart,CountryPicker} from './Components'
import Style from './App.module.css';
import fetchData from './api';


class App extends React.Component {
  state={
    data:{}
  }

  async componentDidMount(){
    const fetchedData=await fetchData();
    this.setState({data:fetchedData})
  }


  render()  {
    const {data}=this.state;
    return (
      <div className={Style.container}>

        <h1><Card data={data}/></h1>
        <h1><Chart/></h1>
        <h1><CountryPicker/></h1>
      
      </div>
    );
  }
}

export default App;
