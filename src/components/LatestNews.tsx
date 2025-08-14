import React, { useEffect, useState } from "react";
import { Link } from "react-router";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  description: string;
}

const API_KEY = "d2bpn59r01qvh3vcqemgd2bpn59r01qvh3vcqen0";

const LatestNews: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://finnhub.io/api/v1/news?category=general&token=${API_KEY}`
        );
        const data = await res.json();

        const mappedData: NewsItem[] = data.slice(0, 6).map((item: any, index: number) => ({
          id: `${index}-${item.id || item.datetime}`,
          title: item.headline,
          category: "Finance",
          readTime: `${Math.floor(Math.random() * 5) + 3} min read`, // fake read time
          image: item.image || "https://via.placeholder.com/400x200?text=No+Image",
          description: item.summary || "",
        }));

        setNewsData(mappedData);
      } catch (err) {
        console.error("Error fetching Finnhub news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-white flex items-center justify-center">
        <p className="text-gray-600">Loading latest news...</p>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
          <Link
            to={`/markets`}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View all news →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <article
              key={item.id}
              className="bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
