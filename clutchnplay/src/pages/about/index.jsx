import React, { useState, useEffect } from 'react';
import { Users, Trophy, Target, Zap, Shield, Globe, Heart, Award, Gamepad2, Star, ArrowRight, Play } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUsPage = () => {
  const [activeTab, setActiveTab] = useState('mission');
  const [animatedStats, setAnimatedStats] = useState({
    players: 0,
    tournaments: 0,
    prizes: 0,
    countries: 0
  });

  const stats = [
    { label: 'Active Players', value: 250000, prefix: '', suffix: '+', icon: Users },
    { label: 'Tournaments Hosted', value: 15000, prefix: '', suffix: '+', icon: Trophy },
    { label: 'Prize Money Distributed', value: 2500000, prefix: '₹', suffix: '+', icon: Award },
    { label: 'Countries Reached', value: 45, prefix: '', suffix: '+', icon: Globe }
  ];

  const teamMembers = [
    {
      name: 'Arjun Sharma',
      role: 'Founder & CEO',
      image: '/api/placeholder/120/120',
      bio: 'Professional gamer turned entrepreneur with 8+ years in eSports',
      achievements: ['Top 100 BGMI Player', 'Tournament Winner', 'Gaming Influencer']
    },
    {
      name: 'Priya Patel',
      role: 'Head of Operations',
      image: '/api/placeholder/120/120',
      bio: 'Expert in tournament management and community building',
      achievements: ['Event Management Pro', 'Community Builder', 'Strategy Expert']
    },
    {
      name: 'Rohit Kumar',
      role: 'Lead Developer',
      image: '/api/placeholder/120/120',
      bio: 'Full-stack developer specializing in gaming platforms',
      achievements: ['Tech Innovation', 'Platform Architecture', 'Performance Optimization']
    },
    {
      name: 'Sneha Gupta',
      role: 'Community Manager',
      image: '/api/placeholder/120/120',
      bio: 'Building bridges between players and creating amazing experiences',
      achievements: ['Community Growth', 'Player Engagement', 'Content Strategy']
    }
  ];

  const milestones = [
    { year: '2019', title: 'Platform Launch', description: 'Started with a vision to democratize eSports in India' },
    { year: '2020', title: '10K Players', description: 'Reached our first major milestone during the gaming boom' },
    { year: '2021', title: 'Mobile Focus', description: 'Pivoted to mobile gaming tournaments for broader accessibility' },
    { year: '2022', title: '100K Community', description: 'Built India\'s largest mobile eSports community' },
    { year: '2023', title: 'Prize Pool ₹1Cr+', description: 'Distributed over 1 crore in prize money to players' },
    { year: '2024', title: 'Global Expansion', description: 'Expanded to multiple countries across Asia' }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Fair Play',
      description: 'We ensure every tournament is conducted with complete transparency and fairness. Anti-cheat systems and strict moderation keep the competition clean.'
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Our players are at the heart of everything we do. We listen, adapt, and grow together as one gaming family.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries with cutting-edge technology to deliver the best gaming experience possible.'
    },
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Making competitive gaming accessible to everyone, regardless of their background or skill level.'
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          
          setAnimatedStats(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(/\s+/g, '')]: Math.floor(start)
          }));
        }, 16);
      });
    };

    const timer = setTimeout(animateStats, 500);
    return () => clearTimeout(timer);
  }, []);

  const formatStatValue = (stat, animatedValue) => {
    if (stat.prefix === '₹') {
      return `${stat.prefix}${(animatedValue / 100000).toFixed(1)}L${stat.suffix}`;
    }
    if (animatedValue >= 1000) {
      return `${(animatedValue / 1000).toFixed(0)}K${stat.suffix}`;
    }
    return `${stat.prefix}${animatedValue}${stat.suffix}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <Header/>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Gamepad2 className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">About GameArena</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Powering the Future
            </span>
            <br />
            <span className="text-white">of eSports</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're not just a tournament platform – we're a movement democratizing competitive gaming 
            and creating opportunities for every player to showcase their skills on the biggest stage.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5 group-hover:animate-pulse" />
              Watch Our Story
            </button>
            <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              Join Community
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const animatedValue = animatedStats[stat.label.toLowerCase().replace(/\s+/g, '')] || 0;
              
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                  <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {formatStatValue(stat, animatedValue)}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Foundation</h2>
            <p className="text-gray-400 text-lg">The principles that drive everything we do</p>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-semibold capitalize transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            {activeTab === 'mission' && (
              <div className="text-center">
                <Target className="w-16 h-16 text-purple-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  To democratize competitive gaming by providing every player, regardless of their background or skill level, 
                  with fair and transparent opportunities to compete, improve, and achieve their gaming dreams. We believe 
                  that talent exists everywhere, and our platform ensures it gets the recognition it deserves.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="text-center">
                <Star className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  To become the world's most trusted and innovative eSports platform, where millions of gamers discover 
                  their potential, build lasting friendships, and create unforgettable moments. We envision a future where 
                  competitive gaming is as mainstream and respected as traditional sports.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div>
                <div className="text-center mb-12">
                  <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6" />
                  <h3 className="text-3xl font-bold text-white mb-6">Our Values</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                        <Icon className="w-10 h-10 text-purple-400 mb-4" />
                        <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{value.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-gray-400 text-lg">Milestones that shaped our platform</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-600 to-cyan-600 h-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-bold text-white mb-3">{milestone.title}</h4>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full border-4 border-gray-900"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-gray-400 text-lg">The passionate individuals behind GameArena</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <div className="text-purple-400 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="bg-purple-600/20 border border-purple-500/30 rounded-full px-3 py-1 text-xs text-purple-300">
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join the Revolution?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Be part of India's fastest-growing eSports community. Compete in tournaments, 
              win amazing prizes, and make lifelong gaming friends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <Trophy className="w-5 h-5" />
                Start Competing Today
              </button>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUsPage;