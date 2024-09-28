import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import Main from "./components/Main";
import { ThemeProvider } from './context/theme';

const App = () => {

  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  }

  const lightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {

  }
    , [themeMode])

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;