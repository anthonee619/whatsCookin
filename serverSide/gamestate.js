class Gamestate {
  constructor() {
    this.meals = new Array("Breakfast", "Lunch", "Dinner");
    this.mealState = this.meals[0];
    this.players = [];

  }

  getMeal() {
    return this.mealState;
  }

  nextMeal() {
    if (this.mealState === this.meals[0]) {
      // mealState is breakfast
      this.mealState = this.meals[1];
      return this.mealState;
    } else if (this.mealState === this.meals[1]) {
      /// mealState is Lunch
      this.mealState = this.meals[2];
      return this.mealState;
    } else {
      // mealState is dinner
      this.mealState = this.meals[0];
    }
  }

  addPlayer(name) {
    this.players.push({ name: name, cards: [], points: 0 });
  }
}
module.exports = { Gamestate }