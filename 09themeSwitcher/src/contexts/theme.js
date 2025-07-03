import { createContext, useContext } from 'react';

export const ThemeContext = createContext({
   themeMode: 'light', // Default theme mode
   darkTheme: () => { }, // Function to toggle to dark theme
   lightTheme: () => { }, // Function to toggle to light theme

});

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
   }
   return context;
} 