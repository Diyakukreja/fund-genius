import React, { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import axios from "axios";

interface StockData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

const TopStocks: React.FC = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const symbols = [
          // 🇮🇳 Indian Large-cap Stocks
          "RELIANCE.NS", "TCS.NS", "HDFCBANK.NS", 

                
          // 🇮🇳 Indian Indexes
          "^NSEI",       // Nifty 50
          "^BSESN",      // Sensex
          "^NSEBANK",    // Nifty Bank
                
          // 🌍 Global Stocks (US Big Tech & Global Leaders)
          "AAPL",        // Apple
          "MSFT",        // Microsoft
          "GOOGL",       // Alphabet
          "AMZN",        // Amazon
          "TSLA",        // Tesla
          "META",        // Meta Platforms
          "NVDA",        // Nvidia
          "BABA",        // Alibaba
          "NFLX",        // Netflix
          "ADBE"         // Adobe
        ].join(",");

        const res = await axios.get(
          `https://yahoo-finance15.p.rapidapi.com/api/yahoo/qu/quote/${symbols}`,
          {
            headers: {
              "x-rapidapi-key": "6dccffeacfmsh695a2947558f588p11f13djsnd8ae4b167b2f",
              "x-rapidapi-host": "yahoo-finance15.p.rapidapi.com",
            },
          }
        );

        const apiData = Array.isArray(res.data) ? res.data : res.data?.body || [];

        const formattedData: StockData[] = apiData.map((stock: any) => ({
          symbol: stock.symbol,
          name: stock.shortName || stock.longName || stock.symbol,
          price: `₹${stock.regularMarketPrice.toFixed(2)}`,
          change: `${stock.regularMarketChange >= 0 ? "+" : ""}${stock.regularMarketChange.toFixed(2)}`,
          changePercent: `${stock.regularMarketChangePercent >= 0 ? "+" : ""}${stock.regularMarketChangePercent.toFixed(2)}%`,
          isPositive: stock.regularMarketChangePercent >= 0
        }));

        setStockData(formattedData.slice(0, 10)); // show only top 5
      } catch (err) {
        console.error("Error fetching stocks:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white text-center">
        <p className="text-gray-500">Loading Top Stocks...</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Top Stocks</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stockData.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{stock.symbol}</h3>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
                {stock.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-1">{stock.price}</p>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-medium ${stock.isPositive ? "text-green-600" : "text-red-600"}`}>
                    {stock.change}
                  </span>
                  <span className={`text-sm ${stock.isPositive ? "text-green-600" : "text-red-600"}`}>
                    {stock.changePercent}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStocks;
