import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import HomeEnhanced from './pages/HomeEnhanced';
import Product from './pages/Product';
import Installation from './pages/Installation';
import DataCertifications from './pages/DataCertifications';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import TestPage from './pages/TestPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Navigation />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<HomeEnhanced />} />
            <Route path="/product" element={<Product />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="/data-certifications" element={<DataCertifications />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/casestudies" element={<CaseStudies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
