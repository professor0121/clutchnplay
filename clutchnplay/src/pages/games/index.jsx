import React, { useState, useEffect } from 'react';
import { 
  Trophy, Users, Clock, DollarSign, Calendar, Star, 
  Play, Pause, Medal, Target, Zap, Shield, Sword, Gamepad2,
  ChevronRight, TrendingUp, Award, Crown, Flame, Eye,
  Map, Settings, UserPlus, Share2, Heart, Filter
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GamePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [followGame, setFollowGame] = useState(false);
  const [playerStats, setPlayerStats] = useState({
    rank: 'Diamond III',
    kd: 2.34,
    winRate: 67,
    totalKills: 2847
  });

  const game = {
    id: 1,
    name: "BATTLEGROUNDS MOBILE INDIA",
    shortName: "BGMI",
    developer: "Krafton",
    genre: "Battle Royale",
    platform: ["Android", "iOS"],
    releaseDate: "July 2021",
    rating: 4.2,
    downloads: "100M+",
    description: "The ultimate mobile battle royale experience with intense multiplayer action. Drop into the battlefield and fight to be the last one standing in this thrilling survival game.",
    features: [
      "100-player battle royale matches",
      "Multiple game modes and maps",
      "Realistic weapons and vehicles",
      "Team-based gameplay",
      "Ranked competitive system",
      "Regular updates and events"
    ],
    systemRequirements: {
      minAndroid: "Android 5.1.1",
      minRAM: "3GB RAM",
      storage: "2GB",
      processor: "Snapdragon 660"
    },
    maps: [
      { name: "Erangel", size: "8x8 km", theme: "Classic", players: 100 },
      { name: "Miramar", size: "8x8 km", theme: "Desert", players: 100 },
      { name: "Sanhok", size: "4x4 km", theme: "Tropical", players: 64 },
      { name: "Vikendi", size: "6x6 km", theme: "Snow", players: 64 }
    ]
  };

  const tournaments = [
    {
      id: 1,
      name: "BGMI Pro League 2025",
      status: "live",
      prizePool: "₹10,00,000",
      participants: 256,
      startDate: "June 20, 2025",
      featured: true
    },
    {
      id: 2,
      name: "Mobile Masters Cup",
      status: "upcoming",
      prizePool: "₹5,00,000",
      participants: 128,
      startDate: "June 25, 2025",
      featured: false
    },
    {
      id: 3,
      name: "BGMI Champions Cup",
      status: "registration",
      prizePool: "₹7,50,000",
      participants: 64,
      startDate: "July 1, 2025",
      featured: true
    },
    {
      id: 4,
      name: "Summer Showdown",
      status: "completed",
      prizePool: "₹3,00,000",
      participants: 100,
      startDate: "June 10, 2025",
      featured: false
    }
  ];

  const topPlayers = [
    { rank: 1, name: "MortaL", team: "Soul", kd: 3.2, winRate: 78, earnings: "₹15,00,000" },
    { rank: 2, name: "ScoutOP", team: "Orange Rock", kd: 2.9, winRate: 72, earnings: "₹12,50,000" },
    { rank: 3, name: "GodNixon", team: "Godlike", kd: 2.7, winRate: 69, earnings: "₹10,00,000" },
    { rank: 4, name: "Jonathan", team: "Soul", kd: 2.6, winRate: 71, earnings: "₹8,50,000" },
    { rank: 5, name: "ClutchGod", team: "TSM", kd: 2.5, winRate: 66, earnings: "₹7,00,000" }
  ];

  const gameStats = {
    totalPlayers: "2.5M+",
    activeTournaments: 15,
    totalPrizePool: "₹50,00,000",
    monthlyMatches: "1.2M+"
  };

  const news = [
    {
      id: 1,
      title: "BGMI 2.8 Update Brings New Weapons and Vehicle",
      date: "June 15, 2025",
      category: "Update",
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "Pro League Season 3 Registration Now Open",
      date: "June 14, 2025",
      category: "Tournament",
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "New Erangel 2.0 Map Features Revealed",
      date: "June 12, 2025",
      category: "Feature",
      image: "/api/placeholder/300/200"
    }
  ];

  const TabButton = ({ tab, label, isActive, onClick }) => (
    <button
      onClick={() => onClick(tab)}
      className={`px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg' 
          : 'text-gray-400 hover:text-white hover:bg-gray-800'
      }`}
    >
      {label}
    </button>
  );

  const TournamentCard = ({ tournament }) => (
    <div className={`bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
      tournament.featured 
        ? 'border-purple-500/50 bg-gradient-to-br from-purple-900/20 to-pink-900/20' 
        : 'border-gray-700 hover:border-purple-500/30'
    }`}>
      {tournament.featured && (
        <div className="flex items-center justify-between mb-3">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            FEATURED
          </span>
          <Flame className="text-orange-400" size={20} />
        </div>
      )}
      
      <h3 className="text-xl font-bold text-white mb-2">{tournament.name}</h3>
      
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          tournament.status === 'live' ? 'bg-red-600 text-white animate-pulse' :
          tournament.status === 'upcoming' ? 'bg-blue-600 text-white' :
          tournament.status === 'registration' ? 'bg-green-600 text-white' :
          'bg-gray-600 text-gray-300'
        }`}>
          {tournament.status.toUpperCase()}
        </span>
        <span className="text-yellow-400 font-bold">{tournament.prizePool}</span>
      </div>
      
      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
        <span className="flex items-center">
          <Users size={16} className="mr-1" />
          {tournament.participants} Players
        </span>
        <span className="flex items-center">
          <Calendar size={16} className="mr-1" />
          {tournament.startDate}
        </span>
      </div>
      
      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
        {tournament.status === 'registration' ? 'Register Now' : 'View Details'}
      </button>
    </div>
  );

  const PlayerCard = ({ player }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">#{player.rank}</span>
            </div>
            {player.rank <= 3 && (
              <Crown className="absolute -top-2 -right-2 text-yellow-400" size={16} />
            )}
          </div>
          <div>
            <h4 className="text-white font-bold">{player.name}</h4>
            <p className="text-gray-400 text-sm">{player.team}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-green-400 font-bold text-sm">{player.earnings}</div>
          <div className="text-gray-400 text-xs">Earnings</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="text-center">
          <div className="text-red-400 font-bold">{player.kd}</div>
          <div className="text-gray-400">K/D Ratio</div>
        </div>
        <div className="text-center">
          <div className="text-purple-400 font-bold">{player.winRate}%</div>
          <div className="text-gray-400">Win Rate</div>
        </div>
      </div>
    </div>
  );

  const MapCard = ({ map }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-white font-bold">{map.name}</h4>
        <Map className="text-purple-400" size={20} />
      </div>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-400">Size:</span>
          <span className="text-white">{map.size}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Theme:</span>
          <span className="text-white">{map.theme}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Players:</span>
          <span className="text-white">{map.players}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Hero Section */}
      <Header/>
      <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Game Icon/Logo */}
            <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
              <Target className="text-white" size={64} />
            </div>
            
            {/* Game Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                <h1 className="text-4xl lg:text-5xl font-bold text-white">{game.shortName}</h1>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < Math.floor(game.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}
                    />
                  ))}
                  <span className="text-gray-300 ml-2">({game.rating})</span>
                </div>
              </div>
              <p className="text-xl text-gray-300 mb-4">{game.name}</p>
              <p className="text-gray-400 max-w-2xl mb-6">{game.description}</p>
              
              <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
                <span className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300">
                  {game.genre}
                </span>
                <span className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300">
                  {game.downloads} Downloads
                </span>
                <span className="bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300">
                  {game.developer}
                </span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
              <button
                onClick={() => setFollowGame(!followGame)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
                  followGame
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                }`}
              >
                <Heart className={`mr-2 ${followGame ? 'fill-current' : ''}`} size={20} />
                {followGame ? 'Following' : 'Follow Game'}
              </button>
              
              <button className="px-6 py-3 bg-gray-800/50 backdrop-blur-sm text-white rounded-lg hover:bg-gray-700 transition-all duration-300 flex items-center">
                <Share2 className="mr-2" size={20} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Game Stats */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
            <Users className="mx-auto mb-2 text-purple-400" size={32} />
            <div className="text-2xl font-bold text-white">{gameStats.totalPlayers}</div>
            <div className="text-gray-400">Active Players</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
            <Trophy className="mx-auto mb-2 text-yellow-400" size={32} />
            <div className="text-2xl font-bold text-white">{gameStats.activeTournaments}</div>
            <div className="text-gray-400">Live Tournaments</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
            <DollarSign className="mx-auto mb-2 text-green-400" size={32} />
            <div className="text-2xl font-bold text-white">{gameStats.totalPrizePool}</div>
            <div className="text-gray-400">Prize Pool</div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 text-center">
            <Gamepad2 className="mx-auto mb-2 text-blue-400" size={32} />
            <div className="text-2xl font-bold text-white">{gameStats.monthlyMatches}</div>
            <div className="text-gray-400">Monthly Matches</div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <TabButton tab="overview" label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton tab="tournaments" label="Tournaments" isActive={activeTab === 'tournaments'} onClick={setActiveTab} />
          <TabButton tab="leaderboard" label="Top Players" isActive={activeTab === 'leaderboard'} onClick={setActiveTab} />
          <TabButton tab="maps" label="Maps & Modes" isActive={activeTab === 'maps'} onClick={setActiveTab} />
          <TabButton tab="news" label="News & Updates" isActive={activeTab === 'news'} onClick={setActiveTab} />
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Game Features */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">Game Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {game.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Zap className="text-purple-400 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Stats */}
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Award className="mr-2 text-purple-400" />
                  Your Game Stats
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{playerStats.rank}</div>
                    <div className="text-gray-400 text-sm">Current Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-400">{playerStats.kd}</div>
                    <div className="text-gray-400 text-sm">K/D Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{playerStats.winRate}%</div>
                    <div className="text-gray-400 text-sm">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{playerStats.totalKills}</div>
                    <div className="text-gray-400 text-sm">Total Kills</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* System Requirements */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Settings className="mr-2 text-gray-400" />
                  System Requirements
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">OS:</span>
                    <span className="text-white">{game.systemRequirements.minAndroid}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">RAM:</span>
                    <span className="text-white">{game.systemRequirements.minRAM}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Storage:</span>
                    <span className="text-white">{game.systemRequirements.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Processor:</span>
                    <span className="text-white">{game.systemRequirements.processor}</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 px-4 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="mr-2" size={16} />
                    Download Game
                  </button>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                    <UserPlus className="mr-2" size={16} />
                    Join Tournament
                  </button>
                  <button className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300 flex items-center justify-center">
                    <Eye className="mr-2" size={16} />
                    Watch Live
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tournaments' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">Active Tournaments</h2>
              <button className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors">
                <Filter size={16} />
                <span>Filter</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tournaments.map((tournament) => (
                <TournamentCard key={tournament.id} tournament={tournament} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Top Players</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topPlayers.map((player) => (
                <PlayerCard key={player.rank} player={player} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'maps' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Available Maps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {game.maps.map((map, index) => (
                <MapCard key={index} map={map} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Latest News & Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article) => (
                <div key={article.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <Gamepad2 className="text-white" size={64} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                        {article.category}
                      </span>
                      <span className="text-gray-400 text-sm">{article.date}</span>
                    </div>
                    <h3 className="text-white font-bold mb-2">{article.title}</h3>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors flex items-center">
                      Read More <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default GamePage;