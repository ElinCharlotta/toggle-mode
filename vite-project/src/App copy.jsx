/*import React, { useState, createContext, useContext, Children } from 'react';
import './App.css';

const ToggleModeContext = createContext();

function ToggleModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <ToggleModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </ToggleModeContext.Provider>
  );
}

function useToggleMode() {
  const context = useContext(ToggleModeContext);
  if (context === undefined) {
    throw new Error('useToggleMode must be used within a ToggleModeProvider');
  }
  return context;
}

function App() {
  const { isDarkMode, toggleMode } = useToggleMode();

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button onClick={toggleMode}>Toggle Mode</button>
      <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
    </div>
  );
}

export default function AppWithToggle() {
  return (
    <ToggleModeProvider>
      <App />
    </ToggleModeProvider>
  );
}
*/