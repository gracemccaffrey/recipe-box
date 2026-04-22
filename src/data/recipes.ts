import type { Recipe } from '../types'

export const recipes: Recipe[] = [
    {
        id:'1', 
        title: 'Classic Margherita Pizza', 
        description: 'A simple, delicious pizza with fresh tomatoes, mozzarella, and basil.', 
        prepTime: 20, 
        cookTime: 15, 
        difficulty: 'Easy', 
        servings: 4, 
        ingredients: [
            {name: 'pizza dough', amount: '1 ball'}, 
            {name: 'tomato sauce', amount: '1/2 cup'}, 
            {name: 'fresh mozzarella', amount: '8 oz'}, 
            { name: 'fresh basil leaves', amount: '10 leaves'}, 
            {name: 'olive oil', amount: '2 tbsp'}
        ], 
        steps: [
            'Preheat oven to 500°F.',
            'Roll out the dough on a floured surface.',
            'Spread tomato sauce evenly over the dough.',
            'Tear mozzarella and distribute over the sauce.',
            'Bake for 12-15 minutes until crust is golden.',
            'Top with fresh basil and a drizzle of olive oil.'
        ], 
        category: 'Dinner', 
        cuisine: 'Italian', 
        tags: ['vegetarian'],
        isFavorite: false,
        photoUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800'

    }, 
    {
        id: '2',
        title: 'Avocado Toast',
        description: 'A quick and satisfying breakfast with creamy avocado on crispy sourdough.',
        prepTime: 5,
        cookTime: 5,
        difficulty: 'Easy',
        servings: 2,
        ingredients: [
            { name: 'sourdough bread', amount: '2 slices' },
            { name: 'ripe avocado', amount: '1 large' },
            { name: 'lemon juice', amount: '1 tbsp' },
            { name: 'red pepper flakes', amount: '1/4 tsp' },
            { name: 'salt and pepper', amount: 'to taste' }
        ],
        steps: [
            'Toast the sourdough slices until golden and crispy.',
            'Halve the avocado, remove the pit, and scoop into a bowl.',
            'Mash avocado with lemon juice, salt, and pepper.',
            'Spread avocado mixture over toast.',
            'Top with red pepper flakes and serve immediately.'
        ],
        category: 'Breakfast',
        tags: ['vegetarian', 'quick'],
        isFavorite: false, 
        photoUrl: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800'
    },
    {
        id: '3',
        title: 'Chicken Tikka Masala',
        description: 'A rich and creamy curry with tender chicken in a spiced tomato sauce.',
        prepTime: 20,
        cookTime: 40,
        difficulty: 'Medium',
        servings: 4,
        ingredients: [
            { name: 'chicken breast', amount: '1.5 lbs' },
            { name: 'plain yogurt', amount: '1/2 cup' },
            { name: 'crushed tomatoes', amount: '14 oz' },
            { name: 'heavy cream', amount: '1/2 cup' },
            { name: 'garam masala', amount: '2 tsp' },
            { name: 'garlic cloves', amount: '4' },
            { name: 'fresh ginger', amount: '1 tbsp' }
        ],
        steps: [
            'Marinate chicken in yogurt and half the spices for at least 30 minutes.',
            'Grill or pan-sear chicken until charred, then set aside.',
            'Sauté garlic and ginger in oil until fragrant.',
            'Add crushed tomatoes and remaining spices, simmer for 15 minutes.',
            'Stir in cream and add chicken back to the pan.',
            'Simmer for 10 more minutes and serve over rice.'
        ],
        category: 'Dinner',
        cuisine: 'Indian',
        tags: ['spicy', 'meal-prep'],
        isFavorite: true,
        photoUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800'
    }
]