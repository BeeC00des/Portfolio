import { Icon } from '@iconify/react';
import { useTheme } from 'context/ThemeContext';
import { cn } from 'lib/utils';

const ThemeToggle = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={cn(
        'flex items-center justify-center w-8 h-8 rounded-full border border-[#199C16] text-[#199C16] hover:bg-[#199C16] hover:text-white transition-colors',
        className
      )}
    >
      <Icon icon={theme === 'dark' ? 'mdi:weather-sunny' : 'mdi:weather-night'} width="16" />
    </button>
  );
};

export default ThemeToggle;
