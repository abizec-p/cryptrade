import { error } from "console";

export async function getCoinDetails() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1",
      {
        next:{
            revalidate: 60,
        },
      }
    );

    if(!res.ok){
        throw new Error(`CoinGecko API Error: ${res.status}`);
    }
    const data = await res.json();
    return data;

  } catch (error) {
    console.error("something went wrong", error);

    return null;
  }
}


export default async function getGlobalData(){
    try {
        const res =await fetch("https://api.coingecko.com/api/v3/global",
            {
                next:{
                revalidate:60,
            },
        }
    );

    if(!res.ok){
        throw new Error(`coingecko error:${res.status}`);
    }

    const data = await res.json();
    return data.data;
}

catch(error){
    console.error("wrong",error)
    return null

}}
  

export function formatNumber(num) {
  if (num >= 1_000_000_000_000) {
    return (num / 1_000_000_000_000).toFixed(2) + "T";
  }

  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(2) + "B";
  }

  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(2) + "M";
  }

  if (num >= 1_000) {
    return (num / 1_000).toFixed(2) + "K";
  }

  return num.toString();
}