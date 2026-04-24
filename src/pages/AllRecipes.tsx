import { recipes } from '../data/recipes'
import RecipeCard from '../components/RecipeCard'
import './AllRecipes.css'

function AllRecipes() {
  return (
    <div className="all-recipes-page">
      <h1>All Recipes</h1>
      <div className="recipe-grid">
        {recipes.map(recipe => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}

export default AllRecipes