import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import Footer from './components/Footer';
<<<<<<< HEAD
import SignUp from './components/SignUp';
import Login from './components/Login';
=======
import Login from './components/Login';
import Signup from './components/Signup';
import ManageRecipesPage from './pages/ManageRecipesPage';
import FavoritesPage from './pages/FavoritesPage';
import CategoriesPage from './pages/CategoriesPage';
import CategoryRecipesPage from './pages/CategoryRecipesPage';
import PrivateRoute from './components/PrivateRoute';
>>>>>>> origin/master
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
<<<<<<< HEAD
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
=======
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/manage-recipes" element={<PrivateRoute><ManageRecipesPage /></PrivateRoute>} />
        <Route path="/favorites" element={<PrivateRoute><FavoritesPage /></PrivateRoute>} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:category" element={<CategoryRecipesPage />} />
>>>>>>> origin/master
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;