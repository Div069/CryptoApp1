import { Link } from "react-router-dom";

const CoinTrending = ( {coin} ) => {
    console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
    <div className="font-light mb-2 p-2 border-gray-800 border-2 rounded  hover:bg-gray-400 hover:-translate-y-1 hover:scale-300 hover:duration-200">
    <div className="flex items-center gap-3">
        <span className="font-mono font-semibold">
        {coin.score+1}
        </span>
        <img src={coin.small} alt={coin.name} />
        <p>{coin.name}</p>
        <small className="text-xs">({coin.symbol})</small>
    </div>
    </div>

    </Link>
    
  )
}

export default CoinTrending