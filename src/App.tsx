import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AllRecipes from './pages/AllRecipes'
import RecipeDetail from './pages/RecipeDetail'
import EditRecipe from './pages/EditRecipe'
import AddRecipe from './pages/AddRecipe'
import Favorites from './pages/Favorites'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/recipes/new" element={<AddRecipe />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  )
}

export default App