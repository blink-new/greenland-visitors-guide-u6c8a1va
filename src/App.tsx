import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PlacesPage from './pages/PlacesPage';
import DiningPage from './pages/DiningPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import AccommodationsPage from './pages/AccommodationsPage';
import AccommodationDetailPage from './pages/AccommodationDetailPage';
import PlaceDetailPage from './pages/PlaceDetailPage';
import MapsPage from './pages/MapsPage';
import TravelInfoPage from './pages/TravelInfoPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/places" element={<PlacesPage />} />
              <Route path="/places/:id" element={<PlaceDetailPage />} />
              <Route path="/dining" element={<DiningPage />} />
              <Route path="/dining/:id" element={<RestaurantDetailPage />} />
              <Route path="/accommodations" element={<AccommodationsPage />} />
              <Route path="/accommodations/:id" element={<AccommodationDetailPage />} />
              <Route path="/maps" element={<MapsPage />} />
              <Route path="/travel-info" element={<TravelInfoPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;