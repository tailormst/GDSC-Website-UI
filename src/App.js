import React, { useState } from 'react';
import Header from './components/Header';
import Footer from "./components/Footer";
import Main from "./components/Main";
import { ThemeProvider } from './context/theme';

const App = () => {

  return (
    <ThemeProvider >
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;