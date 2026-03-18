export interface Recipe {
  id: number;
  name: string;
  image: string;
  instructions: string[];
  userId?: number;
  prepTime?: number;
  cookTime?: number;
  servings?: number;
  difficulty?: string;
  cuisine?: string;
  ingredients?: Array<{ name: string; amount: number; unit: string }>;
  rating?: number;
  reviewCount?: number;
  mealType?: string[];
  tags?: string[];
}