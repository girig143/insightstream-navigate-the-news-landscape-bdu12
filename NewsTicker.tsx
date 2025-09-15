import { useEffect, useState } from "react";

const breakingNews = [
  "🔴 BREAKING: Technology sector sees major growth in Q4 2024 across Tamil Nadu",
  "⚡ UPDATE: New sports facilities announced for Trichy district - Construction begins next month",
  "📈 MARKET: Stock market reaches new highs amid positive economic indicators from South India",
  "🌟 ENTERTAINMENT: Tamil Film Festival announces star-studded lineup for 2024 in Chennai",
  "🏥 HEALTH: Revolutionary cancer treatment center opens in Trichy Government Hospital",
  "💼 BUSINESS: Major automobile manufacturer selects Trichy for new production facility",
  "🌧️ WEATHER: Monsoon update - Moderate rainfall expected across Tamil Nadu this week",
  "🏆 SPORTS: Trichy Cricket Academy player selected for Tamil Nadu state team",
];

export const NewsTicker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % breakingNews.length);
    }, 4000); // Changed to 4 seconds for better readability

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-ticker text-white py-3 shadow-ticker overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold mr-4 flex-shrink-0 border border-white/30">
            🔴 LIVE
          </div>
          <div className="overflow-hidden flex-1 relative">
            <div className="flex transition-transform duration-1000 ease-in-out"
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {breakingNews.map((news, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 text-lg font-medium"
                >
                  {news}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-1 ml-4">
            {breakingNews.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};