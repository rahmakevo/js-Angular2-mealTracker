import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <header>
        <div class="h-container">
          <div class="bn"></div>
          <div class="titles">
            <h1>Super Meal Diary</h1>
            <h3>Meal Tracker</h3>
          </div>
        </div>
      </header>
      <meal-list
        [mealList]="meals">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Coffee", "Dirty Chai from Fresh Pot. This counts as a meal, right?", 250),
      new Meal("Pizza", "3 slices of pizza from Sizzle Pie", 450),
      new Meal("Salad", "Organic kale salad from that one food cart", 150)
    ];
  }
}
