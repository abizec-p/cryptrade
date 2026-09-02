import { getCoinDetails } from "../lib/api";
import Image from "next/image";

export default async function Cryptolist() {
  const coins = await getCoinDetails();

  
  return (
    <div className="bg-white   mx-5 p-5 px-10 rounded-xl">
      <div className="flex pb-2 border-b border-gray-300 justify-between">
        <div>
          <h1 className="font-bold">Top coins</h1>
        </div>
        <div className="flex  gap-2 *:hover:bg-gray-300 *:px-4 *:py-1 *:rounded-xl *:text-gray-600">
          <div className="active:bg-gray-700">Top</div>
          <div>Gainers</div>
          <div>Losers</div>
          <div>Watchlist</div>
        </div>
      </div>
      <div className="flex border-b *:text-sm *:text-gray-700 border-gray-200 py-3 justify-between gap-5">
        <div>Name</div>
        <div>Price</div>
        <div>24h %</div>
        <div>Market Cap</div>
        <div>Trend</div>
      </div>
      <div className="h-90 overflow-y-scroll">
        {coins?.map((coin) => (
          <div className="flex border-b border-gray-200 *:text-left *:w-20 hover:bg-gray-100  *:py-5 *:items-center  justify-between " key={coin.id}>
            <div className="flex">
              <Image
                src={coin.image}
                alt={coin.name}
                height={5}
                width={5}
                className="w-5 h-5"
              />
             <h1 className="px-2"> {coin.name}</h1>
            </div>
            <div>${coin.current_price.toLocaleString()}</div>
            <div className="text-left">{coin.price_change_percentage_24h.toFixed(2)}%</div>
            <div>${(coin.market_cap / 1_000_000_000).toFixed(2)}B</div>
            <div>{coin.price_change_percentage_24h >= 0 ? "📈" : "📉"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
