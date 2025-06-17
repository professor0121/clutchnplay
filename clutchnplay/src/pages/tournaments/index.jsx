import React, { useState, useEffect } from 'react';
import { 
  Trophy, Users, Clock, DollarSign, Calendar, MapPin, 
  Play, Pause, Medal, Target, Zap, Shield, Sword,
  ChevronDown, ChevronUp, Star, User, Crown, Flame
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TournamentPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });
  const [expandedMatch, setExpandedMatch] = useState(null);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const tournament = {
    id: 1,
    name: "BGMI Champions Cup 2025",
    game: "BGMI",
    status: "live",
    prizePool: "₹5,00,000",
    entryFee: "₹500",
    participants: 128,
    maxParticipants: 128,
    format: "Battle Royale",
    mode: "Squad (4 players)",
    platform: "Mobile",
    region: "India",
    organizer: "GameStorm eSports",
    startDate: "June 20, 2025",
    endDate: "June 22, 2025",
    description: "The biggest BGMI tournament of the year featuring top teams from across India competing for the ultimate prize pool.",
    rules: [
      "Squad format with 4 players per team",
      "No emulator usage allowed",
      "Fair play policy strictly enforced", 
      "Device restrictions apply",
      "Age limit: 16+ years"
    ],
    schedule: [
      { round: "Qualifiers", date: "June 20", time: "10:00 AM", status: "completed" },
      { round: "Round of 32", date: "June 20", time: "2:00 PM", status: "completed" },
      { round: "Round of 16", date: "June 21", time: "10:00 AM", status: "live" },
      { round: "Quarter Finals", date: "June 21", time: "2:00 PM", status: "upcoming" },
      { round: "Semi Finals", date: "June 22", time: "10:00 AM", status: "upcoming" },
      { round: "Grand Final", date: "June 22", time: "2:00 PM", status: "upcoming" }
    ]
  };

  const brackets = [
    {
      round: "Round of 16",
      matches: [
        { id: 1, team1: "Blazing Phoenix", team2: "Thunder Wolves", score1: 15, score2: 12, status: "completed", winner: 1 },
        { id: 2, team1: "Cyber Titans", team2: "Storm Raiders", score1: 8, score2: 16, status: "completed", winner: 2 },
        { id: 3, team1: "Neon Guardians", team2: "Shadow Hunters", score1: null, score2: null, status: "live", winner: null },
        { id: 4, team1: "Fire Dragons", team2: "Ice Wolves", score1: null, score2: null, status: "upcoming", winner: null }
      ]
    }
  ];

  const leaderboard = [
    { rank: 1, team: "Blazing Phoenix", kills: 45, points: 892, prize: "₹2,00,000" },
    { rank: 2, team: "Storm Raiders", kills: 38, points: 856, prize: "₹1,50,000" },
    { rank: 3, team: "Thunder Wolves", kills: 42, points: 834, prize: "₹1,00,000" },
    { rank: 4, team: "Cyber Titans", kills: 35, points: 798, prize: "₹50,000" },
    { rank: 5, team: "Neon Guardians", kills: 31, points: 756, prize: "₹25,000" }
  ];

  const participants = [
    { id: 1, name: "ProGamer_91", team: "Blazing Phoenix", rank: "Conqueror", kills: 1247 },
    { id: 2, name: "ShadowStrike", team: "Storm Raiders", rank: "Ace", kills: 1156 },
    { id: 3, name: "ThunderBolt", team: "Thunder Wolves", rank: "Crown", kills: 1089 },
    { id: 4, name: "CyberNinja", team: "Cyber Titans", rank: "Diamond", kills: 967 }
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

  const CountdownBox = ({ value, label }) => (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-4 text-center border border-gray-700">
      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );

  const MatchCard = ({ match, isExpanded, onToggle }) => (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 p-4 hover:border-purple-500/50 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 flex-1">
          <div className="text-center flex-1">
            <div className="font-semibold text-white">{match.team1}</div>
            <div className="text-2xl font-bold text-purple-400 mt-1">
              {match.score1 !== null ? match.score1 : '-'}
            </div>
          </div>
          
          <div className="text-center px-4">
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
              match.status === 'live' ? 'bg-red-600 text-white animate-pulse' :
              match.status === 'completed' ? 'bg-green-600 text-white' :
              'bg-gray-600 text-gray-300'
            }`}>
              {match.status.toUpperCase()}
            </div>
            <div className="text-gray-400 text-sm mt-1">VS</div>
          </div>
          
          <div className="text-center flex-1">
            <div className="font-semibold text-white">{match.team2}</div>
            <div className="text-2xl font-bold text-pink-400 mt-1">
              {match.score2 !== null ? match.score2 : '-'}
            </div>
          </div>
        </div>
        
        <button
          onClick={() => onToggle(match.id)}
          className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-400">Map: Erangel</div>
              <div className="text-gray-400">Duration: 25:34</div>
            </div>
            <div>
              <div className="text-gray-400">Spectators: 15,432</div>
              <div className="text-gray-400">MVP: ProGamer_91</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Header */}
      <Header/>
      <div className="bg-black/30 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Target className="text-white" size={32} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{tournament.name}</h1>
                <div className="flex items-center space-x-4 mt-2">
                  <span className="flex items-center text-gray-400">
                    <Trophy size={16} className="mr-1" />
                    {tournament.prizePool}
                  </span>
                  <span className="flex items-center text-gray-400">
                    <Users size={16} className="mr-1" />
                    {tournament.participants}/{tournament.maxParticipants}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    tournament.status === 'live' ? 'bg-red-600 text-white animate-pulse' :
                    tournament.status === 'upcoming' ? 'bg-yellow-600 text-white' :
                    'bg-green-600 text-white'
                  }`}>
                    {tournament.status.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
              <div className="text-center mb-2">
                <div className="text-sm text-gray-400 mb-1">Next Round Starts In</div>
                <div className="grid grid-cols-4 gap-2">
                  <CountdownBox value={timeLeft.days} label="Days" />
                  <CountdownBox value={timeLeft.hours} label="Hours" />
                  <CountdownBox value={timeLeft.minutes} label="Mins" />
                  <CountdownBox value={timeLeft.seconds} label="Secs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 mb-8">
          <TabButton tab="overview" label="Overview" isActive={activeTab === 'overview'} onClick={setActiveTab} />
          <TabButton tab="brackets" label="Brackets" isActive={activeTab === 'brackets'} onClick={setActiveTab} />
          <TabButton tab="leaderboard" label="Leaderboard" isActive={activeTab === 'leaderboard'} onClick={setActiveTab} />
          <TabButton tab="participants" label="Participants" isActive={activeTab === 'participants'} onClick={setActiveTab} />
          <TabButton tab="schedule" label="Schedule" isActive={activeTab === 'schedule'} onClick={setActiveTab} />
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">Tournament Details</h2>
                <p className="text-gray-300 mb-6">{tournament.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Format:</span>
                      <span className="text-white">{tournament.format}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Mode:</span>
                      <span className="text-white">{tournament.mode}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Platform:</span>
                      <span className="text-white">{tournament.platform}</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Region:</span>
                      <span className="text-white">{tournament.region}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Entry Fee:</span>
                      <span className="text-white">{tournament.entryFee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Organizer:</span>
                      <span className="text-white">{tournament.organizer}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rules */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Tournament Rules</h3>
                <ul className="space-y-2">
                  {tournament.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Shield className="text-purple-400 mt-0.5" size={16} />
                      <span className="text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Prize Distribution */}
              <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 backdrop-blur-sm rounded-lg p-6 border border-yellow-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Trophy className="mr-2 text-yellow-400" />
                  Prize Pool
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 flex items-center">
                      <Crown className="mr-2 text-yellow-400" size={16} />
                      1st Place
                    </span>
                    <span className="text-yellow-400 font-bold">₹2,00,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 flex items-center">
                      <Medal className="mr-2 text-gray-400" size={16} />
                      2nd Place
                    </span>
                    <span className="text-white font-bold">₹1,50,000</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 flex items-center">
                      <Medal className="mr-2 text-orange-400" size={16} />
                      3rd Place
                    </span>
                    <span className="text-white font-bold">₹1,00,000</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Tournament Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Total Kills</span>
                    <span className="text-white font-bold">1,247</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Matches Played</span>
                    <span className="text-white font-bold">64</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Average Duration</span>
                    <span className="text-white font-bold">24:32</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Peak Viewers</span>
                    <span className="text-white font-bold">25,678</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                <Play className="inline mr-2" size={20} />
                Watch Live Stream
              </button>
            </div>
          </div>
        )}

        {activeTab === 'brackets' && (
          <div className="space-y-8">
            {brackets.map((bracket, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <Sword className="mr-2 text-purple-400" />
                  {bracket.round}
                </h3>
                <div className="space-y-4">
                  {bracket.matches.map((match) => (
                    <MatchCard
                      key={match.id}
                      match={match}
                      isExpanded={expandedMatch === match.id}
                      onToggle={(id) => setExpandedMatch(expandedMatch === id ? null : id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white flex items-center">
                <Trophy className="mr-2 text-yellow-400" />
                Current Leaderboard
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-400 font-semibold">Rank</th>
                    <th className="px-6 py-4 text-left text-gray-400 font-semibold">Team</th>
                    <th className="px-6 py-4 text-left text-gray-400 font-semibold">Kills</th>
                    <th className="px-6 py-4 text-left text-gray-400 font-semibold">Points</th>
                    <th className="px-6 py-4 text-left text-gray-400 font-semibold">Prize</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.map((team, index) => (
                    <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          {team.rank === 1 && <Crown className="text-yellow-400" size={20} />}
                          {team.rank === 2 && <Medal className="text-gray-400" size={20} />}
                          {team.rank === 3 && <Medal className="text-orange-400" size={20} />}
                          <span className="text-white font-bold">#{team.rank}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-white font-semibold">{team.team}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-red-400 font-bold">{team.kills}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-purple-400 font-bold">{team.points}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-green-400 font-bold">{team.prize}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'participants' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {participants.map((participant) => (
              <div key={participant.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <User className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{participant.name}</h3>
                    <p className="text-gray-400 text-sm">{participant.team}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Rank:</span>
                    <span className="text-purple-400 font-semibold">{participant.rank}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Kills:</span>
                    <span className="text-red-400 font-bold">{participant.kills}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="space-y-4">
            {tournament.schedule.map((event, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full ${
                      event.status === 'completed' ? 'bg-green-500' :
                      event.status === 'live' ? 'bg-red-500 animate-pulse' :
                      'bg-gray-500'
                    }`}></div>
                    <div>
                      <h3 className="text-white font-bold">{event.round}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-gray-400 flex items-center">
                          <Calendar size={16} className="mr-1" />
                          {event.date}
                        </span>
                        <span className="text-gray-400 flex items-center">
                          <Clock size={16} className="mr-1" />
                          {event.time}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.status === 'completed' ? 'bg-green-600 text-white' :
                    event.status === 'live' ? 'bg-red-600 text-white animate-pulse' :
                    'bg-gray-600 text-gray-300'
                  }`}>
                    {event.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default TournamentPage;