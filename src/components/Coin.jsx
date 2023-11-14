import React from 'react'
import { currencyFormat } from '../utils';
import { TrendingDown, TrendingUp } from '../icons/icon';
import { Link } from 'react-router-dom';

const Coin = ({coin}) => {
    console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
        <div className='grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-gray-500 border-b hover:bg-gray-200 hover:-translate-y-1 hover:scale-300 hover:duration-200'>
         <div className='flex items-center gap-2 w-full'>
            <img className='w-10' src={coin.image} alt={coin.name} />
            <p className='font-bold w-full '>{coin.name}</p>
            <span className='w-full font-bold 	text-transform: uppercase'>({coin.symbol})</span>
         </div>
         <span className='font-bold w-full text-center '>{currencyFormat(coin.current_price)}</span>
         <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
          {coin.price_change_percentage_24h < 0 ? <TrendingDown /> : <TrendingUp />}
          {coin.price_change_percentage_24h}%
        </span>
        <div className='hidden sm:block'>
            <p className='font font-semibold'>Market Cap</p>
            <span font-semibold>{currencyFormat(coin.market_cap)}</span>
        </div>
        </div>
    </Link>
  )
}

export default Coin