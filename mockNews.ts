export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  publishedAt: string;
  imageUrl: string;
  readTime: string;
  views: number;
}

import politicsImg from "@/assets/politics-news.jpg";
import sportsImg from "@/assets/sports-news.jpg";
import technologyImg from "@/assets/technology-news.jpg";
import entertainmentImg from "@/assets/entertainment-news.jpg";
import healthImg from "@/assets/health-news.jpg";
import businessImg from "@/assets/business-news.jpg";

export const mockArticles: Article[] = [
  // Politics
  {
    id: "1",
    title: "Tamil Nadu Government Announces New Infrastructure Development Projects",
    summary: "The state government has unveiled plans for major infrastructure development across Tamil Nadu, focusing on rural connectivity and urban development in key cities including Trichy.",
    category: "Politics",
    author: "Rajesh Kumar",
    publishedAt: "2 hours ago",
    imageUrl: politicsImg,
    readTime: "3 min read",
    views: 12450,
  },
  {
    id: "2",
    title: "Local Elections: Trichy District Sees Record Voter Turnout",
    summary: "Citizens of Trichy district showed remarkable civic participation in the recent local body elections, with turnout exceeding 85% across all constituencies.",
    category: "Politics",
    author: "Priya Sharma",
    publishedAt: "4 hours ago",
    imageUrl: politicsImg,
    readTime: "2 min read",
    views: 8230,
  },
  {
    id: "3",
    title: "New Education Policies to Benefit Rural Tamil Nadu Schools",
    summary: "State education department introduces comprehensive reforms aimed at improving quality of education in rural areas, with special focus on digital literacy.",
    category: "Politics",
    author: "Dr. Meera Krishnan",
    publishedAt: "6 hours ago",
    imageUrl: politicsImg,
    readTime: "4 min read",
    views: 15670,
  },

  // Sports
  {
    id: "4",
    title: "Trichy Cricket Academy Produces Another State-Level Champion",
    summary: "Young cricketer from Trichy Cricket Academy has been selected for the Tamil Nadu state team, marking the academy's continued success in nurturing talent.",
    category: "Sports",
    author: "Suresh Raman",
    publishedAt: "1 hour ago",
    imageUrl: sportsImg,
    readTime: "3 min read",
    views: 9840,
  },
  {
    id: "5",
    title: "International Badminton Tournament Coming to Tamil Nadu",
    summary: "Chennai will host the prestigious South Asian Badminton Championship next month, featuring players from across the region competing for top honors.",
    category: "Sports",
    author: "Arun Prasad",
    publishedAt: "3 hours ago",
    imageUrl: sportsImg,
    readTime: "2 min read",
    views: 7650,
  },
  {
    id: "6",
    title: "Local Football Club Wins Regional Championship",
    summary: "Trichy United FC defeated Chennai Warriors 3-1 in the final to claim their first regional championship title, celebrating with fans across the city.",
    category: "Sports",
    author: "Karthik Venkat",
    publishedAt: "5 hours ago",
    imageUrl: sportsImg,
    readTime: "3 min read",
    views: 11230,
  },

  // Technology
  {
    id: "7",
    title: "Tech Startup from Trichy Wins National Innovation Award",
    summary: "A promising startup founded by engineering graduates from Trichy has won the prestigious National Innovation Award for their breakthrough in renewable energy technology.",
    category: "Technology",
    author: "Dr. Anitha Rajesh",
    publishedAt: "30 minutes ago",
    imageUrl: technologyImg,
    readTime: "4 min read",
    views: 18920,
  },
  {
    id: "8",
    title: "AI Research Lab Opens in Chennai with Focus on Tamil Language",
    summary: "New artificial intelligence research facility aims to develop AI solutions specifically for Tamil language processing and regional applications.",
    category: "Technology",
    author: "Vikram Singh",
    publishedAt: "2 hours ago",
    imageUrl: technologyImg,
    readTime: "5 min read",
    views: 22340,
  },
  {
    id: "9",
    title: "Digital Banking Revolution Reaches Rural Tamil Nadu",
    summary: "Major banks are introducing advanced digital banking services in rural areas of Tamil Nadu, making financial services more accessible to farming communities.",
    category: "Technology",
    author: "Swathi Nair",
    publishedAt: "7 hours ago",
    imageUrl: technologyImg,
    readTime: "3 min read",
    views: 13450,
  },

  // Entertainment
  {
    id: "10",
    title: "Tamil Cinema Celebrates 100 Years with Grand Festival in Chennai",
    summary: "The centenary celebrations of Tamil cinema kick off with a month-long festival featuring classic films, award ceremonies, and tributes to legendary actors.",
    category: "Entertainment",
    author: "Deepika Iyer",
    publishedAt: "1 hour ago",
    imageUrl: entertainmentImg,
    readTime: "4 min read",
    views: 16780,
  },
  {
    id: "11",
    title: "Music Festival in Trichy Showcases Local Talent",
    summary: "Annual Trichy Music Festival brings together classical and contemporary artists, providing a platform for emerging musicians from across Tamil Nadu.",
    category: "Entertainment",
    author: "Ravi Chandran",
    publishedAt: "4 hours ago",
    imageUrl: entertainmentImg,
    readTime: "3 min read",
    views: 8910,
  },
  {
    id: "12",
    title: "Renowned Dance Academy Opens New Branch in Coimbatore",
    summary: "Prestigious Bharatanatyam dance academy expands its presence in Tamil Nadu with a new training center focusing on traditional and contemporary dance forms.",
    category: "Entertainment",
    author: "Lakshmi Raghavan",
    publishedAt: "8 hours ago",
    imageUrl: entertainmentImg,
    readTime: "2 min read",
    views: 6430,
  },

  // Health
  {
    id: "13",
    title: "New Cancer Treatment Center Opens in Trichy Government Hospital",
    summary: "State-of-the-art oncology facility begins operations with advanced treatment options and specialized care teams to serve patients across central Tamil Nadu.",
    category: "Health",
    author: "Dr. Kavitha Murugan",
    publishedAt: "45 minutes ago",
    imageUrl: healthImg,
    readTime: "4 min read",
    views: 19230,
  },
  {
    id: "14",
    title: "Breakthrough Research on Diabetes Prevention by Chennai Medical College",
    summary: "Researchers at Chennai Medical College publish findings on preventive measures for Type 2 diabetes, with particular focus on dietary interventions for South Indians.",
    category: "Health",
    author: "Dr. Sunil Kumar",
    publishedAt: "3 hours ago",
    imageUrl: healthImg,
    readTime: "5 min read",
    views: 14560,
  },
  {
    id: "15",
    title: "Mental Health Awareness Campaign Reaches Rural Tamil Nadu",
    summary: "Comprehensive mental health initiative targets rural communities with mobile counseling units and awareness programs to address stigma and provide support.",
    category: "Health",
    author: "Dr. Pradeep Nathan",
    publishedAt: "6 hours ago",
    imageUrl: healthImg,
    readTime: "3 min read",
    views: 11890,
  },

  // Business
  {
    id: "16",
    title: "Major Manufacturing Hub Announced for Trichy Industrial Zone",
    summary: "International automobile manufacturer selects Trichy for new production facility, expected to create thousands of jobs and boost local economy significantly.",
    category: "Business",
    author: "Arjun Reddy",
    publishedAt: "2 hours ago",
    imageUrl: businessImg,
    readTime: "4 min read",
    views: 21340,
  },
  {
    id: "17",
    title: "Tamil Nadu Emerges as Leading Textile Export Destination",
    summary: "State textile industry reports record export numbers, with innovative sustainable practices and quality improvements driving international demand.",
    category: "Business",
    author: "Sneha Patel",
    publishedAt: "5 hours ago",
    imageUrl: businessImg,
    readTime: "3 min read",
    views: 17620,
  },
  {
    id: "18",
    title: "Local Entrepreneurs Launch Sustainable Agriculture Initiative",
    summary: "Group of young entrepreneurs from rural Tamil Nadu introduce innovative farming techniques and direct-to-consumer marketplace for organic produce.",
    category: "Business",
    author: "Ramesh Krishnan",
    publishedAt: "9 hours ago",
    imageUrl: businessImg,
    readTime: "4 min read",
    views: 9870,
  },
];