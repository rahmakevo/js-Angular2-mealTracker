System.register(['angular2/core', './meal.model', './meal.component', './new-meal.component', './edit-meal-details.component', './healthy.pipe'], function(exports_1, context_1) {
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
    var core_1, meal_model_1, meal_component_1, new_meal_component_1, edit_meal_details_component_1, healthy_pipe_1;
    var MealListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (meal_component_1_1) {
                meal_component_1 = meal_component_1_1;
            },
            function (new_meal_component_1_1) {
                new_meal_component_1 = new_meal_component_1_1;
            },
            function (edit_meal_details_component_1_1) {
                edit_meal_details_component_1 = edit_meal_details_component_1_1;
            },
            function (healthy_pipe_1_1) {
                healthy_pipe_1 = healthy_pipe_1_1;
            }],
        execute: function() {
            MealListComponent = (function () {
                function MealListComponent() {
                    this.filterHealthy = "all";
                    this.onMealSelect = new core_1.EventEmitter();
                }
                MealListComponent.prototype.onChange = function (filterOption) {
                    this.filterHealthy = filterOption;
                };
                MealListComponent.prototype.createMeal = function (_a) {
                    var name = _a[0], description = _a[1], calories = _a[2];
                    var newMeal = new meal_model_1.Meal(name, description, calories);
                    this.mealList.push(newMeal);
                };
                MealListComponent = __decorate([
                    core_1.Component({
                        selector: 'meal-list',
                        inputs: ['mealList'],
                        pipes: [healthy_pipe_1.HealthyPipe],
                        // outputs: ['onMealSelect'],
                        directives: [meal_component_1.MealComponent, new_meal_component_1.NewMealComponent, edit_meal_details_component_1.EditMealDetailsComponent],
                        template: "\n    <new-meal (onSubmitNewMeal)=\"createMeal($event)\"></new-meal>\n    <div class=\"meals\">\n      <h1>Meals You've Nom'd Today</h1>\n      <select (change)=\"onChange($event.target.value)\" class=\"filter\">\n        <option value=\"all\">All Meals</option>\n        <option value=\"healthy\">Healthy Meals (under 300 calories)</option>\n        <option value=\"unhealthy\">Unhealthy Meals (300+ calories)</option>\n      </select>\n      <meal-display *ngFor=\"#currentMeal of mealList | healthy:filterHealthy\"\n        [meal]=\"currentMeal\" >\n      </meal-display>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], MealListComponent);
                return MealListComponent;
            }());
            exports_1("MealListComponent", MealListComponent);
        }
    }
});
//# sourceMappingURL=meal-list.component.js.map