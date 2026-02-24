
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ContactPage from './pages/ContactPage';

const Layout: React.FC = () => {
  return (
    <div className="bg-slate-900 text-slate-300 min-h-screen font-sans antialiased">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="case-study/:slug" element={<CaseStudyPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
