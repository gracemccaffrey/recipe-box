export interface Recipe {
    id: string 
    title: string
    description: string
    prepTime: number
    cookTime: number
    difficulty: 'Easy' | 'Medium' | 'Hard'
    servings: number
    ingredients: {name: string; amount: string }[]
    steps: string[]
    category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Appetizer' | 'Side' | 'Dessert'
    cuisine?: string
    photoUrl?: string
    tags: string[]
    isFavorite: boolean
    notes?: string 
}