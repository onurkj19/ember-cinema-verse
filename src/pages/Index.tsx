
import { useState, useEffect } from 'react';
import { Search, Play, Info, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentHero, setCurrentHero] = useState(0);

  // Featured content for hero rotation
  const heroContent = [
    {
      id: 1,
      title: "Shadow Realm",
      description: "A mysterious thriller about a detective who discovers a parallel dimension where shadows come alive. When reality begins to blur, she must navigate between worlds to save both.",
      rating: 8.9,
      year: 2024,
      genre: "Thriller • Mystery • Sci-Fi",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop"
    },
    {
      id: 2,
      title: "Neon Dreams",
      description: "In a cyberpunk future, a hacker discovers an AI consciousness trapped in the city's neon grid. Together, they fight against corporate control in this visually stunning series.",
      rating: 9.2,
      year: 2024,
      genre: "Sci-Fi • Drama • Action",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop"
    }
  ];

  // Sample content data
  const trendingMovies = [
    { id: 1, title: "Ocean's Edge", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop", rating: 8.7, year: 2024 },
    { id: 2, title: "Stellar Voyage", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop", rating: 9.1, year: 2024 },
    { id: 3, title: "Garden of Secrets", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=450&fit=crop", rating: 8.3, year: 2023 },
    { id: 4, title: "Urban Legends", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop", rating: 8.9, year: 2024 },
    { id: 5, title: "Mystic Forest", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=450&fit=crop", rating: 8.5, year: 2023 },
    { id: 6, title: "Digital Revolution", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop", rating: 9.0, year: 2024 }
  ];

  const popularSeries = [
    { id: 1, title: "Kingdom of Shadows", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop", rating: 9.3, seasons: 3 },
    { id: 2, title: "Tech Noir", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=450&fit=crop", rating: 8.8, seasons: 2 },
    { id: 3, title: "Wild Hearts", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=450&fit=crop", rating: 8.6, seasons: 4 },
    { id: 4, title: "Quantum Leap", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop", rating: 9.1, seasons: 2 },
    { id: 5, title: "City Lights", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop", rating: 8.4, seasons: 3 }
  ];

  const regionalContent = {
    kosovo: [
      { id: 1, title: "Prishtina Stories", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop", rating: 8.9 },
      { id: 2, title: "Mountain Tales", image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=450&fit=crop", rating: 8.5 },
      { id: 3, title: "Heritage", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=450&fit=crop", rating: 9.0 }
    ],
    albania: [
      { id: 1, title: "Tirana Nights", image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop", rating: 8.7 },
      { id: 2, title: "Coastal Dreams", image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop", rating: 8.8 },
      { id: 3, title: "Eagle's Flight", image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=450&fit=crop", rating: 9.2 }
    ]
  };

  // Auto-rotate hero content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroContent.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const ContentRow = ({ title, items, type = 'movie' }: { title: string; items: any[]; type?: 'movie' | 'series' }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 px-4 md:px-8">{title}</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4 px-4 md:px-8 scrollbar-hide">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 group cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-48 h-72 rounded-lg overflow-hidden bg-gray-800">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <div className="flex items-center space-x-2 text-xs text-gray-300">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{item.rating}</span>
                  {type === 'series' && <span>• {item.seasons} seasons</span>}
                  {type === 'movie' && <span>• {item.year}</span>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between px-4 md:px-8 py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <h1 className="text-2xl font-bold text-white">CineVault</h1>
            </div>
            <nav className="hidden md:flex space-x-6 text-gray-300">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">Movies</a>
              <a href="#" className="hover:text-white transition-colors">Series</a>
              <a href="#" className="hover:text-white transition-colors">Regional</a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search movies, series..."
                className="bg-gray-800/50 text-white pl-10 pr-4 py-2 rounded-full border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors w-64 hidden md:block"
              />
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${heroContent[currentHero].image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="relative z-10 px-4 md:px-8 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {heroContent[currentHero].title}
          </h1>
          <p className="text-lg text-gray-200 mb-4 leading-relaxed">
            {heroContent[currentHero].description}
          </p>
          <div className="flex items-center space-x-4 mb-8 text-gray-300">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{heroContent[currentHero].rating}</span>
            </div>
            <span>•</span>
            <span>{heroContent[currentHero].year}</span>
            <span>•</span>
            <span className="text-sm">{heroContent[currentHero].genre}</span>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold flex items-center space-x-2">
              <Play className="w-5 h-5 fill-current" />
              <span>Play</span>
            </Button>
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg font-semibold flex items-center space-x-2">
              <Info className="w-5 h-5" />
              <span>More Info</span>
            </Button>
          </div>
        </div>

        {/* Hero Navigation Dots */}
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {heroContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHero(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHero ? 'bg-yellow-400' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="pb-20">
        <ContentRow title="Trending Now" items={trendingMovies} type="movie" />
        <ContentRow title="Popular Series" items={popularSeries} type="series" />
        <ContentRow title="Kosovo Originals" items={regionalContent.kosovo} type="movie" />
        <ContentRow title="Albanian Cinema" items={regionalContent.albania} type="movie" />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 px-4 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <h2 className="text-2xl font-bold text-white">CineVault</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-400">
            <div>
              <h3 className="text-white font-semibold mb-4">Browse</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Movies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Series</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentaries</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Regional</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Kosovo</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Albania</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Balkans</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Account</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">My List</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Settings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sign Out</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 CineVault. All rights reserved. Your premium streaming destination.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
