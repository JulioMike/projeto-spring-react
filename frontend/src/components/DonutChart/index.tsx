import React from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';
import { BASE_URL } from 'utils/requests';
import { SaleSum } from 'types/sale';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
    
    let chartData: ChartData = { labels:[], series: []};

    axios.get(`${BASE_URL}/sales/amount-by-seller`).then((response)=>{
        const data = response.data as SaleSum[];
        const mylabels = data.map(x => x.sellerName);
        const myseries = data.map(x => x.sum);

        chartData = {labels: mylabels, series: myseries}
        console.log(chartData)
    }); 


    //const mockData = {
    //    series: [477138, 499928, 444867, 220426, 473088],
    //    labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    
    const options = {
        legend: {
            show: true
        }
    }
    
    return(
        <Chart 
            options={{...options, labels:chartData.labels}}
            series={chartData.series}
            type="donut"
            height= "240px"
        />    
    );
}

export default DonutChart;