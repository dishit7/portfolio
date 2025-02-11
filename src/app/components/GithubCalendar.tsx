'use client'
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { ThemeInput } from 'react-activity-calendar';
import { useTheme } from 'next-themes';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.default),
  { ssr: false }
);

// Default green theme
const DEFAULT_GREEN_THEME = ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'];

// Dark mode green theme
const DARK_GREEN_THEME = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];

const THEMES = {
  dark: DARK_GREEN_THEME,
  light: DEFAULT_GREEN_THEME
};

interface GitHubCalendarWrapperProps {
  username: string;
}

const GitHubCalendarWrapper: React.FC<GitHubCalendarWrapperProps> = ({ username }) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { theme = 'dark' } = useTheme();

  useEffect(() => {
    const scrollToRightmost = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft = container.scrollWidth;
      }
    };
    const timeoutId = setTimeout(scrollToRightmost, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const themeColors = {
    [theme === 'dark' ? 'dark' : 'light']: THEMES[theme === 'dark' ? 'dark' : 'light']
  };

  // Render color boxes for the light theme
  const renderColorBoxes = (colors: string[]) => {
    return colors.map((color, index) => (
      <div 
        key={index}
        style={{
          backgroundColor: color,
          width: '30px',
          height: '30px',
          margin: '5px',
          display: 'inline-block',
          borderRadius: '5px'
        }}
      />
    ));
  };

  return (
    <div 
      ref={scrollContainerRef} 
      style={{ 
        overflowX: 'scroll', 
        whiteSpace: 'nowrap',
        width: '100%', 
        WebkitOverflowScrolling: 'touch',
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none',
      }}
    >
      <div style={{ display: 'inline-block' }}> 
        <GitHubCalendar 
          username={username} 
          theme={themeColors as ThemeInput}
          fontSize={12} 
        />
      </div>

        
    
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <GitHubCalendarWrapper username="dishit7" />
    </div>
  );
};

export default HomePage;
