const food = `🍇 Grapes
🍈 Melon
🍉 Watermelon
🍊 Tangerine
🍋 Lemon
🍌 Banana
🍍 Pineapple
🥭 Mango
🍎 Red Apple
🍏 Green Apple
🍐 Pear
🍑 Peach
🍒 Cherries
🍓 Strawberry
🫐 Blueberries
🥝 Kiwi Fruit
🍅 Tomato
🫒 Olive
🥥 Coconut
🥑 Avocado
🍆 Eggplant
🥔 Potato
🥕 Carrot
🌽 Ear of Corn
🌶️ Hot Pepper
🫑 Bell Pepper
🥒 Cucumber
🥬 Leafy Green
🥦 Broccoli
🧄 Garlic
🧅 Onion
🍄 Mushroom
🥜 Peanuts
🫘 Beans
🌰 Chestnut
🍞 Bread
🥐 Croissant
🥖 Baguette Bread
🫓 Flatbread
🥨 Pretzel
🥯 Bagel
🥞 Pancakes
🧇 Waffle
🧀 Cheese Wedge
🍖 Meat on Bone
🍗 Poultry Leg
🥩 Cut of Meat
🥓 Bacon
🍔 Hamburger
🍟 French Fries
🍕 Pizza
🌭 Hot Dog
🥪 Sandwich
🌮 Taco
🌯 Burrito
🫔 Tamale
🥙 Stuffed Flatbread
🧆 Falafel
🥚 Egg
🍳 Cooking
🥘 Shallow Pan of Food
🍲 Pot of Food
🫕 Fondue
🥣 Bowl with Spoon
🥗 Green Salad
🍿 Popcorn
🧈 Butter
🧂 Salt
🥫 Canned Food
🍱 Bento Box
🍘 Rice Cracker
🍙 Rice Ball
🍚 Cooked Rice
🍛 Curry Rice
🍜 Steaming Bowl
🍝 Spaghetti
🍠 Roasted Sweet Potato
🍢 Oden
🍣 Sushi
🍤 Fried Shrimp
🍥 Fish Cake with Swirl
🥮 Moon Cake
🍡 Dango
🥟 Dumpling
🥠 Fortune Cookie
🥡 Takeout Box
🦪 Oyster
🍦 Soft Ice Cream
🍧 Shaved Ice
🍨 Ice Cream
🍩 Doughnut
🍪 Cookie
🥧 Pie
🍫 Chocolate Bar
🍮 Custard
🍯 Honey Pot
🥛 Glass of Milk
🍮 Custard
🍯 Honey Pot
🥛 Glass of Milk`

const emojiAndNameList = food.split('\n')
const data = emojiAndNameList.map(pair => {
  const [emoji] = pair.match(/\p{Emoji}+/iu)
  const name = pair.slice(3)
  return { emoji, name }
})
console.log(data)