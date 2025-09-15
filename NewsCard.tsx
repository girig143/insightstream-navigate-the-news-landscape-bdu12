import { Clock, Eye, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  article: {
    id: string;
    title: string;
    summary: string;
    category: string;
    author: string;
    publishedAt: string;
    imageUrl: string;
    readTime: string;
    views: number;
  };
}

const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    Politics: "politics",
    Sports: "sports",
    Technology: "technology",
    Entertainment: "entertainment",
    Health: "health",
    Business: "business",
  };
  return colors[category] || "news-primary";
};

export const NewsCard = ({ article }: NewsCardProps) => {
  const categoryColor = getCategoryColor(article.category);

  return (
    <Card className="overflow-hidden news-card bg-gradient-card border-border shadow-card">
      <div className="aspect-video overflow-hidden">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover transition-smooth hover:scale-105"
        />
      </div>
      
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${categoryColor}/10 text-${categoryColor} border border-${categoryColor}/20`}>
            {article.category}
          </span>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{article.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <h3 className="font-bold text-lg leading-tight text-foreground hover:text-news-primary transition-smooth cursor-pointer line-clamp-2">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-3">
          {article.summary}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-foreground">{article.author}</span>
            <span className="text-xs text-muted-foreground">{article.publishedAt}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Share2 className="w-4 h-4" />
            </Button>
            <Button size="sm" className="bg-news-primary hover:bg-news-primary/90">
              Read More
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};