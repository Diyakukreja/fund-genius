import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Stay Ahead of the <span className="text-blue-600">Markets</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Real-time market data, breaking financial news, and powerful analytics to make
          informed investment decisions.
        </p>
      </div>
    </section>
  );
};

export default Hero;