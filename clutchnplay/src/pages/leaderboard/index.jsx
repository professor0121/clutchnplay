import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, TrendingUp, TrendingDown, Minus, Filter, Search, Calendar, GamepadIcon, Crown, Star, Zap, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const LeaderboardPage = () => {
    const [selectedGame, setSelectedGame] = useState('all');
    const [timeFilter, setTimeFilter] = useState('all-time');
    const [searchTerm, setSearchTerm] = useState('');
    const [animatedStats, setAnimatedStats] = useState({});

    // Mock leaderboard data
    const leaderboardData = [
        {
            rank: 1,
            player: "ShadowStrike",
            game: "Free Fire",
            totalWinnings: 125000,
            tournaments: 45,
            winRate: 78,
            kd: 2.8,
            avatar: "🔥",
            change: 0,
            badges: ["champion", "streak"],
            country: "🇮🇳"
        },
        {
            rank: 2,
            player: "PhoenixRider",
            game: "BGMI",
            totalWinnings: 98500,
            tournaments: 38,
            winRate: 74,
            kd: 2.6,
            avatar: "⚡",
            change: 1,
            badges: ["pro", "clutch"],
            country: "🇮🇳"
        },
        {
            rank: 3,
            player: "VortexKing",
            game: "COD Mobile",
            totalWinnings: 87200,
            tournaments: 42,
            winRate: 71,
            kd: 2.4,
            avatar: "👑",
            change: -1,
            badges: ["veteran"],
            country: "🇮🇳"
        },
        {
            rank: 4,
            player: "NeonBlast",
            game: "Valorant",
            totalWinnings: 76800,
            tournaments: 35,
            winRate: 69,
            kd: 2.2,
            avatar: "💎",
            change: 2,
            badges: ["rising"],
            country: "🇮🇳"
        },
        {
            rank: 5,
            player: "CyberNinja",
            game: "Free Fire",
            totalWinnings: 65400,
            tournaments: 41,
            winRate: 67,
            kd: 2.1,
            avatar: "🥷",
            change: -1,
            badges: ["consistent"],
            country: "🇮🇳"
        },
        {
            rank: 6,
            player: "ThunderBolt",
            game: "BGMI",
            totalWinnings: 58900,
            tournaments: 33,
            winRate: 65,
            kd: 2.0,
            avatar: "⚡",
            change: 0,
            badges: ["pro"],
            country: "🇮🇳"
        },
        {
            rank: 7,
            player: "IceBreaker",
            game: "COD Mobile",
            totalWinnings: 52300,
            tournaments: 29,
            winRate: 63,
            kd: 1.9,
            avatar: "❄️",
            change: 3,
            badges: ["clutch"],
            country: "🇮🇳"
        },
        {
            rank: 8,
            player: "StormRider",
            game: "Valorant",
            totalWinnings: 47600,
            tournaments: 27,
            winRate: 61,
            kd: 1.8,
            avatar: "🌪️",
            change: -2,
            badges: ["tactical"],
            country: "🇮🇳"
        }
    ];

    const games = [
        { id: 'all', name: 'All Games', icon: GamepadIcon, color: 'from-purple-500 to-pink-500' },
        { id: 'free-fire', name: 'Free Fire', icon: Zap, color: 'from-orange-500 to-red-500' },
        { id: 'bgmi', name: 'BGMI', icon: Target, color: 'from-blue-500 to-cyan-500' },
        { id: 'cod-mobile', name: 'COD Mobile', icon: Award, color: 'from-green-500 to-emerald-500' },
        { id: 'valorant', name: 'Valorant', icon: Star, color: 'from-red-500 to-pink-500' }
    ];

    const timeFilters = [
        { id: 'all-time', name: 'All Time' },
        { id: 'monthly', name: 'This Month' },
        { id: 'weekly', name: 'This Week' },
        { id: 'daily', name: 'Today' }
    ];

    const badgeConfig = {
        champion: { icon: Crown, color: 'text-yellow-400', bg: 'bg-yellow-400/20' },
        pro: { icon: Star, color: 'text-purple-400', bg: 'bg-purple-400/20' },
        veteran: { icon: Medal, color: 'text-orange-400', bg: 'bg-orange-400/20' },
        rising: { icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-400/20' },
        clutch: { icon: Zap, color: 'text-cyan-400', bg: 'bg-cyan-400/20' },
        streak: { icon: Trophy, color: 'text-red-400', bg: 'bg-red-400/20' },
        consistent: { icon: Target, color: 'text-blue-400', bg: 'bg-blue-400/20' },
        tactical: { icon: Award, color: 'text-indigo-400', bg: 'bg-indigo-400/20' }
    };

    // Animate counter numbers
    useEffect(() => {
        const animateValue = (start, end, duration, key) => {
            const startTime = Date.now();
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const current = Math.floor(start + (end - start) * progress);

                setAnimatedStats(prev => ({ ...prev, [key]: current }));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        };

        // Animate stats
        animateValue(0, 2547, 2000, 'totalPlayers');
        animateValue(0, 186, 1800, 'activeTournaments');
        animateValue(0, 12500000, 2500, 'totalPrizes');
    }, []);

    const getRankIcon = (rank) => {
        switch (rank) {
            case 1: return <Crown className="w-6 h-6 text-yellow-400" />;
            case 2: return <Medal className="w-6 h-6 text-gray-300" />;
            case 3: return <Award className="w-6 h-6 text-orange-400" />;
            default: return <span className="text-xl font-bold text-gray-400">#{rank}</span>;
        }
    };

    const getChangeIcon = (change) => {
        if (change > 0) return <TrendingUp className="w-4 h-4 text-green-400" />;
        if (change < 0) return <TrendingDown className="w-4 h-4 text-red-400" />;
        return <Minus className="w-4 h-4 text-gray-400" />;
    };

    const filteredData = leaderboardData.filter(player => {
        const matchesSearch = player.player.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesGame = selectedGame === 'all' || player.game.toLowerCase().includes(selectedGame.replace('-', ' '));
        return matchesSearch && matchesGame;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
            <Header />
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="bg-black/20 backdrop-blur-md border-b border-purple-500/20">
                    <div className="max-w-7xl mx-auto px-6 py-8">
                        <div className="text-center mb-8">
                            <h1 className="text-5xl font-bold text-white mb-4">
                                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                    LEADERBOARD
                                </span>
                            </h1>
                            <p className="text-gray-300 text-lg">Top players dominating the arena</p>
                        </div>

                        {/* Stats Overview */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">Total Players</p>
                                        <p className="text-3xl font-bold text-white">{animatedStats.totalPlayers?.toLocaleString() || '0'}</p>
                                    </div>
                                    <div className="p-3 bg-purple-500/20 rounded-full">
                                        <GamepadIcon className="w-8 h-8 text-purple-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">Active Tournaments</p>
                                        <p className="text-3xl font-bold text-white">{animatedStats.activeTournaments || '0'}</p>
                                    </div>
                                    <div className="p-3 bg-cyan-500/20 rounded-full">
                                        <Trophy className="w-8 h-8 text-cyan-400" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-6 border border-green-500/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-400 text-sm">Total Prizes</p>
                                        <p className="text-3xl font-bold text-white">₹{(animatedStats.totalPrizes || 0).toLocaleString()}</p>
                                    </div>
                                    <div className="p-3 bg-green-500/20 rounded-full">
                                        <Award className="w-8 h-8 text-green-400" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
                            {/* Search */}
                            <div className="relative flex-1 max-w-md">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search players..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-black/30 backdrop-blur-md border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all"
                                />
                            </div>

                            {/* Game Filter */}
                            <div className="flex gap-2 overflow-x-auto">
                                {games.map((game) => {
                                    const IconComponent = game.icon;
                                    return (
                                        <button
                                            key={game.id}
                                            onClick={() => setSelectedGame(game.id)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all whitespace-nowrap ${selectedGame === game.id
                                                    ? `bg-gradient-to-r ${game.color} text-white shadow-lg`
                                                    : 'bg-black/30 text-gray-300 hover:bg-black/50'
                                                }`}
                                        >
                                            <IconComponent className="w-4 h-4" />
                                            <span className="text-sm font-medium">{game.name}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Time Filter */}
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-gray-400" />
                                <select
                                    value={timeFilter}
                                    onChange={(e) => setTimeFilter(e.target.value)}
                                    className="bg-black/30 backdrop-blur-md border border-gray-600 rounded-xl px-4 py-2 text-white focus:border-purple-500 focus:outline-none"
                                >
                                    {timeFilters.map((filter) => (
                                        <option key={filter.id} value={filter.id} className="bg-gray-800">
                                            {filter.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leaderboard */}
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="space-y-4">
                        {filteredData.map((player, index) => (
                            <div
                                key={player.rank}
                                className={`group bg-black/30 backdrop-blur-md rounded-2xl p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${player.rank <= 3
                                        ? 'border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 to-transparent'
                                        : 'border-gray-600/40 hover:border-purple-500/40'
                                    }`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animation: 'fadeInUp 0.6s ease-out forwards'
                                }}
                            >
                                <div className="flex items-center justify-between">
                                    {/* Rank & Player Info */}
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-3">
                                            {getRankIcon(player.rank)}
                                            <div className="flex items-center gap-2">
                                                {getChangeIcon(player.change)}
                                                {player.change !== 0 && (
                                                    <span className={`text-sm ${player.change > 0 ? 'text-green-400' : 'text-red-400'
                                                        }`}>
                                                        {Math.abs(player.change)}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-2xl">
                                                {player.avatar}
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-3 mb-1">
                                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                                        {player.player}
                                                    </h3>
                                                    <span className="text-lg">{player.country}</span>
                                                    <div className="flex gap-1">
                                                        {player.badges.map((badge) => {
                                                            const BadgeIcon = badgeConfig[badge].icon;
                                                            return (
                                                                <div
                                                                    key={badge}
                                                                    className={`p-1 rounded-full ${badgeConfig[badge].bg}`}
                                                                    title={badge}
                                                                >
                                                                    <BadgeIcon className={`w-4 h-4 ${badgeConfig[badge].color}`} />
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <p className="text-gray-400 capitalize">{player.game} Specialist</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Stats */}
                                    <div className="hidden md:flex items-center gap-8">
                                        <div className="text-center">
                                            <p className="text-2xl font-bold text-green-400">₹{player.totalWinnings.toLocaleString()}</p>
                                            <p className="text-gray-400 text-sm">Total Winnings</p>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-xl font-bold text-white">{player.tournaments}</p>
                                            <p className="text-gray-400 text-sm">Tournaments</p>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-xl font-bold text-purple-400">{player.winRate}%</p>
                                            <p className="text-gray-400 text-sm">Win Rate</p>
                                        </div>

                                        <div className="text-center">
                                            <p className="text-xl font-bold text-cyan-400">{player.kd}</p>
                                            <p className="text-gray-400 text-sm">K/D Ratio</p>
                                        </div>
                                    </div>

                                    {/* Mobile Stats */}
                                    <div className="md:hidden">
                                        <p className="text-lg font-bold text-green-400">₹{player.totalWinnings.toLocaleString()}</p>
                                        <p className="text-sm text-gray-400">{player.winRate}% WR • {player.kd} K/D</p>
                                    </div>
                                </div>

                                {/* Mobile Expanded Stats */}
                                <div className="md:hidden mt-4 pt-4 border-t border-gray-600/20">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-white font-semibold">{player.tournaments}</p>
                                            <p className="text-gray-400 text-sm">Tournaments</p>
                                        </div>
                                        <div>
                                            <p className="text-purple-400 font-semibold">{player.winRate}%</p>
                                            <p className="text-gray-400 text-sm">Win Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredData.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🎮</div>
                            <h3 className="text-2xl font-bold text-white mb-2">No players found</h3>
                            <p className="text-gray-400">Try adjusting your search or filters</p>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
            <Footer />
        </div>
    );
};

export default LeaderboardPage;