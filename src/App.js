import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import Footer from './components/Footer';



import Login from './components/Login';
import SignUp from './components/SignUp';
// ... existing code ...
import ManageRecipesPage from './pages/ManageRecipesPage';
import FavoritesPage from './pages/FavoritesPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryRecipesPage from './pages/CategoryRecipesPage';
import PrivateRoute from './components/PrivateRoute';

import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />

        <Route path="/signup" element={< SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/manage-recipes" element={<PrivateRoute><ManageRecipesPage /></PrivateRoute>} />
        <Route path="/favorites" element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:category" element={<CategoryRecipesPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;