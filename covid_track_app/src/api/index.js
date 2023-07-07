import axios from "axios";


const url="https://disease.sh/v3/covid-19/all"

export  default async function  fatchData(){
    try{
        const {data:{cases,deaths,recovered,updated}}=await axios.get(url);
        return {cases,deaths, recovered ,updated}
    }catch(err){
        console.log(err);
    }
}

export const  fetchDailyData=async ()=>{
    try{
        const {data}=await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}

 









