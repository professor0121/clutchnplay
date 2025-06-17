import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Headphones, 
  Trophy, 
  Shield, 
  Zap,
  User,
  Gamepad2,
  Home,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    gameId: '',
    email: '',
    address: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          gameId: '',
          email: '',
          address: '',
          subject: '',
          message: '',
          category: 'general'
        });
        setSubmitStatus(null);
      }, 3000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email',
      contact: 'support@gamearena.com',
      available: '24/7 Response'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Talk to our team',
      contact: '+91 98765 43210',
      available: '9 AM - 9 PM IST'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant messaging',
      contact: 'Available on platform',
      available: '24/7 Online'
    },
    {
      icon: MapPin,
      title: 'Office Location',
      description: 'Visit us in person',
      contact: 'Mumbai, Maharashtra',
      available: 'Mon - Fri, 10 AM - 6 PM'
    }
  ];

  const supportCategories = [
    {
      icon: Trophy,
      title: 'Tournament Issues',
      description: 'Registration, match disputes, prize queries'
    },
    {
      icon: Shield,
      title: 'Account & Security',
      description: 'Login issues, account verification, security'
    },
    {
      icon: Zap,
      title: 'Technical Support',
      description: 'App bugs, connectivity, performance issues'
    },
    {
      icon: Headphones,
      title: 'General Inquiry',
      description: 'Questions about our platform and services'
    }
  ];

  const faqs = [
    {
      question: 'How do I participate in tournaments?',
      answer: 'Simply register on our platform, complete your profile, and browse available tournaments. Click "Join Tournament" and follow the instructions.'
    },
    {
      question: 'When are prize winnings distributed?',
      answer: 'Prize money is typically distributed within 24-48 hours after tournament completion and result verification.'
    },
    {
      question: 'What games are supported?',
      answer: 'We support popular mobile games including Free Fire, BGMI, COD Mobile, Valorant, and many more. Check our games section for the full list.'
    },
    {
      question: 'How do I report a cheater?',
      answer: 'Use the report function in-game or contact our support team with evidence. We take fair play very seriously and investigate all reports.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Hero Section */}
      <Header/>
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-2 mb-6">
            <Headphones className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-semibold">24/7 Support</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Get in Touch
            </span>
            <br />
            <span className="text-white">We're Here to Help</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Have questions about tournaments, technical issues, or just want to chat about gaming? 
            Our dedicated support team is ready to assist you 24/7.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{method.description}</p>
                  <div className="text-purple-400 font-semibold mb-2">{method.contact}</div>
                  <div className="text-xs text-gray-500">{method.available}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Game ID Field */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    <Gamepad2 className="w-4 h-4 inline mr-2" />
                    Game ID *
                  </label>
                  <input
                    type="text"
                    name="gameId"
                    value={formData.gameId}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Your in-game ID (e.g., PlayerName#1234)"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Address Field */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    <Home className="w-4 h-4 inline mr-2" />
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Your address (optional)"
                  />
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-3">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Support Category
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['tournament', 'account', 'technical', 'general'].map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, category }))}
                        className={`p-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                          formData.category === category
                            ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                            : 'bg-white/5 border border-white/20 text-gray-300 hover:bg-white/10'
                        }`}
                      >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    placeholder="Brief description of your issue"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-gray-300 text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Describe your issue or question in detail..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-xl p-4">
                    <CheckCircle className="w-5 h-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Support Categories & FAQs */}
            <div className="space-y-8">
              {/* Support Categories */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Support Categories</h3>
                <div className="space-y-4">
                  {supportCategories.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-1">{category.title}</h4>
                          <p className="text-gray-400 text-sm">{category.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick FAQs */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white/5 rounded-xl p-4">
                      <h4 className="text-lg font-semibold text-white mb-2">{faq.question}</h4>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Visit Our Gaming Hub</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
                <p className="text-gray-300">
                  GameArena Headquarters<br />
                  Tech Park, Andheri East<br />
                  Mumbai, Maharashtra 400069
                </p>
              </div>
              <div>
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold text-white mb-2">Office Hours</h4>
                <p className="text-gray-300">
                  Monday - Friday: 10:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 2:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
              <div>
                <Headphones className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h4 className="text-xl font-semibold text-white mb-2">Support</h4>
                <p className="text-gray-300">
                  24/7 Online Support<br />
                  Average Response: 2 hours<br />
                  Live Chat Available
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-lg">
              Drop by our office to meet the team, see our setup, or discuss partnership opportunities!
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ContactUsPage;