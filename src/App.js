import React, { useState } from 'react';
import { Helmet } from 'react-helmet'; // Import Helmet for SEO management
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { ThemeProvider } from './context/theme';
import gdgLogo from './components/Images/gdglogo.png';

const App = () => {
  return (
    <ThemeProvider>
      {/* SEO Meta Tags using Helmet  */}
      <Helmet>
        <title>GDG RCOEM</title>
        <meta name="description" content="This is a well-optimized SEO React application." />
        <meta name="keywords" content="SEO, React, Web Development, Performance" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SEO Optimized React App" />
        <meta property="og:description" content="This is a React application optimized for SEO." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com" />
        <meta property="og:image" content="https://www.yourwebsite.com/your-image.png" />
        <link rel="canonical" href="https://www.yourwebsite.com" />
        <link href={gdgLogo} rel="icon" type="image/png" sizes="32x32"></link>
        
      </Helmet>

      {/* Website Components */}
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;