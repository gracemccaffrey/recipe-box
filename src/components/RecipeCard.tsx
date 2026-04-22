import type { Recipe } from '../types'

interface RecipeCardProps {
    recipe : Recipe
}

function RecipeCard({ recipe }: RecipeCardProps) {
    const totalTime = recipe.prepTime + recipe.cookTime

    return (
        <div className="recipe-card">
            <img src={recipe.photoUrl} alt={recipe.title} />
            <h2>{recipe.title}</h2>
            <div className="recipe-card-body">
                <div className="recipe-card-meta">
                    <span>{totalTime} min</span>
                    <span className="recipe-card-category">{recipe.category}</span>
                    <span>{recipe.difficulty}</span>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard