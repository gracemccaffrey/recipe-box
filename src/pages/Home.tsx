import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { recipes } from '../data/recipes'
import RecipeCard from '../components/RecipeCard'
import { EggFried, Sandwich, Soup, Salad, CakeSlice, CupSoda } from 'lucide-react'
import './Home.css'

function Home() {
    const navigate = useNavigate()

    const recentRecipes = recipes.slice(-4)
    const placeholderCount = Math.max(0, 4 - recentRecipes.length)

    const categories = [
        {name: 'Breakfast', icon: <EggFried size={45} />}, 
        {name: 'Lunch', icon: <Sandwich size={45} />}, 
        {name: 'Dinner', icon: <Soup size={45} />},
        {name: 'Sides', icon: <Salad size={45} />},
        {name: 'Desserts', icon: <CakeSlice size={45} />}, 
        {name: 'Drinks', icon: <CupSoda size={45} />}
    ]
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

            <section className="browse-by-category">
                <h2>Browse by Category</h2>
                <div className="category-grid">
                    {categories.map(category => (
                        <Link 
                            to={`recipes?categories=${category.name}`}
                            key={category.name}
                            className="category-title"
                        >
                            {category.icon}
                            <span>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home