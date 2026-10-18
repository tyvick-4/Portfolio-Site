
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CaseStudyPage from './pages/CaseStudyPage';
import ContactPage from './pages/ContactPage';
import WritingPage from './pages/WritingPage';

const Layout: React.FC = () => {
  return (
    <div className="bg-bg text-muted min-h-screen font-sans">
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
          <Route path="writing" element={<WritingPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
