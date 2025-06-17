import React, { useState, useEffect } from 'react';
import { Search, Trophy, Users, Calendar, ArrowRight, Star, Play, Shield, Zap, Target, Crown, ChevronRight, Bell, Gamepad2 } from 'lucide-react';

const EsportsHomepage = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [stats, setStats] = useState({
    tournaments: 0,
    players: 0,
    prizes: 0
  });

  const games = [
    { 
      name: 'Free Fire', 
      icon: '🔥', 
      color: 'from-orange-500 to-red-600',
      players: '15M+',
      tournaments: '2.5K+'
    },
    { 
      name: 'BGMI', 
      icon: '🎯', 
      color: 'from-blue-500 to-purple-600',
      players: '12M+',
      tournaments: '1.8K+'
    },
    { 
      name: 'COD Mobile', 
      icon: '⚔️', 
      color: 'from-green-500 to-blue-600',
      players: '8M+',
      tournaments: '1.2K+'
    },
    { 
      name: 'Valorant', 
      icon: '💥', 
      color: 'from-pink-500 to-violet-600',
      players: '6M+',
      tournaments: '900+'
    }
  ];

  const upcomingTournaments = [
    {
      id: 1,
      title: 'Free Fire Championship 2024',
      game: 'Free Fire',
      icon: '🔥',
      prize: '$50,000',
      participants: '256/512',
      startDate: 'Dec 25, 2024',
      entryFee: '$25',
      type: 'Squad',
      status: 'Filling Fast'
    },
    {
      id: 2,
      title: 'BGMI Winter Cup',
      game: 'BGMI',
      icon: '🎯',
      prize: '$35,000',
      participants: '128/256',
      startDate: 'Dec 28, 2024',
      entryFee: '$20',
      type: 'Squad',
      status: 'Open'
    },
    {
      id: 3,
      title: 'COD Mobile Masters',
      game: 'COD Mobile',
      icon: '⚔️',
      prize: '$25,000',
      participants: '64/128',
      startDate: 'Jan 02, 2025',
      entryFee: '$15',
      type: 'Solo',
      status: 'Open'
    }
  ];

  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Epic Tournaments',
      description: 'Join massive tournaments with huge prize pools and compete against the best players worldwide.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Management',
      description: 'Create and manage your gaming squads, invite friends, and dominate together.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure Payments',
      description: 'Safe and secure payment processing with instant prize distribution to winners.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Real-time Updates',
      description: 'Live tournament brackets, match results, and instant notifications for all events.'
    }
  ];

  const testimonials = [
    {
      name: 'ProGamer_2024',
      game: 'Free Fire',
      comment: 'Won my first tournament here! Amazing platform with fair matchmaking.',
      rating: 5,
      prize: '$2,500'
    },
    {
      name: 'BGMI_King',
      game: 'BGMI',
      comment: 'Best tournament platform for mobile gaming. Smooth experience every time.',
      rating: 5,
      prize: '$1,800'
    },
    {
      name: 'ValoriantAce',
      game: 'Valorant',
      comment: 'Professional setup and great community. Highly recommended for serious gamers.',
      rating: 5,
      prize: '$3,200'
    }
  ];

  // Animated counter effect
  useEffect(() => {
    const animateStats = () => {
      const targets = { tournaments: 5847, players: 125000, prizes: 2850000 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let current = { tournaments: 0, players: 0, prizes: 0 };
      
      const timer = setInterval(() => {
        current.tournaments += targets.tournaments / steps;
        current.players += targets.players / steps;
        current.prizes += targets.prizes / steps;

        if (current.tournaments >= targets.tournaments) {
          current = targets;
          clearInterval(timer);
        }

        setStats({
          tournaments: Math.floor(current.tournaments),
          players: Math.floor(current.players),
          prizes: Math.floor(current.prizes)
        });
      }, interval);
    };

    animateStats();
  }, []);

  // Auto-rotate featured games
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveGame((prev) => (prev + 1) % games.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">GameArena</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#tournaments" className="text-gray-300 hover:text-white transition-colors">Tournaments</a>
              <a href="#games" className="text-gray-300 hover:text-white transition-colors">Games</a>
              <a href="#leaderboard" className="text-gray-300 hover:text-white transition-colors">Leaderboard</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white p-2">
                <Bell className="w-5 h-5" />
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              DOMINATE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
                THE ARENA
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Join the ultimate eSports platform. Compete in epic tournaments, win massive prizes, and become a gaming legend.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                Start Gaming <ArrowRight className="inline w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                <Play className="inline w-5 h-5 mr-2" /> Watch Trailer
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-black text-cyan-400 mb-2">
                {stats.tournaments.toLocaleString()}+
              </div>
              <div className="text-gray-300 font-semibold">Active Tournaments</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-black text-purple-400 mb-2">
                {stats.players.toLocaleString()}+
              </div>
              <div className="text-gray-300 font-semibold">Registered Players</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="text-4xl font-black text-pink-400 mb-2">
                ${stats.prizes.toLocaleString()}+
              </div>
              <div className="text-gray-300 font-semibold">Prizes Awarded</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Featured <span className="text-purple-400">Games</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  index === activeGame ? 'ring-4 ring-purple-500' : ''
                }`}
                style={{
                  background: `linear-gradient(135deg, ${game.color.split(' ')[1]} 0%, ${game.color.split(' ')[3]} 100%)`
                }}
                onClick={() => setActiveGame(index)}
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10">
                  <div className="text-6xl mb-4 text-center">{game.icon}</div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">{game.name}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-white/90">
                      <span>Players:</span>
                      <span className="font-bold">{game.players}</span>
                    </div>
                    <div className="flex justify-between text-white/90">
                      <span>Tournaments:</span>
                      <span className="font-bold">{game.tournaments}</span>
                    </div>
                  </div>
                  <button className="w-full mt-6 bg-white/20 backdrop-blur-sm text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">
                    Join Tournament
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Upcoming <span className="text-cyan-400">Tournaments</span>
            </h2>
            <p className="text-xl text-gray-300">Don't miss out on these epic competitions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTournaments.map((tournament) => (
              <div key={tournament.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl">{tournament.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tournament.status === 'Filling Fast' 
                      ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                      : 'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {tournament.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {tournament.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Prize Pool:</span>
                    <span className="font-bold text-green-400">{tournament.prize}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Entry Fee:</span>
                    <span className="font-bold">{tournament.entryFee}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Participants:</span>
                    <span className="font-bold">{tournament.participants}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Start Date:</span>
                    <span className="font-bold">{tournament.startDate}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Type:</span>
                    <span className="font-bold text-purple-400">{tournament.type}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-xl font-bold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform group-hover:scale-105">
                  Join Tournament <ChevronRight className="inline w-5 h-5 ml-1" />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
              View All Tournaments <ArrowRight className="inline w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Why Choose <span className="text-purple-400">GameArena</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 mb-6 hover:from-purple-600/30 hover:to-cyan-600/30 transition-all duration-300 border border-white/10">
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Player <span className="text-cyan-400">Stories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name[0]}
                  </div>
                  <div className="ml-4">
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.game} Player</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 mb-4">"{testimonial.comment}"</p>

                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-3">
                  <div className="text-green-400 font-bold">Won: {testimonial.prize}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <Crown className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Become a <span className="text-yellow-400">Champion?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Join thousands of gamers competing for glory and incredible prizes. Your gaming journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Create Account
            </button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
              Browse Tournaments
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-2 rounded-lg">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">GameArena</span>
              </div>
              <p className="text-gray-400">The ultimate eSports tournament platform for competitive gaming.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Games</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Free Fire</a></li>
                <li><a href="#" className="hover:text-white transition-colors">BGMI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">COD Mobile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Valorant</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Leaderboards</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameArena. All rights reserved. Made for gamers, by gamers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EsportsHomepage;