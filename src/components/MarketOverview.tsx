import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MarketData {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

const marketData: MarketData[] = [
  {
    symbol: 'S&P',
    name: 'S&P 500',
    price: '$4,567.89',
    change: '+45.67',
    changePercent: '+1.02%',
    isPositive: true
  },
  {
    symbol: 'NASDAQ',
    name: 'NASDAQ',
    price: '$14,234.56',
    change: '-89.45',
    changePercent: '-0.62%',
    isPositive: false
  },
  {
    symbol: 'DOW',
    name: 'Dow Jones',
    price: '$35,679.80',
    change: '+123.45',
    changePercent: '+0.35%',
    isPositive: true
  },
  {
    symbol: 'FTSE',
    name: 'FTSE 100',
    price: '$2,033.45',
    change: '-12.34',
    changePercent: '-0.60%',
    isPositive: false
  },
  {
    symbol: 'VIX',
    name: 'VIX',
    price: '$18.45',
    change: '+2.15',
    changePercent: '+0.88%',
    isPositive: true
  }
];

const MarketOverview: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Market Overview</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {marketData.map((market) => (
            <div key={market.symbol} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 uppercase">{market.symbol}</h3>
                  <p className="text-xs text-gray-400">{market.name}</p>
                </div>
                {market.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-500" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-500" />
                )}
              </div>
              <div>
                <p className="text-xl font-bold text-gray-900 mb-1">{market.price}</p>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-medium ${market.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {market.change}
                  </span>
                  <span className={`text-sm ${market.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {market.changePercent}
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

export default MarketOverview;