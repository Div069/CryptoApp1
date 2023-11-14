import { useParams, Link } from "react-router-dom"
import useAxios from "../hooks/useAxios"
import { Line } from "react-chartjs-2";
import Skeleton from "./Skeleton";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import moment from "moment/moment";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);





const HistoryChart = () => {
 


  const { id } = useParams();
  const {response} = useAxios(`coins/${id}/market_chart?vs_currency=usd&days=7`);
  console.log(response);

  if(!response) {
    return (
     
            <div className='wrapper-container mt-8'>
                <Skeleton className='h-72 w-full mb-10' />
            </div>
        )
    }
    
  
  const coinChartData = response.prices.map(value => ({ x: value[0], y:value[1].toFixed(2) }));

  const options ={
    respnsive: true
  }
  const data ={
    
    labels: coinChartData.map(value => moment(value.x).format('DD/MMM')),
    datasets: [
        {
            fill:true,
            data:coinChartData.map(val =>val.y),
            label: id,
            borderColor: 'rgb(255,189,51)',
            backgroundColor: 'rgba(247, 240, 90, 1)',

        }
    ]
  }

  return (
    <div>
    <Line options={options} data={data} /></div>
  )
}

export default HistoryChart