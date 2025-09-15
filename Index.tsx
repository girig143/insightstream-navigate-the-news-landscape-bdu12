import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { NewsTicker } from "@/components/NewsTicker";
import { WeatherWidget } from "@/components/WeatherWidget";
import { NewsCard } from "@/components/NewsCard";
import { AdBanner } from "@/components/AdBanner";
import { mockArticles } from "@/data/mockNews";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    let filtered = mockArticles;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
      />
      
      <NewsTicker />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Featured Stories */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory === "All" ? "Latest News" : `${selectedCategory} News`}
                  {searchQuery && (
                    <span className="text-base font-normal text-muted-foreground ml-2">
                      - Results for "{searchQuery}"
                    </span>
                  )}
                </h2>
                <span className="text-sm text-muted-foreground">
                  {filteredArticles.length} articles found
                </span>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                  <p className="text-muted-foreground">Try adjusting your search or select a different category.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, index) => (
                    <div key={article.id}>
                      <NewsCard article={article} />
                      {/* Insert ads every 6 articles */}
                      {(index + 1) % 6 === 0 && (
                        <div className="mt-6">
                          <AdBanner type="horizontal" size="medium" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <WeatherWidget />

            {/* Sidebar Ad */}
            <AdBanner type="vertical" size="medium" />

            {/* Trending News */}
            <div className="bg-card border border-border rounded-lg p-4 shadow-card">
              <h3 className="font-bold text-lg mb-4 text-foreground">Trending Now</h3>
              <div className="space-y-3">
                {mockArticles.slice(0, 5).map((article, index) => (
                  <div key={article.id} className="flex items-start gap-3 pb-3 border-b border-border/50 last:border-b-0">
                    <span className="flex-shrink-0 w-6 h-6 bg-news-primary text-white rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground line-clamp-2 hover:text-news-primary transition-smooth cursor-pointer">
                        {article.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span>{article.views.toLocaleString()} views</span>
                        <span>•</span>
                        <span>{article.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Another sidebar ad */}
            <AdBanner type="vertical" size="small" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
                Happy News
              </h3>
              <p className="text-muted-foreground text-sm">
                Your trusted source for accurate, timely, and positive news from Tamil Nadu and beyond.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Categories</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-news-primary transition-smooth">Politics</a></li>
                <li><a href="#" className="hover:text-news-primary transition-smooth">Sports</a></li>
                <li><a href="#" className="hover:text-news-primary transition-smooth">Technology</a></li>
                <li><a href="#" className="hover:text-news-primary transition-smooth">Entertainment</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-news-primary transition-smooth">About Us</a></li>
                <li><a href="#" className="hover:text-news-primary transition-smooth">Contact</a></li>
                <li><a href="#" className="hover:text-news-primary transition-smooth">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-news-primary transition-smooth">Terms of Service</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 text-foreground">Download App</h4>
              <p className="text-sm text-muted-foreground mb-3">Get the latest news on your mobile device</p>
              <div className="space-y-2">
                <div className="bg-gradient-hero p-3 rounded-lg text-white text-center cursor-pointer hover:opacity-90 transition-smooth">
                  <p className="text-xs">Download for</p>
                  <p className="font-semibold">Android & iOS</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Happy News. All rights reserved. Made with ❤️ for Tamil Nadu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
