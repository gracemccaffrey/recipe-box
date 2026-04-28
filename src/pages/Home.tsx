import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { recipes } from '../data/recipes'
import RecipeCard from '../components/RecipeCard'
import './Home.css'

function Home() {
    const navigate = useNavigate()

    const recentRecipes = recipes.slice(-4)
    const placeholderCount = Math.max(0, 4 - recentRecipes.length)

    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Your recipes,<br />kept beautifully.</h1>
                    <p>Store, organize, and find the recipes you love to make.</p>
                    <div className="hero-buttons">
                        <button onClick={() => navigate('./recipes')}>Browse Recipes</button>
                        <button onClick={() => navigate('/recipes/new')} className="hero-button-outline">Add Recipe</button>
                    </div>
                </div>
            </section>

            <section className="recently-added">
                <div className="section-header">
                    <h2>Recently Added</h2>
                    <Link to="/recipes">View All</Link>
                </div>
                <div className="recently-added-grid">
                    {recentRecipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                    {Array.from({length: placeholderCount }).map((_,i) => (
                        <Link to="/recipes/new" className="recipe-card-placeholder-link">
                            <div key={'placeholder-${i}'} className="recipe-card-placeholder">
                                <span>+</span>
                                <p>Add a recipe</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home