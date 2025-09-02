'use client';

import React from 'react';

interface IslamicPatternProps {
  opacity?: number;
  color?: string;
  className?: string;
}

export default function IslamicPattern({ 
  opacity = 0.05, 
  color = '#C9A961', 
  className = '' 
}: IslamicPatternProps) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Islamic Geometric Pattern - Octagon and Square Tiling */}
          <pattern 
            id="islamicPattern" 
            x="0" 
            y="0" 
            width="100" 
            height="100" 
            patternUnits="userSpaceOnUse"
          >
            {/* Central Octagon */}
            <polygon
              points="30,15 50,15 65,30 65,50 50,65 30,65 15,50 15,30"
              fill="none"
              stroke={color}
              strokeWidth="0.5"
              opacity="0.8"
            />
            
            {/* Corner Squares */}
            <rect x="0" y="0" width="15" height="15" fill="none" stroke={color} strokeWidth="0.3" opacity="0.6" />
            <rect x="65" y="0" width="15" height="15" fill="none" stroke={color} strokeWidth="0.3" opacity="0.6" />
            <rect x="0" y="65" width="15" height="15" fill="none" stroke={color} strokeWidth="0.3" opacity="0.6" />
            <rect x="65" y="65" width="15" height="15" fill="none" stroke={color} strokeWidth="0.3" opacity="0.6" />
            
            {/* Connecting Elements */}
            <line x1="15" y1="7.5" x2="30" y2="15" stroke={color} strokeWidth="0.2" opacity="0.4" />
            <line x1="50" y1="15" x2="65" y2="7.5" stroke={color} strokeWidth="0.2" opacity="0.4" />
            <line x1="72.5" y1="15" x2="65" y2="30" stroke={color} strokeWidth="0.2" opacity="0.4" />
            <line x1="65" y1="50" x2="72.5" y2="65" stroke={color} strokeWidth="0.2" opacity="0.4" />
            <line x1="50" y1="65" x2="65" y2="72.5" stroke={color} strokeWidth="0.2" opacity="0.4" />
            <line x1="30" y1="65" x2="15" y2="72.5" stroke={color} strokeWidth="0.2" opacity="0.4" />
            <line x1="7.5" y1="50" x2="15" y2="65" stroke={color} strokeWidth="0.2" opacity="0.4" />
            <line x1="15" y1="30" x2="7.5" y2="15" stroke={color} strokeWidth="0.2" opacity="0.4" />
            
            {/* Inner Star Pattern */}
            <polygon
              points="40,25 45,35 40,45 35,35"
              fill="none"
              stroke={color}
              strokeWidth="0.3"
              opacity="0.5"
            />
            
            {/* Decorative Dots */}
            <circle cx="40" cy="40" r="1" fill={color} opacity="0.3" />
            <circle cx="7.5" cy="7.5" r="0.5" fill={color} opacity="0.4" />
            <circle cx="72.5" cy="7.5" r="0.5" fill={color} opacity="0.4" />
            <circle cx="7.5" cy="72.5" r="0.5" fill={color} opacity="0.4" />
            <circle cx="72.5" cy="72.5" r="0.5" fill={color} opacity="0.4" />
          </pattern>
        </defs>
        
        {/* Apply the pattern */}
        <rect width="100%" height="100%" fill="url(#islamicPattern)" />
        
        {/* Additional overlay for depth */}
        <defs>
          <radialGradient id="patternGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.1" />
            <stop offset="100%" stopColor={color} stopOpacity="0.05" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#patternGradient)" />
      </svg>
    </div>
  );
}