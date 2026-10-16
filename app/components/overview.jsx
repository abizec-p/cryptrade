import { getCoinDetails } from "../lib/api"
import getGlobalData from "../lib/api";
import { formatNumber } from "../lib/api";

export  default async function Overview(){

    const globalData = await getGlobalData();

 
    
    
    return(
        <div>
               <div className=" hidden md:flex  p-5 mt-5 *:w-60 *:px-5 *:py-3 *:bg-white  *:rounded-xl *:border *:border-gray-200  justify-between">
        <div><h1>Total Market Cap</h1>
        <h1 className=" text-green-600">{formatNumber(globalData?.total_market_cap.cad)}</h1></div>
        <div><h1>24h Volume</h1>
        <h1 className=" text-green-700">{formatNumber(globalData?.total_volume.cad)}</h1></div>
        <div><h1>24h Change</h1>
        <h1 className={globalData.market_cap_change_percentage_24h >=0 ? "text-green-500" : "text-red-500" }>{globalData?.market_cap_change_percentage_24h_usd.toFixed(2)}%</h1></div>
        <div><h1>24h change</h1>
        <h1 className={globalData.market_cap_percentage.btc >=0 ? "text-green-600" : "text-red-500"}>{globalData.market_cap_percentage.btc.toFixed(2)}%</h1></div>
      </div>
        </div>
    )
}