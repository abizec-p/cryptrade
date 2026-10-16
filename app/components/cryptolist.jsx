
import { getCoinDetails } from "../lib/api";
import Image from "next/image";

export default async function Cryptolist() {
  const coins = await getCoinDetails();

  return (
    <div className="-mx-8 md:mx-5  mt-10 md:mt-0  rounded-xl bg-white p-3 h-full md:h-120  md:overflow-y-hidden w-90% sm:p-5 md:px-10">
      <div className="flex items-center justify-between border-b w-full border-gray-300 pb-3">
        <h1 className="font-bold text-gray-900">Top coins</h1>

        <div className="hidden gap-2 text-sm text-gray-600 md:flex">
          {["Top", "Gainers", "Losers", "Watchlist"].map((tab) => (
            <button
              key={tab}
              className={`rounded-xl px-4 py-1 hover:bg-gray-100 ${
                tab === "Top" ? "bg-gray-100 font-semibold" : ""
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="hidden grid-cols-[minmax(160px,1.5fr)_minmax(120px,1fr)_minmax(90px,0.8fr)_minmax(130px,1fr)_60px] gap-4 border-b border-gray-200 py-3 text-sm text-gray-600 md:grid">
        <div>Name</div>
        <div>Price</div>
        <div>24h %</div>
        <div>Market Cap</div>
        <div className="text-center">Trend</div>
      </div>

      <div className="max-h-[36rem]  md:overflow-y-auto">
        {coins?.map((coin) => {
          const change = coin.price_change_percentage_24h;
          const isPositive = change >= 0;

          return (
            <div
              key={coin.id}
              className="border-b border-gray-100 hover:bg-gray-50"
            >
              {/* MOBILE: two-column layout */}
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 py-4 md:hidden">
                {/* Left: coin name and price */}
                <div className="flex min-w-0 items-center gap-2">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={32}
                    height={32}
                    className="h-8 w-8 shrink-0"
                  />

                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold text-gray-900">
                      {coin.name}
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      $
                      {coin.current_price.toLocaleString("en-US", {
                        maximumFractionDigits: 8,
                      })}
                    </p>
                  </div>
                </div>

                {/* Right: market cap and percentage */}
                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-900">
                    $
                    {(coin.market_cap / 1_000_000_000).toFixed(2)}
                    <span className="ml-0.5 text-xs font-normal text-gray-500">
                      B
                    </span>
                  </p>

                  <p
                    className={`mt-1 text-xs font-medium ${
                      isPositive ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {change.toFixed(2)}%
                  </p>
                </div>
              </div>

              {/* DESKTOP: full columns */}
              <div className="hidden grid-cols-[minmax(160px,1.5fr)_minmax(120px,1fr)_minmax(90px,0.8fr)_minmax(130px,1fr)_60px] items-center gap-4 py-4 md:grid">
                <div className="flex min-w-0 items-center gap-3">
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={28}
                    height={28}
                    className="h-7 w-7 shrink-0"
                  />
                  <span className="truncate font-medium text-gray-900">
                    {coin.name}
                  </span>
                </div>

                <div className="text-sm text-gray-900">
                  $
                  {coin.current_price.toLocaleString("en-US", {
                    maximumFractionDigits: 8,
                  })}
                </div>

                <div
                  className={`text-sm ${
                    isPositive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {isPositive ? "+" : ""}
                  {change.toFixed(2)}%
                </div>

                <div className="text-sm text-gray-900">
                  $
                  {(coin.market_cap / 1_000_000_000).toFixed(2)}
                  B
                </div>

                <div className="text-center">
                  {isPositive ? "📈" : "📉"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
