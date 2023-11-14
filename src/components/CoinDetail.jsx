import React from 'react'
import useAxios from '../hooks/useAxios'
import { useParams,Link } from 'react-router-dom'

const Coin = ({coin}) => {
    console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
        var price = {coin.current_price}
    </Link>
  )}


const CoinDetail = () => {
    const { id } =useParams();
    const {response} = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=true&sparkline=false`)
    console.log(response);
    
    if(!response) {
        return <div>Loading....</div>
    }
    
  return (
    <div className='my-6'>
     <div className=' gap-2 items-center '>
    <div className='flex py-4'>
     <a href={response.links.homepage[0]}><img className='scale-150' src={response.image.small} alt={response.name} /></a>
        <h1 className='px-4 break-after-column text-5xl mb-2 capitalize font-bold'>{response.name}:</h1>
        </div>
     <div className='flex justify-evenly items-center'>
     
     <p className='text-3xl mb-2 capitalize font-bold break-normal'>Symbol :{response.symbol}</p>
        <p className='text-3xl mb-2 capitalize font-bold break-normal'>Rank :{response.market_cap_rank}</p>
        <p className='text-3xl mb-2 capitalize font-bold break-normal'>Liquidity score:{response.liquidity_score}</p>
        </div>
        <p className='break-normal mt-6 text-lg font-serif font-semibold text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: response.description.en }}></p>

      </div>
      </div>
  )
}

export default CoinDetail