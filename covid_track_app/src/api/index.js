import axios from "axios";




export  default async function  fatchData(){
    try{
        const {data:{cases,deaths,recovered,updated}}=await axios.get('https://disease.sh/v3/covid-19/all');
        return {cases,deaths, recovered ,updated}
    }catch(err){
        console.log(err);
    }
}


 