import { NavLink } from 'react-router-dom'
import { Home, BookOpen, Plus, Heart, Search } from 'lucide-react'
import './Navigation.css'

function Navigation() {
    return (
        <>
            {/* Desktop Header */}
            <header className="header-desktop">
                <div className="header-brand">The Recipe Box</div>
                <nav className="header-nav">
                    <NavLink to="/" data-text="Home">Home</NavLink>
                    <NavLink to="/recipes" data-text="Recipes">Recipes</NavLink>
                    <NavLink to="/favorites" data-text="Favorites">Favorites</NavLink>
                    <NavLink to="/recipes/new" className="nav-add-button">Add Recipe</NavLink>
                </nav>
            </header>

            {/* Mobile Top Bar */}
            <header className="header-mobile-top">
                <div className="header-brand">The Recipe Box</div>
            </header>

            {/* Mobile Bottom Nav */}
            <nav className="nav-mobile">
                <NavLink to="/"><Home size={20} />Home</NavLink>
                <NavLink to="/recipes"><BookOpen size={20} />Recipes</NavLink>
                <NavLink to="/recipes/new" className="mobile-nav-add"><Plus size={24} /></NavLink>
                <NavLink to="/favorites"><Heart size={20} />Favorites</NavLink>
                <NavLink to="/search"><Search size={20} />Search</NavLink>
            </nav>
        </>
    )
}

export default Navigation