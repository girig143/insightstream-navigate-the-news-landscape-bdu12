import { Cloud, Sun, CloudRain, Wind, Thermometer, MapPin, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";

export const WeatherWidget = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Enhanced weather data for Trichy
  const weatherData = {
    location: "Trichy, Tamil Nadu",
    temperature: "32°C",
    condition: "Partly Cloudy",
    humidity: "68%",
    windSpeed: "15 km/h",
    visibility: "8 km",
    feelsLike: "35°C",
    icon: Cloud,
    uvIndex: "High",
  };

  const IconComponent = weatherData.icon;
  const timeString = currentTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Asia/Kolkata'
  });

  return (
    <div className="space-y-4">
      {/* Live Time Display */}
      <Card className="p-4 bg-gradient-hero text-white border-0 shadow-elevated">
        <div className="text-center">
          <div className="text-sm opacity-90 mb-1">Live Time - Trichy</div>
          <div className="text-2xl font-mono font-bold">{timeString}</div>
          <div className="text-xs opacity-75 mt-1">
            {currentTime.toLocaleDateString('en-IN', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </div>
        </div>
      </Card>

      {/* Weather Widget */}
      <Card className="p-4 bg-gradient-card border-border shadow-card">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <MapPin className="w-4 h-4 text-news-accent" />
            Weather Now
          </h3>
          <IconComponent className="w-8 h-8 text-news-accent" />
        </div>
        
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground">{weatherData.location}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-3xl font-bold text-foreground">{weatherData.temperature}</p>
              <p className="text-sm text-muted-foreground">feels like {weatherData.feelsLike}</p>
            </div>
            <p className="text-sm text-muted-foreground">{weatherData.condition}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Thermometer className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">Humidity: {weatherData.humidity}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">Wind: {weatherData.windSpeed}</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">Visibility: {weatherData.visibility}</span>
            </div>
            <div className="flex items-center gap-2">
              <Sun className="w-3 h-3 text-muted-foreground" />
              <span className="text-muted-foreground">UV: {weatherData.uvIndex}</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Weather News */}
      <Card className="p-4 bg-gradient-card border-border shadow-card">
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <CloudRain className="w-4 h-4 text-news-accent" />
          Weather Updates
        </h4>
        <div className="space-y-2 text-sm">
          <div className="p-2 bg-secondary/50 rounded border-l-4 border-l-news-accent">
            <p className="font-medium text-foreground">Monsoon Alert</p>
            <p className="text-muted-foreground">Moderate rainfall expected in Trichy and surrounding areas this week.</p>
          </div>
          <div className="p-2 bg-secondary/50 rounded border-l-4 border-l-sports">
            <p className="font-medium text-foreground">Temperature Trend</p>
            <p className="text-muted-foreground">Pleasant weather continues with temperatures around 32°C.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};