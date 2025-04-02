
import React from 'react';
import { Utensils, Leaf, Apple } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const NutritionRecipes = () => {
  const recipes = [
    {
      title: "Calming Chamomile Oatmeal",
      description: "Rich in complex carbohydrates that help the brain produce serotonin for stress relief",
      ingredients: ["1 cup rolled oats", "2 cups almond milk", "1 tbsp honey", "1 chamomile tea bag", "¼ cup chopped almonds", "½ cup berries"],
      instructions: "Steep chamomile tea bag in warm almond milk for 5 minutes. Remove tea bag and use the milk to cook oats until creamy. Top with honey, almonds, and berries.",
      mood: "Anxiety Relief",
      icon: <Leaf className="h-5 w-5 text-green-500" />
    },
    {
      title: "Dark Chocolate Avocado Mousse",
      description: "Contains magnesium and healthy fats that help reduce cortisol levels",
      ingredients: ["2 ripe avocados", "¼ cup cocoa powder", "3 tbsp maple syrup", "1 tsp vanilla extract", "Pinch of sea salt", "¼ cup almond milk"],
      instructions: "Blend all ingredients until smooth and creamy. Refrigerate for at least 30 minutes before serving.",
      mood: "Stress Reduction",
      icon: <Utensils className="h-5 w-5 text-green-500" />
    },
    {
      title: "Turmeric Golden Milk",
      description: "Anti-inflammatory properties help combat stress-induced inflammation",
      ingredients: ["1 cup oat milk", "1 tsp turmeric", "½ tsp cinnamon", "¼ tsp ginger", "1 tbsp honey", "Pinch of black pepper"],
      instructions: "Warm all ingredients in a small saucepan over medium heat. Simmer for 5 minutes, strain if needed, and enjoy warm.",
      mood: "Relaxation",
      icon: <Utensils className="h-5 w-5 text-green-500" />
    },
    {
      title: "Omega-3 Rich Breakfast Bowl",
      description: "Essential fatty acids support brain health and mood regulation",
      ingredients: ["¼ cup chia seeds", "1 cup coconut milk", "1 tbsp maple syrup", "½ tsp vanilla extract", "¼ cup walnuts", "1 sliced banana"],
      instructions: "Mix chia seeds, coconut milk, maple syrup, and vanilla. Refrigerate overnight. Top with walnuts and banana before serving.",
      mood: "Mood Stabilization",
      icon: <Apple className="h-5 w-5 text-green-500" />
    },
    {
      title: "Tryptophan-Rich Turkey Wrap",
      description: "Contains tryptophan which helps produce serotonin for improved mood",
      ingredients: ["2 slices turkey breast", "1 whole grain wrap", "½ avocado", "Handful of spinach", "1 tbsp hummus", "Sliced cucumber"],
      instructions: "Spread hummus on wrap. Layer with turkey, avocado, spinach, and cucumber. Roll up and enjoy.",
      mood: "Mental Clarity",
      icon: <Leaf className="h-5 w-5 text-green-500" />
    },
    {
      title: "Magnesium-Boosting Spinach Salad",
      description: "Magnesium helps regulate the body's stress response",
      ingredients: ["2 cups spinach", "¼ cup pumpkin seeds", "½ cup chickpeas", "½ avocado", "1 tbsp olive oil", "1 tbsp lemon juice"],
      instructions: "Combine all ingredients in a bowl. Drizzle with olive oil and lemon juice. Toss and serve.",
      mood: "Stress Reduction",
      icon: <Leaf className="h-5 w-5 text-green-500" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-mind-green/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 text-center">
              <div className="bg-mind-green w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Utensils className="h-8 w-8 text-green-500" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-mind-text mb-4">Stress-Relieving Recipes</h1>
              <p className="text-lg text-mind-subtle max-w-3xl mx-auto">
                Discover recipes scientifically shown to promote relaxation and reduce stress through key nutrients 
                that support balanced brain chemistry and lower cortisol levels.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {recipes.map((recipe, index) => (
                <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <div className="bg-mind-green/30 p-2 rounded-full">
                        {recipe.icon}
                      </div>
                      <span className="text-sm font-medium px-3 py-1 bg-mind-green/40 rounded-full">
                        {recipe.mood}
                      </span>
                    </div>
                    <CardTitle className="text-xl text-mind-text">{recipe.title}</CardTitle>
                    <CardDescription className="text-mind-subtle">
                      {recipe.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-mind-text mb-2">Ingredients:</h4>
                        <ul className="list-disc list-inside space-y-1 text-mind-subtle">
                          {recipe.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-mind-text mb-2">Instructions:</h4>
                        <p className="text-mind-subtle">{recipe.instructions}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100">
              <h2 className="text-xl font-semibold text-mind-text mb-4">Nutrition and Mental Health</h2>
              <p className="text-mind-subtle mb-4">
                Research shows that what we eat directly impacts our brain chemistry and mental wellbeing. Foods rich in 
                omega-3 fatty acids, magnesium, zinc, B vitamins, and antioxidants can help reduce anxiety, improve 
                mood, and enhance resilience to stress.
              </p>
              <p className="text-mind-subtle">
                The recipes above are specifically designed to incorporate ingredients known for their stress-reducing properties. 
                Incorporate these meals into your routine during particularly stressful periods to support your mental health through nutrition.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NutritionRecipes;
