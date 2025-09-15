import { useState } from "react";
import { Search, Clock, Download, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSearch: (query: string) => void;
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const categories = [
  { name: "All", color: "news-primary" },
  { name: "Politics", color: "politics" },
  { name: "Sports", color: "sports" },
  { name: "Technology", color: "technology" },
  { name: "Entertainment", color: "entertainment" },
  { name: "Health", color: "health" },
  { name: "Business", color: "business" },
];

export const Header = ({ onSearch, onCategorySelect, selectedCategory }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const currentTime = new Date().toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-card border-b border-border shadow-card sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with time and download */}
        <div className="flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{currentTime}</span>
          </div>
          <Button variant="ghost" size="sm" className="text-news-accent hover:text-news-accent hover:bg-news-accent/10">
            <Download className="w-4 h-4 mr-2" />
            Download App
          </Button>
        </div>

        {/* Main header */}
        <div className="py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Happy News
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => onCategorySelect(category.name)}
                  className={`px-3 py-2 rounded-lg transition-smooth category-badge ${
                    selectedCategory === category.name
                      ? `bg-${category.color} text-white`
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>

            {/* Search and Mobile Menu */}
            <div className="flex items-center gap-4">
              <form onSubmit={handleSearch} className="hidden sm:flex items-center gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>
                <Button type="submit" className="bg-news-primary hover:bg-news-primary/90">
                  Search
                </Button>
              </form>

              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 space-y-4 border-t border-border pt-4">
              <form onSubmit={handleSearch} className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button type="submit" className="bg-news-primary hover:bg-news-primary/90">
                  Search
                </Button>
              </form>

              <nav className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => {
                      onCategorySelect(category.name);
                      setShowMobileMenu(false);
                    }}
                    className={`px-3 py-2 rounded-lg transition-smooth category-badge text-left ${
                      selectedCategory === category.name
                        ? `bg-${category.color} text-white`
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};