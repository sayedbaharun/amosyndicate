'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Crown, Clock, CheckCircle } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Welcome to Arab Money Official! How can we elevate your luxury brand today?',
      sender: 'agent',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Show notification after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSend = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputValue,
        sender: 'user',
        timestamp: new Date(),
      };
      
      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // Simulate agent typing
      setIsTyping(true);
      setTimeout(() => {
        const agentResponse = getAgentResponse(inputValue);
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          text: agentResponse,
          sender: 'agent',
          timestamp: new Date(),
        }]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const getAgentResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return 'Our luxury marketing services range from $2,000 to $15,000+ per month. Would you like to schedule a consultation to discuss your specific needs?';
    }
    if (lowerMessage.includes('service')) {
      return 'We offer three tiers: Content Mastery ($2-5K), Campaign Excellence ($5-15K), and Luxury Authority ($15K+). Each designed for different stages of luxury brand growth.';
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('call')) {
      return 'I can schedule a VIP consultation for you immediately. Our luxury brand strategists are available for video calls or in-person meetings at our Dubai office. What works best for you?';
    }
    if (lowerMessage.includes('results') || lowerMessage.includes('roi')) {
      return 'Our clients typically see 200-400% ROI within 6 months. Elite Properties Dubai achieved 340% lead increase and $2.8M in revenue. Would you like to see more case studies?';
    }
    
    return 'I understand you\'re interested in elevating your luxury brand. Let me connect you with our senior strategist for a personalized consultation. What\'s the best email to reach you?';
  };

  return (
    <>
      {/* Notification Badge */}
      <AnimatePresence>
        {showNotification && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-24 right-6 z-40 glass-effect rounded-lg p-4 max-w-xs"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-white text-sm">
                <span className="font-semibold">Luxury Expert Online</span> - Get instant answers
              </p>
            </div>
            <button
              onClick={() => {
                setShowNotification(false);
                setIsOpen(true);
              }}
              className="text-[#D4AF37] text-sm font-semibold mt-2 hover:text-[#B8941F]"
            >
              Start Conversation →
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 gold-gradient rounded-full shadow-2xl hover:shadow-[#D4AF37]/50 transition-all duration-300"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 90 }}
            >
              <X className="w-6 h-6 text-black" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: -90 }}
            >
              <MessageCircle className="w-6 h-6 text-black" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[500px] bg-black border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="gold-gradient p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-black/20 rounded-lg flex items-center justify-center">
                    <Crown className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">AMO Luxury Consultant</h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                      <span className="text-xs text-black/70">Online Now</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-black/60" />
                  <span className="text-xs text-black/60">2 min response</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[340px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#D4AF37] text-black'
                        : 'glass-effect text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <div className="flex items-center justify-end space-x-1 mt-1">
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString('en-US', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </span>
                      {message.sender === 'user' && (
                        <CheckCircle className="w-3 h-3 opacity-70" />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="glass-effect p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#D4AF37]/20">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about luxury marketing..."
                  className="flex-1 px-4 py-2 bg-white/10 border border-[#D4AF37]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37] transition-colors duration-300"
                />
                <motion.button
                  onClick={handleSend}
                  className="p-2 gold-gradient rounded-lg hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5 text-black" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
