import { X } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface AdBannerProps {
  type: "horizontal" | "vertical";
  size?: "small" | "medium" | "large";
}

export const AdBanner = ({ type, size = "medium" }: AdBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const sizeClasses = {
    horizontal: {
      small: "h-20",
      medium: "h-32",
      large: "h-48",
    },
    vertical: {
      small: "h-64",
      medium: "h-80", 
      large: "h-96",
    },
  };

  const mockAds = [
    {
      title: "Premium News Subscription",
      description: "Get unlimited access to all news articles",
      cta: "Subscribe Now",
      color: "bg-gradient-to-r from-news-primary to-news-accent",
    },
    {
      title: "Local Business Directory",
      description: "Discover the best businesses in Trichy",
      cta: "Explore Now",
      color: "bg-gradient-to-r from-business to-technology",
    },
    {
      title: "Health & Wellness Tips",
      description: "Stay healthy with expert advice",
      cta: "Learn More",
      color: "bg-gradient-to-r from-health to-sports",
    },
  ];

  const randomAd = mockAds[Math.floor(Math.random() * mockAds.length)];

  return (
    <Card className={`relative overflow-hidden border-border shadow-card ${sizeClasses[type][size]}`}>
      <div className={`${randomAd.color} h-full flex items-center justify-center text-white p-4 relative`}>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 h-6 w-6 p-0 text-white hover:bg-white/20"
          onClick={() => setIsVisible(false)}
        >
          <X className="w-3 h-3" />
        </Button>

        <div className="text-center space-y-2">
          <h4 className="font-bold text-lg">{randomAd.title}</h4>
          <p className="text-sm opacity-90">{randomAd.description}</p>
          <Button
            variant="secondary"
            size="sm"
            className="bg-white text-gray-900 hover:bg-gray-100"
          >
            {randomAd.cta}
          </Button>
        </div>

        <div className="absolute top-1 left-2 text-xs opacity-60">
          Sponsored
        </div>
      </div>
    </Card>
  );
};