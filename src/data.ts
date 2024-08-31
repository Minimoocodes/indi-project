import japchae from '../src/assets/japchae.png'
import cucumberToast from '../src/assets/cucumberToast.png'
import potatoFritters  from '../src/assets/potatoFritters.png'
import kimchiLeekcious from '../src/assets/kimchileekcious.png'
import pastaAllaNorma  from '../src/assets/pastaAllaNorma.png'
import bossam from '../src/assets/bossam.png'
import kimchiKimbap from '../src/assets/kimchiKimbap.png'
import porkBaobun from '../src/assets/porkBaobun.png'
import misoCarbonara from '../src/assets/misoCarbonara.png'
import kimchiFriedrice from '../src/assets/kimchiFriedrice.png'
import sausageRoll from '../src/assets/sausageRoll.png'
import spanRice from '../src/assets/spamRice.png'
import aubergineCeviche from '../src/assets/aubergineCeviche.png'
import kimbap from '../src/assets/kimbap.png'
import kimchiRisotto from '../src/assets/kimchiRisotto.png'

export const recipes = [
  {
    "id": 1,
    "name": "Japchae",
    "ingredients": [
      "200g Sweet potato noodles",
      "150g Beef",
      "100g Spinach",
      "1 Carrot, julienned",
      "1 Onion, sliced",
      "1 Bell pepper, sliced",
      "3 tbsp Soy sauce",
      "2 tbsp Sugar",
      "3 cloves Garlic, minced",
      "2 tbsp Sesame oil",
      "1 tbsp Sesame seeds"
    ],
    "process": [
      "1. Cook sweet potato noodles.",
      "2. Stir-fry beef.",
      "3. Add vegetables and cook.",
      "4. Combine noodles, beef, and vegetables with soy sauce, sugar, garlic, and sesame oil.",
      "5. Garnish with sesame seeds."
    ],
    "time": "45 minutes",
    "categories": ["Korean", "Main Course"],
    "photo": japchae
  },
  {
    "id": 2,
    "name": "Cucumber Toast",
    "ingredients": [
      "4 slices Bread",
      "1 Cucumber, thinly sliced",
      "200g Cream cheese",
      "1 tbsp Dill, chopped",
      "1/2 tsp Salt",
      "1/4 tsp Pepper"
    ],
    "process": [
      "1. Toast bread slices.",
      "2. Spread cream cheese on toasted bread.",
      "3. Top with cucumber slices.",
      "4. Sprinkle with dill, salt, and pepper."
    ],
    "time": "10 minutes",
    "categories": ["Snack", "Vegetarian"],
    "photo": cucumberToast
  },
  {
    "id": 3,
    "name": "Sourcream Potato Fritters",
    "ingredients": [
      "500g Potatoes, grated",
      "1 Onion, grated",
      "2 Eggs",
      "100g Flour",
      "1 tsp Salt",
      "1/2 tsp Pepper",
      "200g Sour cream"
    ],
    "process": [
      "1. Grate potatoes and onions.",
      "2. Mix with eggs, flour, salt, and pepper.",
      "3. Fry spoonfuls in oil until golden brown.",
      "4. Serve with sour cream."
    ],
    "time": "30 minutes",
    "categories": ["Appetizer", "Vegetarian"],
    "photo": potatoFritters 
  },
  {
    "id": 4,
    "name": "KimchiLeekious",
    "ingredients": [
      "300g Leeks, chopped",
      "200g Kimchi, chopped",
      "2 tbsp Soy sauce",
      "3 cloves Garlic, minced",
      "2 tbsp Sesame oil"
    ],
    "process": [
      "1. Chop leeks and kimchi.",
      "2. Stir-fry garlic in sesame oil.",
      "3. Add leeks and kimchi, cook until tender.",
      "4. Season with soy sauce."
    ],
    "time": "20 minutes",
    "categories": ["Korean", "Side Dish"],
    "photo": kimchiLeekcious
  },
  {
    "id": 5,
    "name": "Pasta alla Norma",
    "ingredients": [
      "200g Pasta",
      "1 Eggplant, diced",
      "400g Tomatoes, chopped",
      "3 cloves Garlic, minced",
      "1 bunch Basil, chopped",
      "100g Ricotta salata, grated",
      "3 tbsp Olive oil",
      "1 tsp Salt",
      "1/2 tsp Pepper"
    ],
    "process": [
      "1. Cook pasta.",
      "2. Sauté eggplant in olive oil.",
      "3. Add garlic and tomatoes, simmer.",
      "4. Combine with pasta, garnish with basil and ricotta salata."
    ],
    "time": "30 minutes",
    "categories": ["Italian", "Main Course"],
    "photo": pastaAllaNorma
  },
  {
    "id": 6,
    "name": "Bossam",
    "ingredients": [
      "500g Pork belly",
      "6 cloves Garlic",
      "1 piece Ginger, sliced",
      "4 tbsp Soy sauce",
      "2 tbsp Sesame oil",
      "1 head Lettuce",
      "200g Kimchi",
      "4 tbsp Ssamjang"
    ],
    "process": [
      "1. Boil pork belly with garlic, ginger, and soy sauce.",
      "2. Slice and serve with lettuce, kimchi, and ssamjang."
    ],
    "time": "2 hours",
    "categories": ["Korean", "Main Course"],
    "photo": bossam
  },
  {
    "id": 7,
    "name": "Kimchi Kimbap",
    "ingredients": [
      "2 cups Rice",
      "200g Kimchi",
      "4 Seaweed sheets",
      "1 Carrot, julienned",
      "100g Spinach",
      "3 Eggs, made into an omelette and sliced",
      "100g Pickled radish"
    ],
    "process": [
      "1. Cook rice and mix with sesame oil.",
      "2. Stir-fry carrots and spinach.",
      "3. Make omelette and slice.",
      "4. Place rice, kimchi, vegetables, and egg on seaweed sheet, roll tightly."
    ],
    "time": "40 minutes",
    "categories": ["Korean", "Snack"],
    "photo": kimchiKimbap
  },
  {
    "id": 8,
    "name": "Pork Bao Bun",
    "ingredients": [
      "8 Bao buns",
      "300g Pork belly",
      "3 tbsp Hoisin sauce",
      "1 Cucumber, thinly sliced",
      "2 Scallions, sliced",
      "2 tbsp Sugar",
      "4 tbsp Soy sauce",
      "3 cloves Garlic, minced"
    ],
    "process": [
      "1. Roast pork belly with sugar, soy sauce, and garlic.",
      "2. Steam bao buns.",
      "3. Fill buns with pork, hoisin sauce, cucumber, and scallions."
    ],
    "time": "2 hours",
    "categories": ["Chinese", "Main Course"],
    "photo": porkBaobun
  },
  {
    "id": 9,
    "name": "Miso Carbonara",
    "ingredients": [
      "200g Spaghetti",
      "100g Bacon, diced",
      "3 Eggs",
      "50g Parmesan cheese, grated",
      "2 tbsp Miso paste",
      "3 cloves Garlic, minced",
      "1/2 tsp Pepper"
    ],
    "process": [
      "1. Cook spaghetti.",
      "2. Fry bacon and garlic.",
      "3. Whisk eggs, parmesan, and miso.",
      "4. Combine hot pasta with bacon, garlic, and egg mixture.",
      "5. Season with pepper."
    ],
    "time": "25 minutes",
    "categories": ["Fusion", "Main Course"],
    "photo": misoCarbonara
  },
  {
    "id": 10,
    "name": "Kimchi Fried Rice",
    "ingredients": [
      "2 cups Rice",
      "200g Kimchi, chopped",
      "100g Pork belly, diced",
      "1 Onion, chopped",
      "3 cloves Garlic, minced",
      "2 tbsp Soy sauce",
      "2 tbsp Sesame oil",
      "2 Scallions, chopped",
      "2 Eggs, fried"
    ],
    "process": [
      "1. Fry garlic and onions.",
      "2. Add pork belly and cook.",
      "3. Stir in kimchi and rice.",
      "4. Season with soy sauce and sesame oil.",
      "5. Top with fried egg and scallions."
    ],
    "time": "30 minutes",
    "categories": ["Korean", "Main Course"],
    "photo": kimchiFriedrice
  },
  {
    "id": 11,
    "name": "Sausage Roll",
    "ingredients": [
      "500g Puff pastry",
      "300g Sausage meat",
      "1 Onion, chopped",
      "3 cloves Garlic, minced",
      "2 tbsp Sage, chopped",
      "1 Egg, beaten",
      "1 tsp Salt",
      "1/2 tsp Pepper"
    ],
    "process": [
      "1. Mix sausage meat with onions, garlic, and sage.",
      "2. Roll out puff pastry and fill with sausage mixture.",
      "3. Brush with egg wash.",
      "4. Bake until golden brown."
    ],
    "time": "45 minutes",
    "categories": ["British", "Snack"],
    "photo": sausageRoll
  },
  {
    "id": 12,
    "name": "Spam Rice",
    "ingredients": [
      "2 cups Rice",
      "200g Spam, diced",
      "3 tbsp Soy sauce",
      "3 cloves Garlic, minced",
      "2 Scallions, chopped",
      "2 tbsp Sesame oil"
    ],
    "process": [
      "1. Fry diced spam.",
      "2. Add garlic and cook.",
      "3. Mix in rice and soy sauce.",
      "4. Drizzle with sesame oil and top with scallions."
    ],
    "time": "20 minutes",
    "categories": ["Fusion", "Main Course"],
    "photo": spanRice
  },
  {
    "id": 13,
    "name": "Aubergine Ceviche",
    "ingredients": [
      "2 Aubergines, diced",
      "100ml Lime juice",
      "2 Tomatoes, chopped",
      "1 Onion, chopped",
      "1 bunch Cilantro, chopped",
      "1 tsp Salt",
      "1/2 tsp Pepper"
    ],
    "process": [
      "1. Dice and roast aubergine.",
      "2. Mix with lime juice, tomatoes, onions, and cilantro.",
      "3. Season with salt and pepper."
    ],
    "time": "30 minutes",
    "categories": ["Vegan", "Appetizer"],
    "photo": aubergineCeviche
  },
  {
    "id": 14,
    "name": "Kimbap",
    "ingredients": [
      "2 cups Rice",
      "4 Seaweed sheets",
      "1 Carrot, julienned",
      "100g Spinach",
      "3 Eggs, made into an omelette and sliced",
      "100g Pickled radish",
      "100g Imitation crab"
    ],
    "process": [
      "1. Cook rice and mix with sesame oil.",
      "2. Stir-fry carrots and spinach.",
      "3. Make omelette and slice.",
      "4. Place rice, vegetables, egg, and crab on seaweed sheet, roll tightly."
    ],
    "time": "40 minutes",
    "categories": ["Korean", "Snack"],
    "photo": kimbap
  },
  {
    "id": 15,
    "name": "Kimchi Risotto",
    "ingredients": [
      "1 cup Arborio rice",
      "200g Kimchi, chopped",
      "1 Onion, chopped",
      "3 cloves Garlic, minced",
      "1 liter Chicken broth",
      "2 tbsp Butter",
      "50g Parmesan cheese, grated",
      "2 tbsp Sesame oil"
    ],
    "process": [
      "1. Sauté onions and garlic in butter until soft.",
      "2. Add Arborio rice and cook until translucent.",
      "3. Gradually add chicken broth, stirring continuously until absorbed and rice is tender.",
      "4. Stir in chopped kimchi and cook for a few more minutes.",
      "5. Remove from heat and stir in Parmesan cheese and a drizzle of sesame oil.",
      "6. Serve hot, garnished with extra kimchi if desired."
    ],
    "time": "45 minutes",
    "categories": ["Korean", "Italian", "Fusion", "Main Course"],
    "photo": kimchiRisotto 
  }
]