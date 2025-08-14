import React from 'react';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  readTime: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Tech Stocks Rally as Momentum Continues to Drive Growth",
    category: "Technology",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    title: "Federal Reserve Signals Extended Rate Changes in Coming Quarter",
    category: "Economy",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Electric Vehicle Market Shows Strong Q4 Performance",
    category: "Automotive",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const TodaysNews: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Today's Top News</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
            View all news →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600">{item.category}</span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodaysNews;