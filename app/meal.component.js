System.register(['angular2/core', './edit-meal-details.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, edit_meal_details_component_1;
    var MealComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (edit_meal_details_component_1_1) {
                edit_meal_details_component_1 = edit_meal_details_component_1_1;
            }],
        execute: function() {
            MealComponent = (function () {
                function MealComponent() {
                    this.show = false;
                    this.details = false;
                    this.onMealSelect = new core_1.EventEmitter();
                }
                MealComponent.prototype.showDetails = function () {
                    this.details = !this.details;
                };
                MealComponent.prototype.editInfo = function (clickedMeal) {
                    this.show = !this.show;
                    console.log(this.selectedMeal);
                    this.selectedMeal = clickedMeal;
                    // this.onMealSelect.emit(clickedMeal);
                };
                MealComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-display',
                        inputs: ['meal'],
                        outputs: ['onMealSelect'],
                        directives: [edit_meal_details_component_1.EditMealDetailsComponent],
                        template: "\n      <div class=\"mealInfo\">\n        <h3 (click)=\"showDetails()\">{{ meal.name }}</h3>\n        <div class=\"mealDetails\" [class.showDetails]=\"details\">\n          <p>Description: <span>{{ meal.description }}</span></p>\n          <p>Calories: <span>{{ meal.calories }}</span></p>\n          <button (click)=\"editInfo(meal)\">Edit Meal</button>\n          <edit-meal-details *ngIf=\"show\" [meal]=\"selectedMeal\"></edit-meal-details>\n        </div>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealComponent);
                return MealComponent;
            }());
            exports_1("MealComponent", MealComponent);
        }
    }
});
//# sourceMappingURL=meal.component.js.map