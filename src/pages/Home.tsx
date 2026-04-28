import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
    const navigate = useNavigate(); 

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
        </div>
    )
}

export default Home