import { useEffect, useState } from "react"
import {fetchDailyData} from '../../api';

import { Line,Bar } from "react-chartjs-2";
import styles from './Chart.module.css'

 function Chart() {

  const [dailyData,setDailydata]=useState([]);

  useEffect(()=>{
    const fetchAPI= async ()=>{
        setDailydata(await fetchDailyData())
    };
    // console.log("Chart Component data show")
    if (Array.isArray(dailyData)) {
      console.log("Yes")
    } else {
      console.error(dailyData);
    }
    console.log(dailyData);
    fetchAPI();

  })

const lineChart=(
  dailyData.length ? (<Line
    data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [{
            data: dailyData.map(( {confirmed} ) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
        }, {
            data: dailyData.map(({ deaths} ) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,0.5)',
            fill: true,

        }],
    }}
/>) : null
)






  return (
    <div>
      {lineChart}
    </div>
  )
}
export default Chart;
