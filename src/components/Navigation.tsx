import { NavLink } from 'react-router-dom'
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

            {/* Mobile Bottom Nav */}
            <nav className="nav-mobile">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/recipes">Recipes</NavLink>
                <NavLink to="/recipes/new" className="mobile-nav-add">+</NavLink>
                <NavLink to="/favorites">Favorites</NavLink>
                <NavLink to="/search">Search</NavLink>
            </nav>
        </>
    )
}

export default Navigation