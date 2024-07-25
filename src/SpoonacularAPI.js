const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
const BASE_URL = 'https://api.spoonacular.com';

const fetchFromAPI = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}&apiKey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const fetchPopularRecipes = async () => {
  return fetchFromAPI('/recipes/complexSearch?sort=random');
};

export const searchRecipes = async (query) => {
  return fetchFromAPI(`/recipes/complexSearch?query=${encodeURIComponent(query)}`);
};

export const fetchRecipeDetails = async (id) => {
  return fetchFromAPI(`/recipes/${id}/information?includeNutrition=false`);
};

export const searchRecipesByIngredients = async (ingredients) => {
  return fetchFromAPI(`/recipes/findByIngredients?ingredients=${encodeURIComponent(ingredients)}`);
};